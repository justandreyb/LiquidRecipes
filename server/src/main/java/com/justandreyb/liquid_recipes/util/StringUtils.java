package com.justandreyb.liquid_recipes.util;

import java.util.Map;

public class StringUtils {

    public static <T extends Object> String mapToString(Map<T, T> data) {
        StringBuilder builder = new StringBuilder();
        data.forEach((key, value) -> builder
            .append("\"")
            .append(key)
            .append("\":\"")
            .append(value)
            .append("\", "));
        builder.deleteCharAt(builder.lastIndexOf(","));
        return builder.toString();
    }

}
