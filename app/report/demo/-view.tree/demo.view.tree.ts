namespace $ { export class $mol_app_report_demo extends $mol_demo_large {

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_report
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_report )
	}

} }

