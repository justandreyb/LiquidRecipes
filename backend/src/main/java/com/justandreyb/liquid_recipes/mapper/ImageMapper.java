package com.justandreyb.liquid_recipes.mapper;

import java.util.Collection;
import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.entity.Image;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface ImageMapper {

    @Named(value = "toImageDto")
    @Mapping(target = "creationDate", ignore = true)
    ImageDto toImageDto(Image image);

    @Named(value = "toImageDtoWithCreationDate")
    ImageDto toImageDtoWithCreationDate(Image image);

    @Named(value = "fromImageDto")
    Image fromImageDto(ImageDto imageDto);

    @Named("toImagesDtos")
    @IterableMapping(qualifiedByName = "toImageDto")
    List<ImageDto> toImagesDtos(Iterable<Image> images);
}
