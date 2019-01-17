package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.entity.Country;
import com.justandreyb.liquid_recipes.entity.Image;
import com.justandreyb.liquid_recipes.entity.Manufacturer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-01-17T18:40:00+0300",
    comments = "version: 1.3.0.Beta2, compiler: javac, environment: Java 1.8.0_191 (Oracle Corporation)"
)
@Component
public class ManufacturerMapperImpl implements ManufacturerMapper {

    @Autowired
    private CountryMapper countryMapper;
    @Autowired
    private ImageMapper imageMapper;

    @Override
    public ManufacturerDto toManufacturerDto(Manufacturer manufacturer) {
        if ( manufacturer == null ) {
            return null;
        }

        ManufacturerDto manufacturerDto = new ManufacturerDto();

        if ( manufacturer.getId() != null ) {
            manufacturerDto.setId( manufacturer.getId() );
        }
        if ( manufacturer.getName() != null ) {
            manufacturerDto.setName( manufacturer.getName() );
        }
        if ( manufacturer.getDescription() != null ) {
            manufacturerDto.setDescription( manufacturer.getDescription() );
        }
        if ( manufacturer.getCountry() != null ) {
            manufacturerDto.setCountry( countryMapper.toCountryDtoWithCode( manufacturer.getCountry() ) );
        }
        if ( manufacturer.getLogo() != null ) {
            manufacturerDto.setLogo( imageMapper.toImageDto( manufacturer.getLogo() ) );
        }

        return manufacturerDto;
    }

    @Override
    public ManufacturerDto toManufacturerDtoOnlyWithLogo(Manufacturer manufacturer) {
        if ( manufacturer == null ) {
            return null;
        }

        ManufacturerDto manufacturerDto = new ManufacturerDto();

        if ( manufacturer.getId() != null ) {
            manufacturerDto.setId( manufacturer.getId() );
        }
        if ( manufacturer.getName() != null ) {
            manufacturerDto.setName( manufacturer.getName() );
        }
        if ( manufacturer.getLogo() != null ) {
            manufacturerDto.setLogo( imageMapper.toImageDto( manufacturer.getLogo() ) );
        }

        return manufacturerDto;
    }

    @Override
    public Manufacturer fromManufacturerDto(ManufacturerDto manufacturerDto) {
        if ( manufacturerDto == null ) {
            return null;
        }

        Manufacturer manufacturer = new Manufacturer();

        if ( manufacturerDto.getId() != null ) {
            manufacturer.setId( manufacturerDto.getId() );
        }
        if ( manufacturerDto.getName() != null ) {
            manufacturer.setName( manufacturerDto.getName() );
        }
        if ( manufacturerDto.getDescription() != null ) {
            manufacturer.setDescription( manufacturerDto.getDescription() );
        }
        if ( manufacturerDto.getCountry() != null ) {
            manufacturer.setCountry( countryDtoToCountry( manufacturerDto.getCountry() ) );
        }
        if ( manufacturerDto.getLogo() != null ) {
            manufacturer.setLogo( imageDtoToImage( manufacturerDto.getLogo() ) );
        }

        return manufacturer;
    }

    @Override
    public List<ManufacturerDto> toManufacturersDtos(Iterable<Manufacturer> manufacturers) {
        if ( manufacturers == null ) {
            return null;
        }

        List<ManufacturerDto> list = new ArrayList<ManufacturerDto>();
        for ( Manufacturer manufacturer : manufacturers ) {
            list.add( toManufacturerDtoOnlyWithLogo( manufacturer ) );
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

    protected Country countryDtoToCountry(CountryDto countryDto) {
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
}
