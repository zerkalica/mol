namespace $ { export class $mol_app_slides extends $mol_view {

	/// attr * 
	/// 	^ 
	/// 	mol_app_slides_role <= role -
	attr() {
		return ({
			...super.attr() ,
			"mol_app_slides_role" :  this.role() ,
		})
	}

	/// role \
	role() {
		return " "
	}

	/// contents?val \
	@ $mol_mem
	contents( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// plugins / 
	/// 	<= Speech_next - 
	/// 	<= Speech_slide - 
	/// 	<= Speech_prev - 
	/// 	<= Speech_start - 
	/// 	<= Speech_end - 
	/// 	<= Speech_about -
	plugins() {
		return [].concat( this.Speech_next() , this.Speech_slide() , this.Speech_prev() , this.Speech_start() , this.Speech_end() , this.Speech_about() )
	}

	/// Speech_next $mol_speech 
	/// 	event_catch?val <=> event_next?val - 
	/// 	patterns <= speech_next -
	@ $mol_mem
	Speech_next() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.event_next( val )
			obj.patterns = () => this.speech_next()
			return obj
		})( new this.$.$mol_speech )
	}

	/// event_next?val null
	@ $mol_mem
	event_next( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_next / 
	/// 	\next
	/// 	\forward
	/// 	\дальше
	/// 	\далее
	/// 	\удали
	/// 	\вперед
	/// 	\перевод
	speech_next() {
		return [].concat( "next" , "forward" , "дальше" , "далее" , "удали" , "вперед" , "перевод" )
	}

	/// Speech_slide $mol_speech 
	/// 	event_catch?val <=> event_slide?val - 
	/// 	patterns <= speech_slide -
	@ $mol_mem
	Speech_slide() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.event_slide( val )
			obj.patterns = () => this.speech_slide()
			return obj
		})( new this.$.$mol_speech )
	}

	/// event_slide?val null
	@ $mol_mem
	event_slide( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_slide / 
	/// 	\slide number (\d+)
	/// 	\(\d+) slide
	/// 	\слайд номер (\d+)
	/// 	\(\d+) слайд
	speech_slide() {
		return [].concat( "slide number (\\d+)" , "(\\d+) slide" , "слайд номер (\\d+)" , "(\\d+) слайд" )
	}

	/// Speech_prev $mol_speech 
	/// 	event_catch?val <=> event_prev?val - 
	/// 	patterns <= speech_prev -
	@ $mol_mem
	Speech_prev() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.event_prev( val )
			obj.patterns = () => this.speech_prev()
			return obj
		})( new this.$.$mol_speech )
	}

	/// event_prev?val null
	@ $mol_mem
	event_prev( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_prev / 
	/// 	\back
	/// 	\назад
	speech_prev() {
		return [].concat( "back" , "назад" )
	}

	/// Speech_start $mol_speech 
	/// 	event_catch?val <=> event_start?val - 
	/// 	patterns <= speech_start -
	@ $mol_mem
	Speech_start() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.event_start( val )
			obj.patterns = () => this.speech_start()
			return obj
		})( new this.$.$mol_speech )
	}

	/// event_start?val null
	@ $mol_mem
	event_start( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_start / 
	/// 	\to beginning
	/// 	\first slide
	/// 	\начало
	/// 	\первый слайд
	speech_start() {
		return [].concat( "to beginning" , "first slide" , "начало" , "первый слайд" )
	}

	/// Speech_end $mol_speech 
	/// 	event_catch?val <=> event_end?val - 
	/// 	patterns <= speech_end -
	@ $mol_mem
	Speech_end() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.event_end( val )
			obj.patterns = () => this.speech_end()
			return obj
		})( new this.$.$mol_speech )
	}

	/// event_end?val null
	@ $mol_mem
	event_end( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_end / 
	/// 	\to ending
	/// 	\last slide
	/// 	\конец
	/// 	\последний слайд
	speech_end() {
		return [].concat( "to ending" , "last slide" , "конец" , "последний слайд" )
	}

	/// Speech_about $mol_speech 
	/// 	event_catch?val <=> event_about?val - 
	/// 	patterns <= speech_about -
	@ $mol_mem
	Speech_about() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.event_about( val )
			obj.patterns = () => this.speech_about()
			return obj
		})( new this.$.$mol_speech )
	}

	/// event_about?val null
	@ $mol_mem
	event_about( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_about / 
	/// 	\slide about (\S+?)
	/// 	\search (\S+?)
	/// 	\слайд про (\S+?)
	/// 	\найти (\S+?)
	/// 	\найди (\S+?)
	speech_about() {
		return [].concat( "slide about (\\S+?)" , "search (\\S+?)" , "слайд про (\\S+?)" , "найти (\\S+?)" , "найди (\\S+?)" )
	}

	/// sub / 
	/// 	<= Listener - 
	/// 	<= Speaker - 
	/// 	<= Loader -
	sub() {
		return [].concat( this.Listener() , this.Speaker() , this.Loader() )
	}

	/// Listener $mol_page 
	/// 	title <= title - 
	/// 	tools / <= Slide_number - 
	/// 	body / 
	/// 		<= Listener_content - 
	/// 		<= Progress -
	@ $mol_mem
	Listener() {
		return (( obj )=>{
			obj.title = () => this.title()
			obj.tools = () => [].concat( this.Slide_number() )
			obj.body = () => [].concat( this.Listener_content() , this.Progress() )
			return obj
		})( new this.$.$mol_page )
	}

	/// Slide_number $mol_view sub / <= slide?val -
	@ $mol_mem
	Slide_number() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.slide() )
			return obj
		})( new this.$.$mol_view )
	}

	/// slide?val 0
	@ $mol_mem
	slide( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// Listener_content $mol_text 
	/// 	uri_base <= uri_base - 
	/// 	text <= listener_content -
	@ $mol_mem
	Listener_content() {
		return (( obj )=>{
			obj.uri_base = () => this.uri_base()
			obj.text = () => this.listener_content()
			return obj
		})( new this.$.$mol_text )
	}

	/// uri_base \
	uri_base() {
		return ""
	}

	/// listener_content \
	listener_content() {
		return ""
	}

	/// Progress $mol_portion portion <= progress -
	@ $mol_mem
	Progress() {
		return (( obj )=>{
			obj.portion = () => this.progress()
			return obj
		})( new this.$.$mol_portion )
	}

	/// progress 0
	progress() {
		return 0
	}

	/// Speaker $mol_page 
	/// 	title \
	/// 	tools / 
	/// 		<= Open_listener - 
	/// 		<= Speech_toggle - 
	/// 		<= Slide_switcher - 
	/// 	body / <= Speaker_content -
	@ $mol_mem
	Speaker() {
		return (( obj )=>{
			obj.title = () => ""
			obj.tools = () => [].concat( this.Open_listener() , this.Speech_toggle() , this.Slide_switcher() )
			obj.body = () => [].concat( this.Speaker_content() )
			return obj
		})( new this.$.$mol_page )
	}

	/// Open_listener $mol_link 
	/// 	target \_blank
	/// 	hint <= open_listener_hint - 
	/// 	arg * 
	/// 		role \listener
	/// 		slide null 
	/// 	sub / <= Open_listener_icon -
	@ $mol_mem
	Open_listener() {
		return (( obj )=>{
			obj.target = () => "_blank"
			obj.hint = () => this.open_listener_hint()
			obj.arg = () => ({
			"role" :  "listener" ,
			"slide" :  null as any ,
		})
			obj.sub = () => [].concat( this.Open_listener_icon() )
			return obj
		})( new this.$.$mol_link )
	}

	/// open_listener_hint @ \Open slides window
	open_listener_hint() {
		return $mol_locale.text( "$mol_app_slides_open_listener_hint" )
	}

	/// Open_listener_icon $mol_icon_external
	@ $mol_mem
	Open_listener_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_external )
	}

	/// Speech_toggle $mol_check_icon 
	/// 	Icon <= Speech_toggle_icon - 
	/// 	checked?val <=> speech_enabled?val - 
	/// 	hint <= speech_toggle_hint -
	@ $mol_mem
	Speech_toggle() {
		return (( obj )=>{
			obj.Icon = () => this.Speech_toggle_icon()
			obj.checked = ( val? : any ) => this.speech_enabled( val )
			obj.hint = () => this.speech_toggle_hint()
			return obj
		})( new this.$.$mol_check_icon )
	}

	/// Speech_toggle_icon $mol_icon_microphone
	@ $mol_mem
	Speech_toggle_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_microphone )
	}

	/// speech_enabled?val false
	@ $mol_mem
	speech_enabled( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// speech_toggle_hint @ \Speech contol
	speech_toggle_hint() {
		return $mol_locale.text( "$mol_app_slides_speech_toggle_hint" )
	}

	/// Slide_switcher $mol_number value?val <=> slide?val -
	@ $mol_mem
	Slide_switcher() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.slide( val )
			return obj
		})( new this.$.$mol_number )
	}

	/// Speaker_content $mol_text 
	/// 	uri_base <= uri_base - 
	/// 	text <= speaker_content -
	@ $mol_mem
	Speaker_content() {
		return (( obj )=>{
			obj.uri_base = () => this.uri_base()
			obj.text = () => this.speaker_content()
			return obj
		})( new this.$.$mol_text )
	}

	/// speaker_content \
	speaker_content() {
		return ""
	}

	/// Loader $mol_view 
	/// 	dom_name \iframe
	/// 	attr * src <= uri_slides - 
	/// 	event * load?val <=> event_load?val -
	@ $mol_mem
	Loader() {
		return (( obj )=>{
			obj.dom_name = () => "iframe"
			obj.attr = () => ({
			"src" :  this.uri_slides() ,
		})
			obj.event = () => ({
			"load" :  ( val? : any )=>  this.event_load( val ) ,
		})
			return obj
		})( new this.$.$mol_view )
	}

	/// uri_slides <= uri_slides_default -
	uri_slides() {
		return this.uri_slides_default()
	}

	/// uri_slides_default \https://nin-jin.github.io/slides/orp/
	uri_slides_default() {
		return "https://nin-jin.github.io/slides/orp/"
	}

	/// event_load?val null
	@ $mol_mem
	event_load( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

} }

