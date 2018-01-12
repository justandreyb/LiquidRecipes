package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.mapper.FlavorMapper;
import com.justandreyb.liquid_recipes.mapper.UserMapper;
import com.justandreyb.liquid_recipes.service.FlavorService;
import com.justandreyb.liquid_recipes.service.UserService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private FlavorService flavorService;

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private FlavorMapper flavorMapper;

    @GetMapping("/im")
        // TODO: Make auth
    UserDto getAccountData() {
        // return userMapper.toUserDto(userService.get((String)authentication.getPrincipal()));
        return userMapper.toUserDto(userService.getGuest());
    }

    @PostMapping("/registration")
    UserDto signUp(@RequestBody UserDto user) {
        val account = userService.signUp(userMapper.fromUserDto(user));
        return userMapper.toUserDto(account);
    }

    @PostMapping("/login")
    UserDto signIn(@RequestBody UserDto user) {
        return userMapper.toUserDto(userService.signIn(user.getEmail(), user.getPassword()));
    }

    @GetMapping("/im/flavors")
    List<FlavorDto> getUserFlavors() {
        // TODO: Get id from auth credentials
        return flavorMapper.toFlavorDtos(flavorService.getFlavorsByUser(userService.getGuest().getId()));
    }

    @PostMapping("/im/flavors")
    void getUserFlavors(@RequestBody FlavorDto flavor) {
        // TODO: Get id from auth credentials
        flavorService.addToUser(userService.getGuest().getId(), flavorMapper.fromFlavorDto(flavor));
    }

}
