namespace $ { export class $mol_app_lamps_demo extends $mol_demo_large {

	/// title @ \Lamps information from LampTest
	title() {
		return $mol_locale.text( "$mol_app_lamps_demo_title" )
	}

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_lamps
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_lamps )
	}

} }

