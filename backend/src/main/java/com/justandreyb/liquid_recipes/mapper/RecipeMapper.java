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

import com.justandreyb.liquid_recipes.dto.RecipeDto;
import com.justandreyb.liquid_recipes.entity.Recipe;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        UserMapper.class,
        LikeMapper.class,
        CommentMapper.class,
        ImageMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.WARN
)
public interface RecipeMapper {

    @Named("toRecipeDto")
    @Mappings({
        @Mapping(target = "creator", qualifiedByName = "toUserDtoAsCreator"),
        @Mapping(target = "creatorId", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikesDtos"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "comments", qualifiedByName = "toCommentsDtos"),
        @Mapping(target = "commentsIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "flavors", qualifiedByName = "toRecipeItemsDtos"),
        @Mapping(target = "flavorsIds", ignore = true)
    })
    RecipeDto toRecipeDto(Recipe recipe);

    @Named("toRecipeDtoAsListItem")
    @Mappings({
        @Mapping(target = "pg", ignore = true),
        @Mapping(target = "vg", ignore = true),
        @Mapping(target = "nicotine", ignore = true),
        @Mapping(target = "finalAmount", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikesDtosWithOnlyId"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "comments", qualifiedByName = "toCommentsDtosWithOnlyId"),
        @Mapping(target = "commentsIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "creator", qualifiedByName = "toUserDtoAsCreator"),
        @Mapping(target = "creatorId", ignore = true),
        @Mapping(target = "flavors", qualifiedByName = "toRecipeItemsDtos"),
        @Mapping(target = "flavorsIds", ignore = true)
    })
    RecipeDto toRecipeDtoAsListItem(Recipe recipe);

    @Named("fromRecipeDto")
    Recipe fromRecipeDto(RecipeDto recipeDto);

    @Named("toRecipesDtos")
    @IterableMapping(qualifiedByName = "toRecipeDtoAsListItem")
    List<RecipeDto> toRecipesDtos(Iterable<Recipe> recipes);
}
