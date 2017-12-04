package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.entity.Image;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
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

    @Named("toImageDtos")
    @IterableMapping(qualifiedByName = "toImageDto")
    List<ImageDto> toImageDtos(Collection<Image> images);

    @Named("toFullImageDtos")
    @IterableMapping(qualifiedByName = "toFullImageDto")
    List<ImageDto> toFullImageDtos(Collection<Image> images);

    @Named("fromImageDtos")
    @IterableMapping(qualifiedByName = "fromImageDto")
    List<Image> fromImageDtos(Collection<ImageDto> imageDtos);
}
