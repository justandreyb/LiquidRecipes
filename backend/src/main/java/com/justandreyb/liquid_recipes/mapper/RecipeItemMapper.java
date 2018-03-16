package com.justandreyb.liquid_recipes.mapper;

import java.util.Collection;
import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.RecipeItemDto;
import com.justandreyb.liquid_recipes.entity.RecipeItem;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        FlavorMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface RecipeItemMapper {

    @Named("toRecipeItemDto")
    @Mappings({
        @Mapping(target = "flavor", qualifiedByName = "toFlavorDtoAsListItem"),
        @Mapping(target = "flavorId", ignore = true)
    })
    RecipeItemDto toRecipeItemDto(RecipeItem recipeItem);

    @Named("toRecipeItemDtoWithOnlyFlavor")
    @Mappings({
        @Mapping(target = "flavor", qualifiedByName = "toFlavorDtoAsListItem"),
        @Mapping(target = "flavorId", ignore = true),
        @Mapping(target = "ml", ignore = true),
        @Mapping(target = "drops", ignore = true)
    })
    RecipeItemDto toRecipeItemDtoWithOnlyFlavor(RecipeItem recipeItem);

    @Named("fromRecipeItemDto")
    RecipeItem fromRecipeItemDto(RecipeItemDto recipeItemDto);

    @Named("toRecipeItemsDtos")
    @IterableMapping(qualifiedByName = "toRecipeItemDto")
    List<RecipeItemDto> toRecipeItemsDtos(Iterable<RecipeItem> recipeItems);
}
