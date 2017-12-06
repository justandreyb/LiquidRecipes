package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.mapper.FlavorMapper;
import com.justandreyb.liquid_recipes.mapper.UserMapper;
import com.justandreyb.liquid_recipes.service.FlavorService;
import com.justandreyb.liquid_recipes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/im")
    // TODO: Make auth
    UserDto getAccountData() {
        // return userMapper.toUserDto(userService.get((String)authentication.getPrincipal()));
        User user = new User();
        user.setEmail("test@em.com");
        user.setName("Test");
        return userMapper.toUserDto(user);
    }

    @PostMapping("/registration")
    void signUp(@RequestBody UserDto user) {
        userService.signUp(userMapper.fromUserDto(user));
    }

    @PostMapping("/login")
    UserDto signIn(@RequestBody UserDto user) {
        return userMapper.toUserDto(userService.signIn(user.getEmail(), user.getPassword()));
    }

    @GetMapping("/im/flavors")
    List<FlavorDto> getUserFlavors() {
        // TODO: Get id from auth credentials
        return flavorMapper.toFlavorDtos(flavorService.getFlavorsByUser("1"));
    }

    @PostMapping("/im/flavors")
    void getUserFlavors(@RequestBody FlavorDto flavor) {
        // TODO: Get id from auth credentials
        flavorService.addToUser("1", flavorMapper.fromFlavorDto(flavor));
    }

}
