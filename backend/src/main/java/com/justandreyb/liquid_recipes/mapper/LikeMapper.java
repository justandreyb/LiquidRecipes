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
    @Mapping(target = "user", ignore = true)
    LikeDto toLikeDto(Like like);

    @Named("toFullLikeDto")
    @Mapping(target = "user", qualifiedByName = "toUserDto")
    LikeDto toFullLikeDto(Like like);

    @Named("fromLikeDto")
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
