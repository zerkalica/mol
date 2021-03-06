namespace $ {

	export class $mol_vector< Value , Length extends number > extends Array< Value > {

		length! : Length

		constructor( ... values : Value[] & { length : Length } ) { super( ... values ) }
		
		map! : < Res >( convert : ( value : Value , index : number , array : this ) => Res , self? : any )=> $mol_vector< Res , Length >

		merged< Patch >(
			patches : readonly Patch[] & { length : Length } ,
			combine : ( value : Value , patch : Patch ) => Value ,
		) : this {
			return this.map( ( value , index )=> combine( value , patches[ index ] ) ) as any
		}

		limited(
			this : $mol_vector< number , Length > ,
			limits : readonly ( readonly [ number , number ] )[] & { length : Length } ,
		) : this {
			return this.merged( limits , ( value , [ min , max ] )=> ( value < min ) ? min : ( value > max ) ? max : value ) as any
		}

		added0( this : $mol_vector< number , Length > , diff : number ) : this {
			return this.map( value => value + diff ) as any
		}

		added1( this : $mol_vector< number , Length > , diff : readonly number[] & { length : Length } ) : this {
			return this.merged( diff , ( a , b )=> a + b ) as any
		}

		multed0( this : $mol_vector< number , Length > , mult : number ) : this {
			return this.map( value => value * mult ) as any
		}

		multed1(
			this : $mol_vector< number , Length > ,
			mults : readonly number[] & { length : Length } ,
		) : this {
			return this.merged( mults , ( a , b )=> a * b ) as any
		}

		expanded1(
			this : $mol_vector< $mol_vector_range< number > , Length > ,
			point : readonly number[] & { length : Length } ,
		) : this {
			return this.merged( point , ( range , value )=> range.expanded0( value ) ) as any
		}

		expanded2(
			this : $mol_vector< $mol_vector_range< number > , Length > ,
			point : readonly ( readonly [ number , number ] )[] & { length : Length } ,
		) : this {
			return this.merged( point , ( range1 , range2 )=> {
				let next = range1
				const Range = range1.constructor as typeof $mol_vector_range
				if (range1[0] > range2[0]) next = new Range(range2[0], next.max);
				if (range1[1] < range2[1]) next = new Range(next.min, range2[1])

				return next
			}) as any
		}

	}

	export class $mol_vector_1d< Value > extends $mol_vector< Value , 1 > {
		[0]: Value
		get x() { return this[0] }
	}

	export class $mol_vector_2d< Value > extends $mol_vector< Value , 2 > {
		[0]: Value
		[1]: Value
		get x() { return this[0] }
		get y() { return this[1] }
	}

	export class $mol_vector_3d< Value > extends $mol_vector< Value , 3 > {
		[0]: Value
		[1]: Value
		[2]: Value
		get x() { return this[0] }
		get y() { return this[1] }
		get z() { return this[2] }
	}


	export class $mol_vector_range< Value > extends $mol_vector< Value , 2 > {
		[0]: Value
		[1]: Value
		get min() { return this[0] }
		get max() { return this[1] }
		
		get inversed() {
			return new ( this.constructor as typeof $mol_vector_range )( this.max , this.min )
		}

		expanded0( value : Value ) {
			const Range = this.constructor as typeof $mol_vector_range
			let range = this as $mol_vector_range< Value >
			
			if( value > range.max ) range = new Range( range.min , value )
			if( value < range.min ) range = new Range( value , range.max )

			return range
		}

	}

	export let $mol_vector_range_full = new $mol_vector_range( Number.NEGATIVE_INFINITY , Number.POSITIVE_INFINITY )

	export class $mol_vector_matrix<
		Width extends number ,
		Height extends number ,
	> extends $mol_vector< readonly number[] & { length : Width } , Height > {

		added2(
			diff : readonly ( readonly number[] & { length : Width } )[] & { length : Height }
		) : this {
			return this.merged( diff , ( a , b )=> a.map( ( a2 , index ) => a2 + b[ index ] ) as any ) as any
		}

		multed2(
			diff : readonly ( readonly number[] & { length : Width } )[] & { length : Height }
		) : this {
			return this.merged( diff , ( a , b )=> a.map( ( a2 , index ) => a2 * b[ index ] ) as any ) as any
		}

	}

}
