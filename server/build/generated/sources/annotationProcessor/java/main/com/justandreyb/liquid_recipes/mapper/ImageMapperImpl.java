package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.entity.Image;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-01-17T18:40:00+0300",
    comments = "version: 1.3.0.Beta2, compiler: javac, environment: Java 1.8.0_191 (Oracle Corporation)"
)
@Component
public class ImageMapperImpl implements ImageMapper {

    @Override
    public ImageDto toImageDto(Image image) {
        if ( image == null ) {
            return null;
        }

        ImageDto imageDto = new ImageDto();

        if ( image.getId() != null ) {
            imageDto.setId( image.getId() );
        }
        if ( image.getPath() != null ) {
            imageDto.setPath( image.getPath() );
        }

        return imageDto;
    }

    @Override
    public ImageDto toImageDtoWithCreationDate(Image image) {
        if ( image == null ) {
            return null;
        }

        ImageDto imageDto = new ImageDto();

        if ( image.getId() != null ) {
            imageDto.setId( image.getId() );
        }
        if ( image.getPath() != null ) {
            imageDto.setPath( image.getPath() );
        }
        if ( image.getCreationDate() != null ) {
            imageDto.setCreationDate( image.getCreationDate() );
        }

        return imageDto;
    }

    @Override
    public Image fromImageDto(ImageDto imageDto) {
        if ( imageDto == null ) {
            return null;
        }

        Image image = new Image();

        if ( imageDto.getId() != null ) {
            image.setId( imageDto.getId() );
        }
        if ( imageDto.getPath() != null ) {
            image.setPath( imageDto.getPath() );
        }
        if ( imageDto.getCreationDate() != null ) {
            image.setCreationDate( imageDto.getCreationDate() );
        }

        return image;
    }

    @Override
    public List<ImageDto> toImagesDtos(Iterable<Image> images) {
        if ( images == null ) {
            return null;
        }

        List<ImageDto> list = new ArrayList<ImageDto>();
        for ( Image image : images ) {
            list.add( toImageDto( image ) );
        }

        return list;
    }
}
