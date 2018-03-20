namespace $ { export class $mol_chart_demo_simple extends $mol_demo_large {

	/// title @ \Simple chart with hadcoded series
	title() {
		return $mol_locale.text( "$mol_chart_demo_simple_title" )
	}

	/// sub / <= Chart -
	sub() {
		return [].concat( this.Chart() )
	}

	/// Chart $mol_chart graphs / 
	/// 	<= Vert_ruler - 
	/// 	<= Hor_ruler - 
	/// 	<= Plan - 
	/// 	<= Fact -
	@ $mol_mem
	Chart() {
		return (( obj )=>{
			obj.graphs = () => [].concat( this.Vert_ruler() , this.Hor_ruler() , this.Plan() , this.Fact() )
			return obj
		})( new this.$.$mol_chart )
	}

	/// Vert_ruler $mol_plot_ruler_vert title <= vert_title -
	@ $mol_mem
	Vert_ruler() {
		return (( obj )=>{
			obj.title = () => this.vert_title()
			return obj
		})( new this.$.$mol_plot_ruler_vert )
	}

	/// vert_title @ \pcs
	vert_title() {
		return $mol_locale.text( "$mol_chart_demo_simple_vert_title" )
	}

	/// Hor_ruler $mol_plot_ruler_hor 
	/// 	title <= hor_title - 
	/// 	series <= plan - 
	/// 	label_text!key <= hor_label_text!key -
	@ $mol_mem
	Hor_ruler() {
		return (( obj )=>{
			obj.title = () => this.hor_title()
			obj.series = () => this.plan()
			obj.label_text = ( key : any ) => this.hor_label_text(key)
			return obj
		})( new this.$.$mol_plot_ruler_hor )
	}

	/// hor_title @ \Month
	hor_title() {
		return $mol_locale.text( "$mol_chart_demo_simple_hor_title" )
	}

	/// hor_label_text!key \
	hor_label_text( key : any ) {
		return ""
	}

	/// Plan $mol_plot_bar 
	/// 	title <= plan_title - 
	/// 	series <= plan -
	@ $mol_mem
	Plan() {
		return (( obj )=>{
			obj.title = () => this.plan_title()
			obj.series = () => this.plan()
			return obj
		})( new this.$.$mol_plot_bar )
	}

	/// plan_title @ \Plan
	plan_title() {
		return $mol_locale.text( "$mol_chart_demo_simple_plan_title" )
	}

	/// plan * 
	/// 	january 10 
	/// 	february 20 
	/// 	march 30 
	/// 	april 40
	plan() {
		return ({
			"january" :  10 ,
			"february" :  20 ,
			"march" :  30 ,
			"april" :  40 ,
		})
	}

	/// Fact $mol_plot_group 
	/// 	title <= fact_title - 
	/// 	series <= fact - 
	/// 	graphs / 
	/// 		<= Fact_line - 
	/// 		<= Fact_dots -
	@ $mol_mem
	Fact() {
		return (( obj )=>{
			obj.title = () => this.fact_title()
			obj.series = () => this.fact()
			obj.graphs = () => [].concat( this.Fact_line() , this.Fact_dots() )
			return obj
		})( new this.$.$mol_plot_group )
	}

	/// fact_title @ \Fact
	fact_title() {
		return $mol_locale.text( "$mol_chart_demo_simple_fact_title" )
	}

	/// fact * 
	/// 	january 5 
	/// 	february 10 
	/// 	march 30
	fact() {
		return ({
			"january" :  5 ,
			"february" :  10 ,
			"march" :  30 ,
		})
	}

	/// Fact_line $mol_plot_line
	@ $mol_mem
	Fact_line() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_line )
	}

	/// Fact_dots $mol_plot_dot
	@ $mol_mem
	Fact_dots() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_dot )
	}

} }

