namespace $ { export class $mol_plot_demo extends $mol_demo_large {

	/// title @ \Dynamic lightweight graphs
	title() {
		return $mol_locale.text( "$mol_plot_demo_title" )
	}

	/// count?val 20
	@ $mol_mem
	count( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 20
	}

	/// sub / <= Plot -
	sub() {
		return [].concat( this.Plot() )
	}

	/// Plot $mol_plot_pane 
	/// 	gap 48 
	/// 	graphs / 
	/// 		<= Saturation - 
	/// 		<= Input - 
	/// 		<= Output - 
	/// 		<= Voltage - 
	/// 		<= Time -
	@ $mol_mem
	Plot() {
		return (( obj )=>{
			obj.gap = () => 48
			obj.graphs = () => [].concat( this.Saturation() , this.Input() , this.Output() , this.Voltage() , this.Time() )
			return obj
		})( new this.$.$mol_plot_pane )
	}

	/// Saturation $mol_plot_group 
	/// 	series <= saturation_series - 
	/// 	graphs / 
	/// 		<= Saturation_fill - 
	/// 		<= Saturation_line -
	@ $mol_mem
	Saturation() {
		return (( obj )=>{
			obj.series = () => this.saturation_series()
			obj.graphs = () => [].concat( this.Saturation_fill() , this.Saturation_line() )
			return obj
		})( new this.$.$mol_plot_group )
	}

	/// saturation_series /
	saturation_series() {
		return [] as any[]
	}

	/// Saturation_fill $mol_plot_fill
	@ $mol_mem
	Saturation_fill() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_fill )
	}

	/// Saturation_line $mol_plot_line type \dashed
	@ $mol_mem
	Saturation_line() {
		return (( obj )=>{
			obj.type = () => "dashed"
			return obj
		})( new this.$.$mol_plot_line )
	}

	/// Input $mol_plot_group 
	/// 	series <= input_series - 
	/// 	graphs / 
	/// 		<= Input_line - 
	/// 		<= Input_dots -
	@ $mol_mem
	Input() {
		return (( obj )=>{
			obj.series = () => this.input_series()
			obj.graphs = () => [].concat( this.Input_line() , this.Input_dots() )
			return obj
		})( new this.$.$mol_plot_group )
	}

	/// input_series /
	input_series() {
		return [] as any[]
	}

	/// Input_line $mol_plot_line
	@ $mol_mem
	Input_line() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_line )
	}

	/// Input_dots $mol_plot_dot
	@ $mol_mem
	Input_dots() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_dot )
	}

	/// Output $mol_plot_bar series <= output_series -
	@ $mol_mem
	Output() {
		return (( obj )=>{
			obj.series = () => this.output_series()
			return obj
		})( new this.$.$mol_plot_bar )
	}

	/// output_series /
	output_series() {
		return [] as any[]
	}

	/// Voltage $mol_plot_ruler_vert title <= Voltage_title -
	@ $mol_mem
	Voltage() {
		return (( obj )=>{
			obj.title = () => this.Voltage_title()
			return obj
		})( new this.$.$mol_plot_ruler_vert )
	}

	/// Voltage_title @ \V
	Voltage_title() {
		return $mol_locale.text( "$mol_plot_demo_Voltage_title" )
	}

	/// Time $mol_plot_ruler_hor 
	/// 	title <= Time_title - 
	/// 	series <= output_series -
	@ $mol_mem
	Time() {
		return (( obj )=>{
			obj.title = () => this.Time_title()
			obj.series = () => this.output_series()
			return obj
		})( new this.$.$mol_plot_ruler_hor )
	}

	/// Time_title @ \ms
	Time_title() {
		return $mol_locale.text( "$mol_plot_demo_Time_title" )
	}

} }

