var players = new Array(),
blink_timer = new Array(),
rotate_timer = new Array(),
lang_identifier = 'ru',
selected_txt = '',
sound_container_clicked = false,
sound_container_visible = true,
blinking_enable = true,
basic_plg_enable = true,
pro_container_clicked = false,
streamerphp_folder = 'https://cdn.osg.uz/gs/',
translation_tool = 'g',
//translation_audio_type = 'audio/x-wav',
translation_audio_type = 'audio/mpeg',
speech_text_length = 100,
blink_start_enable_pro = true,
createtriggerspeechcount = 0,
speechtimeoutfinal = 0,
speechtxt = '',
userRegistered = "0",
gspeech_bcp = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
gspeech_cp = ["#111111", "#3284c7", "#fc0000", "#0d7300", "#ea7d00"],
gspeech_bca = ["#545454", "#3284c7", "#ff3333", "#0f8901", "#ea7d00"],
gspeech_ca = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
gspeech_spop = ["90", "80", "90", "90", "90"],
gspeech_spoa = ["100", "100", "100", "100", "100"],
gspeech_animation_time = ["400", "400", "400", "400", "400"];