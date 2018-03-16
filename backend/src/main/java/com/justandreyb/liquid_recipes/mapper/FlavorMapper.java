package com.justandreyb.liquid_recipes.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.entity.Flavor;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        ManufacturerMapper.class,
        LikeMapper.class,
        CommentMapper.class,
        ImageMapper.class,
        FlavorTypeMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.WARN
)
public interface FlavorMapper {

    @Named("toFlavorDto")
    @Mappings({
        @Mapping(target = "manufacturer", qualifiedByName = "toManufacturerDtoOnlyWithLogo"),
        @Mapping(target = "manufacturerId", ignore = true),
        @Mapping(target = "flavorType", qualifiedByName = "toFlavorTypeDtoWithOnlyName"),
        @Mapping(target = "flavorTypeId", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikesDtos"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "comments", qualifiedByName = "toCommentsDtos"),
        @Mapping(target = "commentsIds", ignore = true)
    })
    FlavorDto toFlavorDto(Flavor flavor);

    @Named("toFlavorDtoAsListItem")
    @Mappings({
        @Mapping(target = "manufacturer", qualifiedByName = "toManufacturerDtoOnlyWithLogo"),
        @Mapping(target = "manufacturerId", ignore = true),
        @Mapping(target = "flavorType", qualifiedByName = "toFlavorTypeDtoWithOnlyName"),
        @Mapping(target = "flavorTypeId", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikesDtosWithOnlyId"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "comments", qualifiedByName = "toCommentsDtosWithOnlyId"),
        @Mapping(target = "commentsIds", ignore = true)
    })
    FlavorDto toFlavorDtoAsListItem(Flavor flavor);

    @Named("fromFlavorDto")
    Flavor fromFlavorDto(FlavorDto flavorDto);

    @Named("toFlavorsDtos")
    @IterableMapping(qualifiedByName = "toFlavorDtoAsListItem")
    List<FlavorDto> toFlavorsDtos(Iterable<Flavor> flavors);

}
