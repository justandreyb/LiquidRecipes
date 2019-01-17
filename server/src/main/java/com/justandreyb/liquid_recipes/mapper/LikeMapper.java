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

import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.entity.Like;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        UserMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface LikeMapper {

    @Named("toLikeDto")
    @Mappings({
        @Mapping(target = "user", qualifiedByName = "toUserDtoAsCreator"),
        @Mapping(target = "userId", ignore = true)
    })
    LikeDto toLikeDto(Like like);

    @Named("toLikeDtoWithOnlyId")
    @Mappings({
        @Mapping(target = "user", ignore = true),
        @Mapping(target = "userId", ignore = true)
    })
    LikeDto toLikeDtoWithOnlyId(Like like);

    @Named("fromLikeDto")
    Like fromLikeDto(LikeDto likeDto);

    @Named("toLikesDtos")
    @IterableMapping(qualifiedByName = "toLikeDto")
    List<LikeDto> toLikesDtos(Iterable<Like> likes);

    @Named("toLikesDtosWithOnlyId")
    @IterableMapping(qualifiedByName = "toLikeDtoWithOnlyId")
    List<LikeDto> toLikesDtosWithOnlyId(Iterable<Like> likes);
}
