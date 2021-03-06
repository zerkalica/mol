namespace $ {
	$mol_test({

		'Is first' () {
			$mol_data_variant( $mol_data_number , $mol_data_string )( 0 )
		} ,

		'Is second' () {
			$mol_data_variant( $mol_data_number , $mol_data_string )( '' )
		} ,

		'Is false' () {
			$mol_assert_fail( ()=> {
				$mol_data_variant( $mol_data_number , $mol_data_string )( false as any )
			} , 'is not a number and is not a string' )
		} ,

	})
}
