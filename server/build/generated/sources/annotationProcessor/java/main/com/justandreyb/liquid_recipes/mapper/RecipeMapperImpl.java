package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.dto.RecipeDto;
import com.justandreyb.liquid_recipes.dto.RecipeItemDto;
import com.justandreyb.liquid_recipes.dto.RoleDto;
import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.entity.Country;
import com.justandreyb.liquid_recipes.entity.Flavor;
import com.justandreyb.liquid_recipes.entity.Image;
import com.justandreyb.liquid_recipes.entity.Like;
import com.justandreyb.liquid_recipes.entity.Manufacturer;
import com.justandreyb.liquid_recipes.entity.Recipe;
import com.justandreyb.liquid_recipes.entity.RecipeItem;
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
    date = "2019-01-17T18:40:01+0300",
    comments = "version: 1.3.0.Beta2, compiler: javac, environment: Java 1.8.0_191 (Oracle Corporation)"
)
@Component
public class RecipeMapperImpl implements RecipeMapper {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private LikeMapper likeMapper;
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private ImageMapper imageMapper;

    @Override
    public RecipeDto toRecipeDto(Recipe recipe) {
        if ( recipe == null ) {
            return null;
        }

        RecipeDto recipeDto = new RecipeDto();

        if ( recipe.getId() != null ) {
            recipeDto.setId( recipe.getId() );
        }
        if ( recipe.getName() != null ) {
            recipeDto.setName( recipe.getName() );
        }
        if ( recipe.getDescription() != null ) {
            recipeDto.setDescription( recipe.getDescription() );
        }
        if ( recipe.getCreator() != null ) {
            recipeDto.setCreator( userMapper.toUserDtoAsCreator( recipe.getCreator() ) );
        }
        if ( recipe.getCreationDate() != null ) {
            recipeDto.setCreationDate( recipe.getCreationDate() );
        }
        recipeDto.setPg( recipe.getPg() );
        recipeDto.setVg( recipe.getVg() );
        recipeDto.setNicotine( recipe.getNicotine() );
        recipeDto.setFinalAmount( recipe.getFinalAmount() );
        List<RecipeItemDto> list = recipeItemSetToRecipeItemDtoList( recipe.getFlavors() );
        if ( list != null ) {
            recipeDto.setFlavors( list );
        }
        List<CommentDto> list1 = commentMapper.toCommentDtos( recipe.getComments() );
        if ( list1 != null ) {
            recipeDto.setComments( list1 );
        }
        List<LikeDto> list2 = likeMapper.toLikesDtos( recipe.getLikes() );
        if ( list2 != null ) {
            recipeDto.setLikes( list2 );
        }
        if ( recipe.getImage() != null ) {
            recipeDto.setImage( imageMapper.toImageDto( recipe.getImage() ) );
        }

        return recipeDto;
    }

    @Override
    public RecipeDto toRecipeDtoAsListItem(Recipe recipe) {
        if ( recipe == null ) {
            return null;
        }

        RecipeDto recipeDto = new RecipeDto();

        if ( recipe.getId() != null ) {
            recipeDto.setId( recipe.getId() );
        }
        if ( recipe.getName() != null ) {
            recipeDto.setName( recipe.getName() );
        }
        if ( recipe.getDescription() != null ) {
            recipeDto.setDescription( recipe.getDescription() );
        }
        if ( recipe.getCreator() != null ) {
            recipeDto.setCreator( userMapper.toUserDtoAsCreator( recipe.getCreator() ) );
        }
        if ( recipe.getCreationDate() != null ) {
            recipeDto.setCreationDate( recipe.getCreationDate() );
        }
        List<RecipeItemDto> list = recipeItemSetToRecipeItemDtoList( recipe.getFlavors() );
        if ( list != null ) {
            recipeDto.setFlavors( list );
        }
        List<CommentDto> list1 = commentMapper.toCommentsDtosWithOnlyId( recipe.getComments() );
        if ( list1 != null ) {
            recipeDto.setComments( list1 );
        }
        List<LikeDto> list2 = likeMapper.toLikesDtosWithOnlyId( recipe.getLikes() );
        if ( list2 != null ) {
            recipeDto.setLikes( list2 );
        }
        if ( recipe.getImage() != null ) {
            recipeDto.setImage( imageMapper.toImageDto( recipe.getImage() ) );
        }

        return recipeDto;
    }

