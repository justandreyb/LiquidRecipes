package com.justandreyb.liquid_recipes.util;

import java.lang.reflect.ParameterizedType;

public class GenericUtils {

    public static String getClassName(Class aClass) {
        String name = ((ParameterizedType) aClass
                .getGenericSuperclass()).getActualTypeArguments()[0].getTypeName();
        name = name.substring(name.lastIndexOf(".") + 1);
        return name;
    }

}
