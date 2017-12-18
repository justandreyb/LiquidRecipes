package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.RecipeItemDto;
import com.justandreyb.liquid_recipes.entity.RecipeItem;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring"
)
public interface RecipeItemMapper {

    @Named("toRecipeItemDto")
    @Mappings({
        @Mapping(target = "flavor", qualifiedByName = "toFlavorDto"),
        @Mapping(target = "flavorId", ignore = true),
        @Mapping(target = "ml", ignore = true),
        @Mapping(target = "drops", ignore = true)
    })
    RecipeItemDto toRecipeItemDto(RecipeItem recipeItem);

    @Named("toFullRecipeItemDto")
    @Mappings({
        @Mapping(target = "flavor", qualifiedByName = "toFlavorDto"),
        @Mapping(target = "flavorId", ignore = true)
    })
    RecipeItemDto toFullRecipeItemDto(RecipeItem recipeItem);

    @Named("fromRecipeItemDto")
    @Mapping(target = "flavor", ignore = true)
    RecipeItem fromRecipeItemDto(RecipeItemDto recipeItemDto);

    @Named("toRecipeItemDtos")
    @IterableMapping(qualifiedByName = "toRecipeItemDto")
    List<RecipeItemDto> toRecipeItemDtos(Collection<RecipeItem> recipeItems);

    @Named("toFullRecipeItemDtos")
    @IterableMapping(qualifiedByName = "toFullRecipeItemDto")
    List<RecipeItemDto> toFullRecipeItemDtos(Collection<RecipeItem> recipeItems);

    @Named("fromRecipeItemDtos")
    @IterableMapping(qualifiedByName = "fromRecipeItemDto")
    List<RecipeItem> fromRecipeItemDtos(Collection<RecipeItemDto> recipeItemDtos);
}
