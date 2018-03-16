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

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.entity.Comment;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        UserMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface CommentMapper {

    @Named("toCommentDto")
    @Mappings({
        @Mapping(target = "user", qualifiedByName = "toUserDtoAsCreator"),
        @Mapping(target = "userId", ignore = true)
    })
    CommentDto toCommentDto(Comment comment);

    @Named("toCommentDtoWithOnlyId")
    @Mappings({
        @Mapping(target = "user", ignore = true),
        @Mapping(target = "userId", ignore = true),
        @Mapping(target = "text", ignore = true)
    })
    CommentDto toCommentDtoWithOnlyId(Comment comment);

    @Named("fromCommentDto")
    Comment fromCommentDto(CommentDto commentDto);

    @Named("toCommentsDtos")
    @IterableMapping(qualifiedByName = "toCommentDto")
    List<CommentDto> toCommentDtos(Iterable<Comment> comments);

    @Named("toCommentsDtosWithOnlyId")
    @IterableMapping(qualifiedByName = "toCommentDtoWithOnlyId")
    List<CommentDto> toCommentsDtosWithOnlyId(Iterable<Comment> comments);
}
