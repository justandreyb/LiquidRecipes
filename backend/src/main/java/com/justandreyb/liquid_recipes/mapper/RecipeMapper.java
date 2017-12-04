package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.RecipeDto;
import com.justandreyb.liquid_recipes.entity.Recipe;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        UserMapper.class,
        LikeMapper.class,
        CommentMapper.class,
        ImageMapper.class
    }
)
public interface RecipeMapper {

    @Named("toRecipeDto")
    @Mappings({
        @Mapping(target = "pg", ignore = true),
        @Mapping(target = "vg", ignore = true),
        @Mapping(target = "nicotine", ignore = true),
        @Mapping(target = "finalAmount", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikeDtos"),
        @Mapping(target = "comments", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    RecipeDto toRecipeDto(Recipe recipe);

    @Named("toFullRecipeDto")
    @Mappings({
        @Mapping(target = "creator", qualifiedByName = "toUserDto"),
        @Mapping(target = "likes", qualifiedByName = "toLikeDtos"),
        @Mapping(target = "comments", qualifiedByName = "toCommentDtos"),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    RecipeDto toFullRecipeDto(Recipe recipe);

    @Named("fromRecipeDto")
    @Mappings({
        @Mapping(target = "creator", qualifiedByName = "fromUserDto"),
        @Mapping(target = "likes", qualifiedByName = "fromLikeDto"),
        @Mapping(target = "image", qualifiedByName = "fromImageDto"),
        @Mapping(target = "comments", qualifiedByName = "fromCommentDtos")
    })
    Recipe fromRecipeDto(RecipeDto recipeDto);


    @Named("toRecipeDtos")
    @IterableMapping(qualifiedByName = "toRecipeDto")
    List<RecipeDto> toRecipeDtos(Collection<Recipe> recipes);

    @Named("toFullRecipeDtos")
    @IterableMapping(qualifiedByName = "toFullRecipeDto")
    List<RecipeDto> toFullRecipeDtos(Collection<Recipe> recipes);

    @Named("fromRecipeDtos")
    @IterableMapping(qualifiedByName = "fromRecipeDto")
    List<Recipe> fromRecipeDtos(Collection<RecipeDto> recipeDtos);
}
