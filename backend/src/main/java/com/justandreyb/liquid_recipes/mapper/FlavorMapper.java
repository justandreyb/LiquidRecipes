package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.entity.Flavor;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        ManufacturerMapper.class,
        LikeMapper.class,
        CommentMapper.class,
        ImageMapper.class
    }
)
public interface FlavorMapper {

    @Named("toFlavorDto")
    @Mappings({
        @Mapping(target = "description", ignore = true),
        @Mapping(target = "manufacturer", qualifiedByName = "toManufacturerDto"),
        @Mapping(target = "manufacturerId", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikeDtos"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true)
    })
    FlavorDto toFlavorDto(Flavor flavor);

    @Named("toFullFlavorDto")
    @Mappings({
        @Mapping(target = "manufacturer", qualifiedByName = "toManufacturerDto"),
        @Mapping(target = "likes", qualifiedByName = "toLikeDtos"),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "comments", qualifiedByName = "toCommentDtos")
    })
    FlavorDto toFullFlavorDto(Flavor flavor);

    @Named("fromFlavorDto")
    @Mappings({
        @Mapping(target = "manufacturer", ignore = true),
        @Mapping(target = "likes", ignore = true),
        @Mapping(target = "image", ignore = true),
        @Mapping(target = "comments", ignore = true)
    })
    Flavor fromFlavorDto(FlavorDto flavorDto);


    @Named("toFlavorDtos")
    @IterableMapping(qualifiedByName = "toFlavorDto")
    List<FlavorDto> toFlavorDtos(Collection<Flavor> flavors);

    @Named("toFullFlavorDtos")
    @IterableMapping(qualifiedByName = "toFullFlavorDto")
    List<FlavorDto> toFullFlavorDtos(Collection<Flavor> flavors);

    @Named("fromFlavorDtos")
    @IterableMapping(qualifiedByName = "fromFlavorDto")
    List<Flavor> fromFlavorDtos(Collection<FlavorDto> flavorDtos);

}
