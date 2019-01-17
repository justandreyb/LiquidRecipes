package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.entity.Country;
import com.justandreyb.liquid_recipes.entity.Image;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-01-17T18:40:01+0300",
    comments = "version: 1.3.0.Beta2, compiler: javac, environment: Java 1.8.0_191 (Oracle Corporation)"
)
@Component
public class CountryMapperImpl implements CountryMapper {

    @Autowired
    private ImageMapper imageMapper;

    @Override
    public CountryDto toCountryDtoWithCode(Country country) {
        if ( country == null ) {
            return null;
        }

        CountryDto countryDto = new CountryDto();

        if ( country.getId() != null ) {
            countryDto.setId( country.getId() );
        }
        if ( country.getCode() != null ) {
            countryDto.setCode( country.getCode() );
        }
        if ( country.getImage() != null ) {
            countryDto.setImage( imageMapper.toImageDto( country.getImage() ) );
        }

        return countryDto;
    }

    @Override
    public CountryDto toCountryDtoWithName(Country country) {
        if ( country == null ) {
            return null;
        }

        CountryDto countryDto = new CountryDto();

        if ( country.getId() != null ) {
            countryDto.setId( country.getId() );
        }
        if ( country.getName() != null ) {
            countryDto.setName( country.getName() );
        }
        if ( country.getImage() != null ) {
            countryDto.setImage( imageMapper.toImageDto( country.getImage() ) );
        }

        return countryDto;
    }

    @Override
    public Country fromCountryDto(CountryDto countryDto) {
        if ( countryDto == null ) {
            return null;
        }

        Country country = new Country();

        if ( countryDto.getId() != null ) {
            country.setId( countryDto.getId() );
        }
        if ( countryDto.getName() != null ) {
            country.setName( countryDto.getName() );
        }
        if ( countryDto.getCode() != null ) {
            country.setCode( countryDto.getCode() );
        }
        if ( countryDto.getImage() != null ) {
            country.setImage( imageDtoToImage( countryDto.getImage() ) );
        }

        return country;
    }

    @Override
    public List<CountryDto> toCountriesDtosWithName(Iterable<Country> countries) {
        if ( countries == null ) {
            return null;
        }

        List<CountryDto> list = new ArrayList<CountryDto>();
        for ( Country country : countries ) {
            list.add( toCountryDtoWithName( country ) );
        }

        return list;
    }

    protected Image imageDtoToImage(ImageDto imageDto) {
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
}
