namespace $ { export class $mol_chart_demo_styles extends $mol_demo_large {

	/// title @ \Chart with various styles of graphs.
	title() {
		return $mol_locale.text( "$mol_chart_demo_styles_title" )
	}

	/// samples_count 15
	samples_count() {
		return 15
	}

	/// sub / <= Chart -
	sub() {
		return [].concat( this.Chart() )
	}

	/// Chart $mol_chart graphs / 
	/// 	<= Energy - 
	/// 	<= Day - 
	/// 	<= Receipts - 
	/// 	<= Receipts_confirmed - 
	/// 	<= Maximum - 
	/// 	<= Waste - 
	/// 	<= Purchases - 
	/// 	<= Taxes -
	@ $mol_mem
	Chart() {
		return (( obj )=>{
			obj.graphs = () => [].concat( this.Energy() , this.Day() , this.Receipts() , this.Receipts_confirmed() , this.Maximum() , this.Waste() , this.Purchases() , this.Taxes() )
			return obj
		})( new this.$.$mol_chart )
	}

	/// Energy $mol_plot_ruler_vert title <= energy_title -
	@ $mol_mem
	Energy() {
		return (( obj )=>{
			obj.title = () => this.energy_title()
			return obj
		})( new this.$.$mol_plot_ruler_vert )
	}

	/// energy_title @ \kJ
	energy_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_energy_title" )
	}

	/// Day $mol_plot_ruler_hor 
	/// 	title <= day_title - 
	/// 	series <= series_1 -
	@ $mol_mem
	Day() {
		return (( obj )=>{
			obj.title = () => this.day_title()
			obj.series = () => this.series_1()
			return obj
		})( new this.$.$mol_plot_ruler_hor )
	}

	/// day_title @ \Day
	day_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_day_title" )
	}

	/// series_1 /
	series_1() {
		return [] as any[]
	}

	/// Receipts $mol_plot_bar 
	/// 	title <= receipts_title - 
	/// 	series <= series_2 -
	@ $mol_mem
	Receipts() {
		return (( obj )=>{
			obj.title = () => this.receipts_title()
			obj.series = () => this.series_2()
			return obj
		})( new this.$.$mol_plot_bar )
	}

	/// receipts_title @ \Receipts
	receipts_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_receipts_title" )
	}

	/// series_2 /
	series_2() {
		return [] as any[]
	}

	/// Receipts_confirmed $mol_plot_bar 
	/// 	title <= receipts_confirmed_title - 
	/// 	series <= series_3 -
	@ $mol_mem
	Receipts_confirmed() {
		return (( obj )=>{
			obj.title = () => this.receipts_confirmed_title()
			obj.series = () => this.series_3()
			return obj
		})( new this.$.$mol_plot_bar )
	}

	/// receipts_confirmed_title @ \Confirmed receipts
	receipts_confirmed_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_receipts_confirmed_title" )
	}

	/// series_3 /
	series_3() {
		return [] as any[]
	}

	/// Maximum $mol_plot_dot 
	/// 	title <= maximum_title - 
	/// 	series <= series_1 -
	@ $mol_mem
	Maximum() {
		return (( obj )=>{
			obj.title = () => this.maximum_title()
			obj.series = () => this.series_1()
			return obj
		})( new this.$.$mol_plot_dot )
	}

	/// maximum_title @ \Maximum
	maximum_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_maximum_title" )
	}

	/// Waste $mol_plot_line 
	/// 	type \dashed
	/// 	title <= waste_title - 
	/// 	series <= series_4 -
	@ $mol_mem
	Waste() {
		return (( obj )=>{
			obj.type = () => "dashed"
			obj.title = () => this.waste_title()
			obj.series = () => this.series_4()
			return obj
		})( new this.$.$mol_plot_line )
	}

	/// waste_title @ \Waste
	waste_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_waste_title" )
	}

	/// series_4 /
	series_4() {
		return [] as any[]
	}

	/// Purchases $mol_plot_group 
	/// 	title <= purchases_title - 
	/// 	series <= series_5 - 
	/// 	graphs / 
	/// 		<= Purchases_fill - 
	/// 		<= Purchases_line - 
	/// 		<= Purchases_dots -
	@ $mol_mem
	Purchases() {
		return (( obj )=>{
			obj.title = () => this.purchases_title()
			obj.series = () => this.series_5()
			obj.graphs = () => [].concat( this.Purchases_fill() , this.Purchases_line() , this.Purchases_dots() )
			return obj
		})( new this.$.$mol_plot_group )
	}

	/// purchases_title @ \Purchases
	purchases_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_purchases_title" )
	}

	/// series_5 /
	series_5() {
		return [] as any[]
	}

	/// Purchases_fill $mol_plot_fill
	@ $mol_mem
	Purchases_fill() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_fill )
	}

	/// Purchases_line $mol_plot_line
	@ $mol_mem
	Purchases_line() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_line )
	}

	/// Purchases_dots $mol_plot_dot
	@ $mol_mem
	Purchases_dots() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_dot )
	}

	/// Taxes $mol_plot_group 
	/// 	title <= taxes_title - 
	/// 	series <= series_6 - 
	/// 	graphs / 
	/// 		<= Taxes_fill - 
	/// 		<= Taxes_line - 
	/// 		<= Taxes_dots -
	@ $mol_mem
	Taxes() {
		return (( obj )=>{
			obj.title = () => this.taxes_title()
			obj.series = () => this.series_6()
			obj.graphs = () => [].concat( this.Taxes_fill() , this.Taxes_line() , this.Taxes_dots() )
			return obj
		})( new this.$.$mol_plot_group )
	}

	/// taxes_title @ \Taxes
	taxes_title() {
		return $mol_locale.text( "$mol_chart_demo_styles_taxes_title" )
	}

	/// series_6 /
	series_6() {
		return [] as any[]
	}

	/// Taxes_fill $mol_plot_fill
	@ $mol_mem
	Taxes_fill() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_fill )
	}

	/// Taxes_line $mol_plot_line type \dashed
	@ $mol_mem
	Taxes_line() {
		return (( obj )=>{
			obj.type = () => "dashed"
			return obj
		})( new this.$.$mol_plot_line )
	}

	/// Taxes_dots $mol_plot_dot
	@ $mol_mem
	Taxes_dots() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_plot_dot )
	}

} }

