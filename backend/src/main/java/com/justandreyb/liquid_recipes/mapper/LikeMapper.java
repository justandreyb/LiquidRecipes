package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.entity.Like;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {UserMapper.class}
)
public interface LikeMapper {

    @Named("toLikeDto")
    @Mappings({
        @Mapping(target = "user", ignore = true),
        @Mapping(target = "userId", ignore = true)
    })
    LikeDto toLikeDto(Like like);

    @Named("toFullLikeDto")
    @Mappings({
        @Mapping(target = "user", qualifiedByName = "toUserDto"),
        @Mapping(target = "userId", ignore = true)
    })
    LikeDto toFullLikeDto(Like like);

    @Named("fromLikeDto")
    @Mapping(target = "user", ignore = true)
    Like fromLikeDto(LikeDto likeDto);

    @Named("toLikeDtos")
    @IterableMapping(qualifiedByName = "toLikeDto")
    List<LikeDto> toLikeDtos(Collection<Like> likes);

    @Named("toFullLikeDtos")
    @IterableMapping(qualifiedByName = "toFullLikeDto")
    List<LikeDto> toFullLikeDtos(Collection<Like> likes);

    @Named("fromLikeDtos")
    @IterableMapping(qualifiedByName = "fromLikeDto")
    List<Like> fromLikeDtos(Collection<LikeDto> likeDtos);
}
