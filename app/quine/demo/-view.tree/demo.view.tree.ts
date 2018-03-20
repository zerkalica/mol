namespace $ { export class $mol_app_quine_demo extends $mol_demo_large {

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_quine
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_quine )
	}

} }