    @Override
    public Recipe fromRecipeDto(RecipeDto recipeDto) {
        if ( recipeDto == null ) {
            return null;
        }

        Recipe recipe = new Recipe();

        if ( recipeDto.getId() != null ) {
            recipe.setId( recipeDto.getId() );
        }
        if ( recipeDto.getName() != null ) {
            recipe.setName( recipeDto.getName() );
        }
        if ( recipeDto.getDescription() != null ) {
            recipe.setDescription( recipeDto.getDescription() );
        }
        if ( recipeDto.getCreator() != null ) {
            recipe.setCreator( userDtoToUser( recipeDto.getCreator() ) );
        }
        if ( recipeDto.getCreationDate() != null ) {
            recipe.setCreationDate( recipeDto.getCreationDate() );
        }
        recipe.setPg( recipeDto.getPg() );
        recipe.setVg( recipeDto.getVg() );
        recipe.setNicotine( recipeDto.getNicotine() );
        recipe.setFinalAmount( recipeDto.getFinalAmount() );
        Set<RecipeItem> set = recipeItemDtoListToRecipeItemSet( recipeDto.getFlavors() );
        if ( set != null ) {
            recipe.setFlavors( set );
        }
        Set<Comment> set1 = commentDtoListToCommentSet( recipeDto.getComments() );
        if ( set1 != null ) {
            recipe.setComments( set1 );
        }
        Set<Like> set2 = likeDtoListToLikeSet( recipeDto.getLikes() );
        if ( set2 != null ) {
            recipe.setLikes( set2 );
        }
        if ( recipeDto.getImage() != null ) {
            recipe.setImage( imageDtoToImage( recipeDto.getImage() ) );
        }

        return recipe;
    }

    @Override
    public List<RecipeDto> toRecipesDtos(Iterable<Recipe> recipes) {
        if ( recipes == null ) {
            return null;
        }

        List<RecipeDto> list = new ArrayList<RecipeDto>();
        for ( Recipe recipe : recipes ) {
            list.add( toRecipeDtoAsListItem( recipe ) );
        }

        return list;
    }

    protected ImageDto imageToImageDto(Image image) {
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

    protected CountryDto countryToCountryDto(Country country) {
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
        if ( country.getCode() != null ) {
            countryDto.setCode( country.getCode() );
        }
        if ( country.getImage() != null ) {
            countryDto.setImage( imageToImageDto( country.getImage() ) );
        }

        return countryDto;
    }

    protected ManufacturerDto manufacturerToManufacturerDto(Manufacturer manufacturer) {
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
            manufacturerDto.setCountry( countryToCountryDto( manufacturer.getCountry() ) );
        }
        if ( manufacturer.getLogo() != null ) {
            manufacturerDto.setLogo( imageToImageDto( manufacturer.getLogo() ) );
        }

        return manufacturerDto;
    }

    protected RoleDto roleToRoleDto(Role role) {
        if ( role == null ) {
            return null;
        }

        RoleDto roleDto = new RoleDto();

        if ( role.getId() != null ) {
            roleDto.setId( role.getId() );
        }
        if ( role.getName() != null ) {
            roleDto.setName( role.getName() );
        }

        return roleDto;
    }

    protected List<RoleDto> roleSetToRoleDtoList(Set<Role> set) {
        if ( set == null ) {
            return null;
        }

        List<RoleDto> list = new ArrayList<RoleDto>( set.size() );
        for ( Role role : set ) {
            list.add( roleToRoleDto( role ) );
        }

        return list;
    }

    protected List<FlavorDto> flavorSetToFlavorDtoList(Set<Flavor> set) {
        if ( set == null ) {
            return null;
        }

        List<FlavorDto> list = new ArrayList<FlavorDto>( set.size() );
        for ( Flavor flavor : set ) {
            list.add( flavorToFlavorDto( flavor ) );
        }

        return list;
    }

    protected UserDto userToUserDto(User user) {
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
        if ( user.getPassword() != null ) {
            userDto.setPassword( user.getPassword() );
        }
        if ( user.getRegistrationDate() != null ) {
            userDto.setRegistrationDate( user.getRegistrationDate() );
        }
        if ( user.getImage() != null ) {
            userDto.setImage( imageToImageDto( user.getImage() ) );
        }
        List<RoleDto> list = roleSetToRoleDtoList( user.getRoles() );
        if ( list != null ) {
            userDto.setRoles( list );
        }
        List<FlavorDto> list1 = flavorSetToFlavorDtoList( user.getFlavors() );
        if ( list1 != null ) {
            userDto.setFlavors( list1 );
        }

        return userDto;
    }

    protected CommentDto commentToCommentDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto commentDto = new CommentDto();

        if ( comment.getId() != null ) {
            commentDto.setId( comment.getId() );
        }
        if ( comment.getText() != null ) {
            commentDto.setText( comment.getText() );
        }
        if ( comment.getDate() != null ) {
            commentDto.setDate( comment.getDate() );
        }
        if ( comment.getUser() != null ) {
            commentDto.setUser( userToUserDto( comment.getUser() ) );
        }

