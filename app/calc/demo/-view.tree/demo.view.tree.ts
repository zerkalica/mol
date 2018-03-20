namespace $ { export class $mol_app_calc_demo extends $mol_demo_large {

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_calc
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_calc )
	}

} }

