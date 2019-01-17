package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.RoleDto;
import com.justandreyb.liquid_recipes.entity.Role;
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
public class RoleMapperImpl implements RoleMapper {

    @Override
    public RoleDto toRoleDto(Role role) {
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

    @Override
    public RoleDto toRoleDtoWithOnlyName(Role role) {
        if ( role == null ) {
            return null;
        }

        RoleDto roleDto = new RoleDto();

        if ( role.getName() != null ) {
            roleDto.setName( role.getName() );
        }

        return roleDto;
    }

    @Override
    public List<RoleDto> toRolesDtos(Iterable<Role> roles) {
        if ( roles == null ) {
            return null;
        }

        List<RoleDto> list = new ArrayList<RoleDto>();
        for ( Role role : roles ) {
            list.add( toRoleDto( role ) );
        }

        return list;
    }

    @Override
    public List<RoleDto> toRolesDtosWithOnlyName(Iterable<Role> roles) {
        if ( roles == null ) {
            return null;
        }

        List<RoleDto> list = new ArrayList<RoleDto>();
        for ( Role role : roles ) {
            list.add( toRoleDtoWithOnlyName( role ) );
        }

        return list;
    }
}