        return commentDto;
    }

    protected List<CommentDto> commentSetToCommentDtoList(Set<Comment> set) {
        if ( set == null ) {
            return null;
        }

        List<CommentDto> list = new ArrayList<CommentDto>( set.size() );
        for ( Comment comment : set ) {
            list.add( commentToCommentDto( comment ) );
        }

        return list;
    }

    protected LikeDto likeToLikeDto(Like like) {
        if ( like == null ) {
            return null;
        }

        LikeDto likeDto = new LikeDto();

        if ( like.getId() != null ) {
            likeDto.setId( like.getId() );
        }
        if ( like.getUser() != null ) {
            likeDto.setUser( userToUserDto( like.getUser() ) );
        }
        if ( like.getCreationDate() != null ) {
            likeDto.setCreationDate( like.getCreationDate() );
        }

        return likeDto;
    }

    protected List<LikeDto> likeSetToLikeDtoList(Set<Like> set) {
        if ( set == null ) {
            return null;
        }

        List<LikeDto> list = new ArrayList<LikeDto>( set.size() );
        for ( Like like : set ) {
            list.add( likeToLikeDto( like ) );
        }

        return list;
    }

    protected FlavorDto flavorToFlavorDto(Flavor flavor) {
        if ( flavor == null ) {
            return null;
        }

        FlavorDto flavorDto = new FlavorDto();

        if ( flavor.getId() != null ) {
            flavorDto.setId( flavor.getId() );
        }
        if ( flavor.getName() != null ) {
            flavorDto.setName( flavor.getName() );
        }
        if ( flavor.getDescription() != null ) {
            flavorDto.setDescription( flavor.getDescription() );
        }
        if ( flavor.getManufacturer() != null ) {
            flavorDto.setManufacturer( manufacturerToManufacturerDto( flavor.getManufacturer() ) );
        }
        if ( flavor.getFlavorType() != null ) {
            flavorDto.setFlavorType( flavor.getFlavorType() );
        }
        List<CommentDto> list = commentSetToCommentDtoList( flavor.getComments() );
        if ( list != null ) {
            flavorDto.setComments( list );
        }
        List<LikeDto> list1 = likeSetToLikeDtoList( flavor.getLikes() );
        if ( list1 != null ) {
            flavorDto.setLikes( list1 );
        }
        if ( flavor.getImage() != null ) {
            flavorDto.setImage( imageToImageDto( flavor.getImage() ) );
        }

        return flavorDto;
    }

    protected RecipeItemDto recipeItemToRecipeItemDto(RecipeItem recipeItem) {
        if ( recipeItem == null ) {
            return null;
        }

        RecipeItemDto recipeItemDto = new RecipeItemDto();

        if ( recipeItem.getId() != null ) {
            recipeItemDto.setId( recipeItem.getId() );
        }
        if ( recipeItem.getFlavor() != null ) {
            recipeItemDto.setFlavor( flavorToFlavorDto( recipeItem.getFlavor() ) );
        }
        recipeItemDto.setMl( recipeItem.getMl() );
        recipeItemDto.setDrops( recipeItem.getDrops() );

        return recipeItemDto;
    }

    protected List<RecipeItemDto> recipeItemSetToRecipeItemDtoList(Set<RecipeItem> set) {
        if ( set == null ) {
            return null;
        }

        List<RecipeItemDto> list = new ArrayList<RecipeItemDto>( set.size() );
        for ( RecipeItem recipeItem : set ) {
            list.add( recipeItemToRecipeItemDto( recipeItem ) );
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

    protected RecipeItem recipeItemDtoToRecipeItem(RecipeItemDto recipeItemDto) {
        if ( recipeItemDto == null ) {
            return null;
        }

        RecipeItem recipeItem = new RecipeItem();

        if ( recipeItemDto.getId() != null ) {
            recipeItem.setId( recipeItemDto.getId() );
        }
        if ( recipeItemDto.getFlavor() != null ) {
            recipeItem.setFlavor( flavorDtoToFlavor( recipeItemDto.getFlavor() ) );
        }
        recipeItem.setMl( recipeItemDto.getMl() );
        recipeItem.setDrops( recipeItemDto.getDrops() );

        return recipeItem;
    }

    protected Set<RecipeItem> recipeItemDtoListToRecipeItemSet(List<RecipeItemDto> list) {
        if ( list == null ) {
            return null;
        }

        Set<RecipeItem> set = new HashSet<RecipeItem>( Math.max( (int) ( list.size() / .75f ) + 1, 16 ) );
        for ( RecipeItemDto recipeItemDto : list ) {
            set.add( recipeItemDtoToRecipeItem( recipeItemDto ) );
        }

        return set;
    }
}
