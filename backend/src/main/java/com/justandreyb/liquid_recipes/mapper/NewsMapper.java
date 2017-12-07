package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.NewsDto;
import com.justandreyb.liquid_recipes.entity.News;
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
public interface NewsMapper {

    @Named("toNewsDto")
    @Mappings({
        @Mapping(target = "text", ignore = true),
        @Mapping(target = "creator", ignore = true),
        @Mapping(target = "likes", qualifiedByName = "toLikeDtos"),
        @Mapping(target = "comments", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    NewsDto toNewsDto(News news);

    @Named("toFullNewsDto")
    @Mappings({
        @Mapping(target = "creator", qualifiedByName = "toUserDto"),
        @Mapping(target = "likes", qualifiedByName = "toLikeDtos"),
        @Mapping(target = "comments", qualifiedByName = "toCommentDtos"),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    NewsDto toFullNewsDto(News news);

    @Named("fromNewsDto")
    @Mappings({
        @Mapping(target = "creator", qualifiedByName = "fromUserDto"),
        @Mapping(target = "likes", qualifiedByName = "fromLikeDtos"),
        @Mapping(target = "image", qualifiedByName = "fromImageDto"),
        @Mapping(target = "comments", qualifiedByName = "fromCommentDto")
    })
    News fromNewsDto(NewsDto newsDto);


    @Named("toNewsDtos")
    @IterableMapping(qualifiedByName = "toNewsDto")
    List<NewsDto> toNewsDtos(Collection<News> news);

    @Named("toFullNewsDtos")
    @IterableMapping(qualifiedByName = "toFullNewsDto")
    List<NewsDto> toFullNewsDtos(Collection<News> news);

    @Named("fromNewsDtos")
    @IterableMapping(qualifiedByName = "fromNewsDto")
    List<News> fromNewsDtos(Collection<NewsDto> newsDtos);
}
