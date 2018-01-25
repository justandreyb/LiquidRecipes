package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.config.role.CheckRoles;
import com.justandreyb.liquid_recipes.config.role.Role;
import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.mapper.FlavorMapper;
import com.justandreyb.liquid_recipes.mapper.UserMapper;
import com.justandreyb.liquid_recipes.service.FlavorService;
import com.justandreyb.liquid_recipes.service.UserService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private FlavorService flavorService;

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private FlavorMapper flavorMapper;

    @CheckRoles({Role.ADMIN, Role.CLIENT})
    @GetMapping("/im")
    UserDto getAccountData() {
        return userMapper.toUserDto(userService.getCurrentUser());
    }

    @PostMapping("/registration")
    UserDto signUp(@RequestBody UserDto user) {
        val account = userService.signUp(userMapper.fromUserDto(user));
        return userMapper.toUserDto(account);
    }

    @GetMapping("/im/flavors")
    List<FlavorDto> getUserFlavors() {
        return flavorMapper.toFlavorDtos(flavorService.getFlavorsByUser(userService.getCurrentUser()));
    }

    @PostMapping("/im/flavors")
    void getUserFlavors(@RequestBody FlavorDto flavor) {
        flavorService.addToUser(userService.getCurrentUser(), flavorMapper.fromFlavorDto(flavor));
    }
}
