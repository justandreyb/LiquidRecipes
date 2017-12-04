package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.entity.Comment;
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
public interface CommentMapper {

    @Named("toCommentDto")
    @Mapping(target = "user", ignore = true)
    CommentDto toCommentDto(Comment comment);

    @Named("toFullCommentDto")
    @Mapping(target = "user", qualifiedByName = "toUserDto")
    CommentDto toFullCommentDto(Comment comment);

    @Named("fromCommentDto")
    Comment fromCommentDto(CommentDto commentDto);

    @Named("toCommentDtos")
    @IterableMapping(qualifiedByName = "toCommentDto")
    List<CommentDto> toCommentDtos(Collection<Comment> comments);

    @Named("toFullCommentDtos")
    @IterableMapping(qualifiedByName = "toFullCommentDto")
    List<CommentDto> toFullCommentDtos(Collection<Comment> comments);

    @Named("fromCommentDtos")
    @IterableMapping(qualifiedByName = "fromCommentDto")
    List<Comment> fromCommentDtos(Collection<CommentDto> commentDtos);

}
