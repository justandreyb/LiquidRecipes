package com.justandreyb.liquid_recipes.config;

public enum ImageResolutions {
    ICON(75, 75),
    SMALL(250, 250),
    MEDIUM(500, 500),
    LARGE(1000, 1000);

    private int width;
    private int height;

    ImageResolutions(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public String getResolution() {
        return "" + this.width + "x" + this.height;
    }
}
