package com.justandreyb.liquid_recipes.controller;

import java.util.List;

import lombok.val;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.justandreyb.liquid_recipes.config.role.CheckRoles;
import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.UserDto;

import static com.justandreyb.liquid_recipes.config.role.Role.*;

@RestController
@RequestMapping("/accounts")
public class UserController extends ApplicationController {

    @CheckRoles(value = {ADMIN, CLIENT}, message = "You must be logged in")
    @GetMapping("/im")
    UserDto getAccountData() {
        return userMapper.toUserInfoDto(userService.getCurrentUser());
    }

    @CheckRoles(value = {ADMIN, GUEST}, message = "You already have account")
    @PostMapping("/registration")
    UserDto signUp(@RequestBody UserDto user) {
        val account = userService.signUp(userMapper.fromUserDto(user));
        return userMapper.toUserDto(account);
    }

    @CheckRoles({ADMIN, CLIENT})
    @GetMapping("/im/flavors")
    List<FlavorDto> getUserFlavors() {
        return flavorMapper.toFlavorDtos(flavorService.getFlavorsByUser(userService.getCurrentUser()));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/im/flavors")
    void getUserFlavors(@RequestBody FlavorDto flavor) {
        flavorService.addToUser(userService.getCurrentUser(), flavorMapper.fromFlavorDto(flavor));
    }
}
