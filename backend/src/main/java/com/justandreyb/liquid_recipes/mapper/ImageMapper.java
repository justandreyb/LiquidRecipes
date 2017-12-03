package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.entity.Image;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        componentModel = "spring"
)
public interface ImageMapper {

    @Named(value = "toImageDto")
    @Mapping(target = "creationDate", ignore = true)
    ImageDto toImageDto(Image image);

    @Named(value = "toFullImageDto")
    ImageDto toFullImageDto(Image image);

    @Named(value = "fromImageDto")
    Image fromImageDto(ImageDto imageDto);
}
