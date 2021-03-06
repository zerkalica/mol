namespace $ {

	export function $mol_data_wrapper<
		Pre extends $mol_data_value ,
		Obj extends { new( val : ReturnType< Pre > ) : any } ,
	>( pre : Pre , Obj : Obj ) {
		
		return ( val : Parameters< Pre >[0] ) => new Obj( pre( val ) ) as InstanceType< Obj >

	}

}
