package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.FlavorTypeDto;
import com.justandreyb.liquid_recipes.entity.FlavorType;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-01-17T18:40:01+0300",
    comments = "version: 1.3.0.Beta2, compiler: javac, environment: Java 1.8.0_191 (Oracle Corporation)"
)
@Component
public class FlavorTypeMapperImpl implements FlavorTypeMapper {

    @Override
    public FlavorTypeDto toFlavorTypeDto(FlavorType role) {
        if ( role == null ) {
            return null;
        }

        FlavorTypeDto flavorTypeDto = new FlavorTypeDto();

        if ( role.getId() != null ) {
            flavorTypeDto.setId( role.getId() );
        }
        if ( role.getName() != null ) {
            flavorTypeDto.setName( role.getName() );
        }

        return flavorTypeDto;
    }

    @Override
    public FlavorTypeDto toFlavorTypeDtoWithOnlyName(FlavorType role) {
        if ( role == null ) {
            return null;
        }

        FlavorTypeDto flavorTypeDto = new FlavorTypeDto();

        if ( role.getName() != null ) {
            flavorTypeDto.setName( role.getName() );
        }

        return flavorTypeDto;
    }

    @Override
    public List<FlavorTypeDto> toFlavorTypeDtos(Iterable<FlavorType> flavorTypes) {
        if ( flavorTypes == null ) {
            return null;
        }

        List<FlavorTypeDto> list = new ArrayList<FlavorTypeDto>();
        for ( FlavorType flavorType : flavorTypes ) {
            list.add( toFlavorTypeDto( flavorType ) );
        }

        return list;
    }

    @Override
    public List<FlavorTypeDto> toFlavorTypesDtosWithOnlyName(Iterable<FlavorType> flavorTypes) {
        if ( flavorTypes == null ) {
            return null;
        }

        List<FlavorTypeDto> list = new ArrayList<FlavorTypeDto>();
        for ( FlavorType flavorType : flavorTypes ) {
            list.add( toFlavorTypeDtoWithOnlyName( flavorType ) );
        }

        return list;
    }
}
