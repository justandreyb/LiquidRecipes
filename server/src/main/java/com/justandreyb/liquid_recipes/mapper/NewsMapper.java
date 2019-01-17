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

import com.justandreyb.liquid_recipes.dto.NewsDto;
import com.justandreyb.liquid_recipes.entity.News;

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
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface NewsMapper {

    @Named("toNewsDto")
    @Mappings({
        @Mapping(target = "creator", qualifiedByName = "toUserDtoAsCreator"),
        @Mapping(target = "creatorId", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikesDtos"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "comments", qualifiedByName = "toCommentsDtos"),
        @Mapping(target = "commentsIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true)
    })
    NewsDto toNewsDto(News news);

    @Named("toNewsDtoAsListItem")
    @Mappings({
        @Mapping(target = "text", ignore = true),
        @Mapping(target = "creator", qualifiedByName = "toUserDtoAsCreator"),
        @Mapping(target = "creatorId", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikesDtosWithOnlyId"),
        @Mapping(target = "likesIds", ignore = true),
        @Mapping(target = "comments", qualifiedByName = "toCommentsDtosWithOnlyId"),
        @Mapping(target = "commentsIds", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "imageId", ignore = true)
    })
    NewsDto toNewsDtoAsListItem(News news);

    @Named("fromNewsDto")
    News fromNewsDto(NewsDto newsDto);

    @Named("toNewsDtos")
    @IterableMapping(qualifiedByName = "toNewsDtoAsListItem")
    List<NewsDto> toNewsDtos(Iterable<News> news);
}
