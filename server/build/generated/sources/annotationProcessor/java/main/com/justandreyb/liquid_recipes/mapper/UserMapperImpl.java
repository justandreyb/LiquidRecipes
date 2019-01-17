package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.dto.RoleDto;
import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.entity.Country;
import com.justandreyb.liquid_recipes.entity.Flavor;
import com.justandreyb.liquid_recipes.entity.Image;
import com.justandreyb.liquid_recipes.entity.Like;
import com.justandreyb.liquid_recipes.entity.Manufacturer;
import com.justandreyb.liquid_recipes.entity.Role;
import com.justandreyb.liquid_recipes.entity.User;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-01-17T18:40:02+0300",
    comments = "version: 1.3.0.Beta2, compiler: javac, environment: Java 1.8.0_191 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Autowired
    private ImageMapper imageMapper;
    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private FlavorMapper flavorMapper;

    @Override
    public UserDto toUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        if ( user.getId() != null ) {
            userDto.setId( user.getId() );
        }
        if ( user.getName() != null ) {
            userDto.setName( user.getName() );
        }
        if ( user.getEmail() != null ) {
            userDto.setEmail( user.getEmail() );
        }
        if ( user.getRegistrationDate() != null ) {
            userDto.setRegistrationDate( user.getRegistrationDate() );
        }
        if ( user.getImage() != null ) {
            userDto.setImage( imageMapper.toImageDto( user.getImage() ) );
        }
        List<RoleDto> list = roleMapper.toRolesDtosWithOnlyName( user.getRoles() );
        if ( list != null ) {
            userDto.setRoles( list );
        }
        List<FlavorDto> list1 = flavorMapper.toFlavorsDtos( user.getFlavors() );
        if ( list1 != null ) {
            userDto.setFlavors( list1 );
        }

        return userDto;
    }

    @Override
    public UserDto toUserDtoAsCreator(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        if ( user.getId() != null ) {
            userDto.setId( user.getId() );
        }
        if ( user.getName() != null ) {
            userDto.setName( user.getName() );
        }
        if ( user.getImage() != null ) {
            userDto.setImage( imageMapper.toImageDto( user.getImage() ) );
        }

        return userDto;
    }

    @Override
    public User fromUserDto(UserDto user) {
        if ( user == null ) {
            return null;
        }

        User user1 = new User();

        if ( user.getId() != null ) {
            user1.setId( user.getId() );
        }
        if ( user.getName() != null ) {
            user1.setName( user.getName() );
        }
        if ( user.getEmail() != null ) {
            user1.setEmail( user.getEmail() );
        }
        if ( user.getPassword() != null ) {
            user1.setPassword( user.getPassword() );
        }
        if ( user.getRegistrationDate() != null ) {
            user1.setRegistrationDate( user.getRegistrationDate() );
        }
        if ( user.getImage() != null ) {
            user1.setImage( imageDtoToImage( user.getImage() ) );
        }
        Set<Flavor> set = flavorDtoListToFlavorSet( user.getFlavors() );
        if ( set != null ) {
            user1.setFlavors( set );
        }
        Set<Role> set1 = roleDtoListToRoleSet( user.getRoles() );
        if ( set1 != null ) {
            user1.setRoles( set1 );
        }

        return user1;
    }

    @Override
    public List<UserDto> toUsersDtos(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserDto> list = new ArrayList<UserDto>( users.size() );
        for ( User user : users ) {
            list.add( toUserDtoAsCreator( user ) );
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

    protected Manufacturer manufacturerDtoToManufacturer(ManufacturerDto manufacturerDto) {
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

    protected Set<Flavor> flavorDtoListToFlavorSet(List<FlavorDto> list) {
        if ( list == null ) {
            return null;
        }

        Set<Flavor> set = new HashSet<Flavor>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( FlavorDto flavorDto : list ) {
            set.add( flavorDtoToFlavor( flavorDto ) );
        }

        return set;
    }

    protected Role roleDtoToRole(RoleDto roleDto) {
        if ( roleDto == null ) {
            return null;
        }

        Role role = new Role();

        if ( roleDto.getId() != null ) {
            role.setId( roleDto.getId() );
        }
        if ( roleDto.getName() != null ) {
            role.setName( roleDto.getName() );
        }

        return role;
    }

    protected Set<Role> roleDtoListToRoleSet(List<RoleDto> list) {
        if ( list == null ) {
            return null;
        }

        Set<Role> set = new HashSet<Role>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( RoleDto roleDto : list ) {
            set.add( roleDtoToRole( roleDto ) );
        }

        return set;
    }

    protected User userDtoToUser(UserDto userDto) {
        if ( userDto == null ) {
            return null;
        }

        User user = new User();

        if ( userDto.getId() != null ) {
            user.setId( userDto.getId() );
        }
        if ( userDto.getName() != null ) {
            user.setName( userDto.getName() );
        }
        if ( userDto.getEmail() != null ) {
            user.setEmail( userDto.getEmail() );
        }
        if ( userDto.getPassword() != null ) {
            user.setPassword( userDto.getPassword() );
        }
        if ( userDto.getRegistrationDate() != null ) {
            user.setRegistrationDate( userDto.getRegistrationDate() );
        }
        if ( userDto.getImage() != null ) {
            user.setImage( imageDtoToImage( userDto.getImage() ) );
        }
        Set<Flavor> set = flavorDtoListToFlavorSet( userDto.getFlavors() );
        if ( set != null ) {
            user.setFlavors( set );
        }
        Set<Role> set1 = roleDtoListToRoleSet( userDto.getRoles() );
        if ( set1 != null ) {
            user.setRoles( set1 );
        }

        return user;
    }

    protected Like likeDtoToLike(LikeDto likeDto) {
        if ( likeDto == null ) {
            return null;
        }

        Like like = new Like();

        if ( likeDto.getId() != null ) {
            like.setId( likeDto.getId() );
        }
        if ( likeDto.getUser() != null ) {
            like.setUser( userDtoToUser( likeDto.getUser() ) );
        }
        if ( likeDto.getCreationDate() != null ) {
            like.setCreationDate( likeDto.getCreationDate() );
        }

        return like;
    }

    protected Set<Like> likeDtoListToLikeSet(List<LikeDto> list) {
        if ( list == null ) {
            return null;
        }

        Set<Like> set = new HashSet<Like>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( LikeDto likeDto : list ) {
            set.add( likeDtoToLike( likeDto ) );
        }

        return set;
    }

    protected Comment commentDtoToComment(CommentDto commentDto) {
        if ( commentDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        if ( commentDto.getId() != null ) {
            comment.setId( commentDto.getId() );
        }
        if ( commentDto.getText() != null ) {
            comment.setText( commentDto.getText() );
        }
        if ( commentDto.getDate() != null ) {
            comment.setDate( commentDto.getDate() );
        }
        if ( commentDto.getUser() != null ) {
            comment.setUser( userDtoToUser( commentDto.getUser() ) );
        }

        return comment;
    }

    protected Set<Comment> commentDtoListToCommentSet(List<CommentDto> list) {
        if ( list == null ) {
            return null;
        }

        Set<Comment> set = new HashSet<Comment>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( CommentDto commentDto : list ) {
            set.add( commentDtoToComment( commentDto ) );
        }

        return set;
    }

    protected Flavor flavorDtoToFlavor(FlavorDto flavorDto) {
        if ( flavorDto == null ) {
            return null;
        }

        Flavor flavor = new Flavor();

        if ( flavorDto.getId() != null ) {
            flavor.setId( flavorDto.getId() );
        }
        if ( flavorDto.getName() != null ) {
            flavor.setName( flavorDto.getName() );
        }
        if ( flavorDto.getDescription() != null ) {
            flavor.setDescription( flavorDto.getDescription() );
        }
        if ( flavorDto.getManufacturer() != null ) {
            flavor.setManufacturer( manufacturerDtoToManufacturer( flavorDto.getManufacturer() ) );
        }
        if ( flavorDto.getFlavorType() != null ) {
            flavor.setFlavorType( flavorDto.getFlavorType() );
        }
        Set<Like> set = likeDtoListToLikeSet( flavorDto.getLikes() );
        if ( set != null ) {
            flavor.setLikes( set );
        }
        Set<Comment> set1 = commentDtoListToCommentSet( flavorDto.getComments() );
        if ( set1 != null ) {
            flavor.setComments( set1 );
        }
        if ( flavorDto.getImage() != null ) {
            flavor.setImage( imageDtoToImage( flavorDto.getImage() ) );
        }

        return flavor;
    }
}
