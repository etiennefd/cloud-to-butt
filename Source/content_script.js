walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

// Replaces all skin and gender variations of an emoji with the same hieroglyph unicode
function handleSkinTonesAndGender(v, emoji, unicode)
{
  // skin color + zero width joiner + gender
  v = v.replace(new RegExp(emoji.concat("🏻‍♂️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏼‍♂️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏽‍♂️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏾‍♂️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏿‍♂️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏻‍♀️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏼‍♀️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏽‍♀️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏾‍♀️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏿‍♀️"),'g'), unicode);
  // zero width joiner + gender
  v = v.replace(new RegExp(emoji.concat("‍♂️"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("‍♀️"),'g'), unicode);
  // skin color only...
  // ... concatenated at the end: (probably useless now)
  v = v.replace(new RegExp(emoji.concat("🏻"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏼"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏽"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏾"),'g'), unicode);
  v = v.replace(new RegExp(emoji.concat("🏿"),'g'), unicode);
  // ... inserted after first emoji:
  v = v.replace(new RegExp([emoji.slice(0, 2), "🏻", emoji.slice(2)].join(''),'g'), unicode);
  v = v.replace(new RegExp([emoji.slice(0, 2), "🏼", emoji.slice(2)].join(''),'g'), unicode);
  v = v.replace(new RegExp([emoji.slice(0, 2), "🏽", emoji.slice(2)].join(''),'g'), unicode);
  v = v.replace(new RegExp([emoji.slice(0, 2), "🏾", emoji.slice(2)].join(''),'g'), unicode);
  v = v.replace(new RegExp([emoji.slice(0, 2), "🏿", emoji.slice(2)].join(''),'g'), unicode);
  // original
  v = v.replace(new RegExp(emoji,'g'), unicode);
  
  return v;
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

  // The 27 sections (A to Aa) correspond to the classification in the Gardiner sign list.
  
  // A. Man and his occupations
  v = handleSkinTonesAndGender(v, "🧍", "\u{1304C}"); // 𓁌
  v = handleSkinTonesAndGender(v, "💃", "\u{13024}"); // 𓀤
  v = handleSkinTonesAndGender(v, "🕺", "\u{13025}"); // 𓀥
  v = handleSkinTonesAndGender(v, "🏃", "\u{1301F}"); // 𓀟
  v = handleSkinTonesAndGender(v, "🧎", "\u{1303D}"); // 𓀽
  v = handleSkinTonesAndGender(v, "👨‍🦯", "\u{13019}"); // 𓀙
  v = handleSkinTonesAndGender(v, "👩‍🦯", "\u{13019}"); // 𓀙
  v = handleSkinTonesAndGender(v, "🧑‍🦯", "\u{13019}"); // 𓀙
  v = handleSkinTonesAndGender(v, "👨‍🦽", "\u{1303B}"); // 𓀻
  v = handleSkinTonesAndGender(v, "👩‍🦽", "\u{1303B}"); // 𓀻
  v = handleSkinTonesAndGender(v, "🧑‍🦽", "\u{1303B}"); // 𓀻
  v = handleSkinTonesAndGender(v, "👨‍🦼", "\u{1303C}"); // 𓀼
  v = handleSkinTonesAndGender(v, "👩‍🦼", "\u{1303C}"); // 𓀼
  v = handleSkinTonesAndGender(v, "🧑‍🦼", "\u{1303C}"); // 𓀼
  v = handleSkinTonesAndGender(v, "🙇", "\u{13013}"); // 𓀓
  v = handleSkinTonesAndGender(v, "🙋", "\u{1300A}"); // 𓀊
  v = handleSkinTonesAndGender(v, "🙅", "\u{13022}"); // 𓀢
  v = handleSkinTonesAndGender(v, "💁", "\u{1301E}"); // 𓀞
  v = handleSkinTonesAndGender(v, "🤴", "\u{13048}"); // 𓁈
  v = handleSkinTonesAndGender(v, "👩‍🎤", "\u{13059}"); // 𓁙
  v = handleSkinTonesAndGender(v, "👨‍🎤", "\u{1304B}"); // 𓁋
  v = handleSkinTonesAndGender(v, "🧑‍🎤", "\u{1304B}"); // 𓁋
  v = handleSkinTonesAndGender(v, "🧑‍🌾", "\u{13043}"); // 𓁃
  v = handleSkinTonesAndGender(v, "👨‍🌾", "\u{13043}"); // 𓁃
  v = handleSkinTonesAndGender(v, "👩‍🌾", "\u{13043}"); // 𓁃
  v = handleSkinTonesAndGender(v, "💂", "\u{1300E}"); // 𓀎
  v = handleSkinTonesAndGender(v, "👷", "\u{13028}"); // 𓀨
  v = handleSkinTonesAndGender(v, "🧟", "\u{1303E}"); // 𓀾
  v = handleSkinTonesAndGender(v, "🚣", "\u{1300C}"); // 𓀌
  v = handleSkinTonesAndGender(v, "🤸", "\u{13021}"); // 𓀡
  v = handleSkinTonesAndGender(v, "🧘", "\u{13009}"); // 𓀉
  v = handleSkinTonesAndGender(v, "🤹", "\u{13045}"); // 𓁅
  v = handleSkinTonesAndGender(v, "🏊", "\u{13216}\u{13012}\u{13216}"); // 𓈖𓀒𓈖
  v = v.replace(/👪/g, "\u{13002}\u{13002}\u{13015}"); // 𓀂𓀂𓀕
  v = v.replace(/🛌/g, "\u{13040}"); // 𓁀
  v = v.replace(/🤺/g, "\u{1304D}"); // 𓁍
  
  // B. Woman and her occupations
  v = handleSkinTonesAndGender(v, "🤰", "\u{13051}"); // 𓁑
  v = handleSkinTonesAndGender(v, "🤱", "\u{13054}"); // 𓁔
  v = handleSkinTonesAndGender(v, "👸", "\u{13057}"); // 𓁗
  v = v.replace(/👩‍👦/g, "\u{13056}"); // 𓁖
  v = v.replace(/👩‍👧/g, "\u{13056}"); // 𓁖
  
  // C. Anthropomorphic deities
  v = v.replace(/🌞/g, "\u{1305B}"); // 𓁛 (Re, sun god)
  v = v.replace(/🌝/g, "\u{13073}"); // 𓁳 (moon god)
  v = v.replace(/🌚/g, "\u{13073}"); // 𓁳 (moon god)
  v = v.replace(/🌛/g, "\u{13073}"); // 𓁳 (moon god)
  v = v.replace(/🌜/g, "\u{13073}"); // 𓁳 (moon god)
  v = handleSkinTonesAndGender(v, "👩‍⚖️", "\u{13067}"); // 𓁧 (Maat, goddess of Justice)
  
  // Generic person emoji are placed here so they don't interfere with the emoji above.
  // Man
  v = handleSkinTonesAndGender(v, "👱‍♂️", "\u{13000}"); // 𓀀
  v = handleSkinTonesAndGender(v, "👨‍🦰", "\u{13000}"); // 𓀀
  v = handleSkinTonesAndGender(v, "👨‍🦱", "\u{13000}"); // 𓀀
  v = handleSkinTonesAndGender(v, "👨‍🦳", "\u{13000}"); // 𓀀
  v = handleSkinTonesAndGender(v, "👨‍🦲", "\u{13000}"); // 𓀀
  v = handleSkinTonesAndGender(v, "👨", "\u{13000}"); // 𓀀
  // Woman
  v = handleSkinTonesAndGender(v, "👱‍♀️", "\u{13050}"); // 𓁐
  v = handleSkinTonesAndGender(v, "👩‍🦰", "\u{13050}"); // 𓁐
  v = handleSkinTonesAndGender(v, "👩‍🦱", "\u{13050}"); // 𓁐
  v = handleSkinTonesAndGender(v, "👩‍🦳", "\u{13050}"); // 𓁐
  v = handleSkinTonesAndGender(v, "👩‍🦲", "\u{13050}"); // 𓁐
  v = handleSkinTonesAndGender(v, "👩", "\u{13050}"); // 𓁐
  // Person
  v = handleSkinTonesAndGender(v, "👱", "\u{13002}"); // 𓀂
  v = handleSkinTonesAndGender(v, "🧔", "\u{13002}"); // 𓀂
  v = handleSkinTonesAndGender(v, "🧑‍🦰", "\u{13002}"); // 𓀂
  v = handleSkinTonesAndGender(v, "🧑‍🦱", "\u{13002}"); // 𓀂
  v = handleSkinTonesAndGender(v, "🧑‍🦳", "\u{13002}"); // 𓀂
  v = handleSkinTonesAndGender(v, "🧑‍🦲", "\u{13002}"); // 𓀂
  v = handleSkinTonesAndGender(v, "🧑", "\u{13002}"); // 𓀂
  // Child
  v = handleSkinTonesAndGender(v, "👶", "\u{13015}"); // 𓀕
  v = handleSkinTonesAndGender(v, "🧒", "\u{13015}"); // 𓀕
  v = handleSkinTonesAndGender(v, "👦", "\u{13015}"); // 𓀕
  v = handleSkinTonesAndGender(v, "👧", "\u{13015}"); // 𓀕
  // Old
  v = handleSkinTonesAndGender(v, "🧓", "\u{13017}"); // 𓀗
  v = handleSkinTonesAndGender(v, "👴", "\u{13017}"); // 𓀗
  v = handleSkinTonesAndGender(v, "👵", "\u{13017}"); // 𓀗

  // D. Parts of the human body
  v = v.replace(/👤/g, "\u{13077}"); // 𓁷
  v = v.replace(/🗣️/g, "\u{13076}"); // 𓁶
  v = v.replace(/👄/g, "\u{1308F}"); // 𓂏
  v = v.replace(/👁️‍🗨️/g, "\u{13080}"); // 𓂀
  v = v.replace(/👁️/g, "\u{13079}"); // 𓁹
  v = v.replace(/👀/g, "\u{13079}\u{13079}"); // 𓁹𓁹
  v = v.replace(/👓/g, "\u{1307D}\u{1307D}"); // 𓁽𓁽
  v = v.replace(/🥽/g, "\u{1307D}\u{1307D}"); // 𓁽𓁽
  v = v.replace(/🕶️/g, "\u{1307E}\u{1307E}"); // 𓁾𓁾
  v = handleSkinTonesAndGender(v, "👂", "\u{13088}"); // 𓂈
  v = handleSkinTonesAndGender(v, "👃", "\u{1308A}"); // 𓂊
  v = handleSkinTonesAndGender(v, "🤛", "\u{130AC}"); // 𓂬
  v = handleSkinTonesAndGender(v, "🤜", "\u{130AC}"); // 𓂬
  v = handleSkinTonesAndGender(v, "✊", "\u{130AC}"); // 𓂬
  v = handleSkinTonesAndGender(v, "👊", "\u{130AC}"); // 𓂬
  v = handleSkinTonesAndGender(v, "🦵", "\u{130BE}"); // 𓂾
  v = handleSkinTonesAndGender(v, "🦶", "\u{130C0}"); // 𓃀
  v = handleSkinTonesAndGender(v, "✍️", "\u{130C8}"); // 𓃈
  v = handleSkinTonesAndGender(v, "🤷", "\u{1309C}"); // 𓂜
  v = handleSkinTonesAndGender(v, "🚶", "\u{130BB}"); // 𓂻
  v = handleSkinTonesAndGender(v, "👐", "\u{13098}"); // 𓂘
  v = handleSkinTonesAndGender(v, "🙌", "\u{13093}"); // 𓂓
  v = handleSkinTonesAndGender(v, "🤲", "\u{13093}"); // 𓂓
  v = handleSkinTonesAndGender(v, "👆", "\u{130AD}"); // 𓂭
  v = handleSkinTonesAndGender(v, "👈", "\u{130B7}"); // 𓂷
  v = handleSkinTonesAndGender(v, "🤳", "\u{130A5}"); // 𓂥
  v = handleSkinTonesAndGender(v, "🤚", "\u{130A7}"); // 𓂧

  // E. Mammals
  v = v.replace(/🐂/g, "\u{130D2}"); // 𓃒
  v = v.replace(/🐃/g, "\u{130D3}"); // 𓃓
  v = v.replace(/🐄/g, "\u{130D6}"); // 𓃖
  v = v.replace(/🐴/g, "\u{130D7}"); // 𓃗
  v = v.replace(/🐎/g, "\u{130D7}"); // 𓃗
  v = v.replace(/🦓/g, "\u{130D8}"); // 𓃘
  v = v.replace(/🐏/g, "\u{130DD}"); // 𓃝
  v = v.replace(/🐑/g, "\u{130DD}"); // 𓃝
  v = v.replace(/🐷/g, "\u{130DF}"); // 𓃟
  v = v.replace(/🐗/g, "\u{130DF}"); // 𓃟
  v = v.replace(/🐖/g, "\u{130DF}"); // 𓃟
  v = v.replace(/🐈‍⬛/g, "\u{130E0}"); // 𓃠
  v = v.replace(/🐈/g, "\u{130E0}"); // 𓃠
  v = v.replace(/🐱/g, "\u{130E0}"); // 𓃠
  v = v.replace(/🐕‍🦺/g, "\u{130E1}"); // 𓃡
  v = v.replace(/🐶/g, "\u{130E1}"); // 𓃡
  v = v.replace(/🐕/g, "\u{130E1}"); // 𓃡
  v = v.replace(/🦮/g, "\u{130E1}"); // 𓃡
  v = v.replace(/🐩/g, "\u{130E1}"); // 𓃡
  v = v.replace(/🐺/g, "\u{130E5}"); // 𓃥
  v = v.replace(/🦊/g, "\u{130E6}"); // 𓃦
  v = v.replace(/🦁/g, "\u{130EC}"); // 𓃬
  v = v.replace(/🐆/g, "\u{130EE}"); // 𓃮
  v = v.replace(/🐅/g, "\u{130EE}"); // 𓃮
  v = v.replace(/🦛/g, "\u{130EF}"); // 𓃯
  v = v.replace(/🐘/g, "\u{130F0}"); // 𓃰
  v = v.replace(/🦒/g, "\u{130F1}"); // 𓃱
  v = v.replace(/🐐/g, "\u{130F6}"); // 𓃶
  v = v.replace(/🐵/g, "\u{130F8}"); // 𓃸
  v = v.replace(/🐒/g, "\u{130F8}"); // 𓃸
  v = v.replace(/🐰/g, "\u{130F9}"); // 𓃹
  v = v.replace(/🐇/g, "\u{130F9}"); // 𓃹
  v = v.replace(/🦍/g, "\u{130F7}"); // 𓃷
  v = v.replace(/🦧/g, "\u{130FB}"); // 𓃻

  // F. Parts of mammals
  v = v.replace(/🐮/g, "\u{130FE}"); // 𓃾
  v = v.replace(/🐯/g, "\u{13107}"); // 𓄇
  v = v.replace(/🫀/g, "\u{13123}"); // 𓄣
  v = v.replace(/🫁/g, "\u{13125}"); // 𓄥
  v = v.replace(/🍖/g, "\u{1312F}"); // 𓄯
  v = v.replace(/🥩/g, "\u{13117}"); // 𓄗
  v = v.replace(/🥓/g, "\u{1313A}"); // 𓄺
  v = v.replace(/💩/g, "\u{1313D}"); // 𓄽
  v = v.replace(/💘/g, "\u{1311D}"); // 𓄝
  
  // G. Birds
  v = v.replace(/🦅/g, "\u{13142}"); // 𓅂
  v = v.replace(/🦉/g, "\u{13153}"); // 𓅓
  v = v.replace(/🦃/g, "\u{13158}"); // 𓅘
  v = v.replace(/🐔/g, "\u{13158}"); // 𓅘
  v = v.replace(/🐓/g, "\u{13158}"); // 𓅘
  v = v.replace(/🦜/g, "\u{13159}"); // 𓅙
  v = v.replace(/🕊️/g, "\u{1315B}"); // 𓅛
  v = v.replace(/🦚/g, "\u{1315C}"); // 𓅜
  v = v.replace(/🦩/g, "\u{1315F}"); // 𓅟
  v = v.replace(/🦤/g, "\u{13166}"); // 𓅦
  v = v.replace(/🐧/g, "\u{13167}"); // 𓅧
  v = v.replace(/🐦/g, "\u{1316A}"); // 𓅪
  v = v.replace(/🦢/g, "\u{1316C}"); // 𓅬
  v = v.replace(/🦆/g, "\u{1316D}"); // 𓅭
  v = v.replace(/🐣/g, "\u{13171}"); // 𓅱
  v = v.replace(/🐤/g, "\u{13171}"); // 𓅱
  v = v.replace(/🐥/g, "\u{13171}"); // 𓅱
  v = v.replace(/🍗/g, "\u{1317E}"); // 𓅾

  // H. Parts of birds
  v = v.replace(/🪶/g, "\u{13184}"); // 𓆄
  v = v.replace(/🥚/g, "\u{13187}"); // 𓆇

  // I. Amphibious animals, reptiles, etc.
  v = v.replace(/🦎/g, "\u{13188}"); // 𓆈
  v = v.replace(/🐢/g, "\u{13189}"); // 𓆉
  v = v.replace(/🐊/g, "\u{1318C}"); // 𓆌
  v = v.replace(/🐸/g, "\u{1318F}"); // 𓆏
  v = v.replace(/🐉/g, "\u{13191}"); // 𓆑
  v = v.replace(/🐲/g, "\u{131E9}"); // 𓋐
  v = v.replace(/🐍/g, "\u{132D0}"); // 𓆙

  // K. Fish and parts of fish
  v = v.replace(/🐟/g, "\u{1319D}"); // 𓆝
  v = v.replace(/🐠/g, "\u{1319B}"); // 𓆛
  v = v.replace(/🐡/g, "\u{131A1}"); // 𓆡
  
  // L. Invertebrates and lesser animals
  v = v.replace(/🪲/g, "\u{131A3}"); // 𓆣
  v = v.replace(/🐞/g, "\u{131A3}"); // 𓆣
  v = v.replace(/🐝/g, "\u{131A4}"); // 𓆤
  v = v.replace(/🪰/g, "\u{131A6}"); // 𓆦
  v = v.replace(/🦗/g, "\u{131A7}"); // 𓆧
  v = v.replace(/🐛/g, "\u{131A8}"); // 𓆨
  v = v.replace(/🦂/g, "\u{131AB}"); // 𓆫
  v = v.replace(/🪳/g, "\u{131AC}"); // 𓆬
  v = v.replace(/🪱/g, "\u{13193}"); // 𓆓

  // M. Trees and plants
  v = v.replace(/🌲/g, "\u{131AD}"); // 𓆭
  v = v.replace(/🌳/g, "\u{131AD}"); // 𓆭
  v = v.replace(/🌿/g, "\u{131B0}"); // 𓆰
  v = v.replace(/🪵/g, "\u{131B1}"); // 𓆱
  v = v.replace(/🌱/g, "\u{131D1}"); // 𓇑
  v = v.replace(/🌾/g, "\u{131E3}"); // 𓇣
  v = v.replace(/🌸/g, "\u{131EC}"); // 𓇬
  v = v.replace(/🏵️/g, "\u{131EC}"); // 𓇬
  v = v.replace(/🌼/g, "\u{131EC}"); // 𓇬
  v = v.replace(/🌺/g, "\u{131EC}"); // 𓇬
  v = v.replace(/🌻/g, "\u{131EC}"); // 𓇬
  v = v.replace(/💐/g, "\u{131DA}"); // 𓇚
  v = v.replace(/🌹/g, "\u{131B8}"); // 𓆸
  v = v.replace(/🥀/g, "\u{131B8}"); // 𓆸
  v = v.replace(/🌷/g, "\u{131B8}"); // 𓆸
  v = v.replace(/🪴/g, "\u{131DD}"); // 𓇞
  v = v.replace(/🌴/g, "\u{131B3}"); // 𓆳
  v = v.replace(/🏝️/g, "\u{131B5}"); // 𓆵
  v = v.replace(/🗑️/g, "\u{131E8}"); // 𓇨
  v = v.replace(/🎋/g, "\u{131E9}"); // 𓇩

  // N. Sky, earth, water
  v = v.replace(/🌌/g, "\u{131EF}"); // 𓇯
  v = v.replace(/☁️/g, "\u{131EF}"); // 𓇯
  v = v.replace(/🌧️/g, "\u{131F2}"); // 𓇲
  v = v.replace(/⛈️/g, "\u{131F0}"); // 𓇰
  v = v.replace(/🌩️/g, "\u{131F0}"); // 𓇰
  v = v.replace(/🌦️/g, "\u{131F3}\u{131F2}"); // 𓇳𓇲
  v = v.replace(/☀️/g, "\u{131F3}"); // 𓇳
  v = v.replace(/🌓/g, "\u{131F7}"); // 𓇷
  v = v.replace(/🌗/g, "\u{131F7}"); // 𓇷
  v = v.replace(/🌕/g, "\u{131F7}"); // 𓇷
  v = v.replace(/🌑/g, "\u{131F7}"); // 𓇷
  v = v.replace(/🌒/g, "\u{131F8}"); // 𓇸
  v = v.replace(/🌘/g, "\u{131F8}"); // 𓇸
  v = v.replace(/🌔/g, "\u{131F8}"); // 𓇸
  v = v.replace(/🌖/g, "\u{131F8}"); // 𓇸
  v = v.replace(/🌒/g, "\u{131F8}"); // 𓇸
  v = v.replace(/🌙/g, "\u{131F9}"); // 𓇹
  v = v.replace(/⭐/g, "\u{131FC}"); // 𓇼
  v = v.replace(/🌟/g, "\u{131FC}"); // 𓇼
  v = v.replace(/🌠/g, "\u{131FB}"); // 𓇻
  v = v.replace(/🌄/g, "\u{1320C}"); // 𓈌
  v = v.replace(/🌅/g, "\u{1320D}"); // 𓈍
  v = v.replace(/🌊/g, "\u{13216}"); // 𓈖
  v = v.replace(/⛰️/g, "\u{13209}"); // 𓈉
  v = v.replace(/🏔️/g, "\u{13209}"); // 𓈉
  v = v.replace(/🛣️/g, "\u{13210}"); // 𓈐
  v = v.replace(/🪨/g, "\u{13211}"); // 𓈑
  v = v.replace(/🚰/g, "\u{1321E}"); // 𓈞

  // O. Buildings, parts of buildings, etc.
  v = v.replace(/🏠/g, "\u{13250}"); // 𓉐
  v = v.replace(/🏚️/g, "\u{13250}"); // 𓉐
  v = v.replace(/🛖/g, "\u{13250}"); // 𓉐
  v = v.replace(/🏡/g, "\u{131AD}\u{13250}"); // 𓆭𓉐
  v = v.replace(/🏘️/g, "\u{13250}"); // 𓉐𓉐𓉐
  v = v.replace(/🗼/g, "\u{13274}"); // 𓉴
  v = v.replace(/🏰/g, "\u{13267}"); // 𓉧
  v = v.replace(/🏯/g, "\u{13267}"); // 𓉧
  v = v.replace(/🛕/g, "\u{13277}"); // 𓉷
  v = v.replace(/🕍/g, "\u{1326F}"); // 𓉯
  v = v.replace(/⛪/g, "\u{1326E}"); // 𓉮
  v = v.replace(/💒/g, "\u{1326E}"); // 𓉮
  v = v.replace(/🕌/g, "\u{1326D}"); // 𓉭
  v = v.replace(/🏛️/g, "\u{13279}"); // 𓉹
  v = v.replace(/🧱/g, "\u{1328C}"); // 𓊌
  v = v.replace(/🚪/g, "\u{13280}"); // 𓊀
  v = v.replace(/💣/g, "\u{13298}"); // 𓊘
  v = v.replace(/🪦/g, "\u{13278}"); // 𓉸

  // P. Ships and parts of ships
  v = v.replace(/🛶/g, "\u{1329B}"); // 𓊛
  v = v.replace(/🚤/g, "\u{1329B}"); // 𓊛
  v = v.replace(/🛥️/g, "\u{1329B}"); // 𓊛
  v = v.replace(/⛵/g, "\u{1329D}"); // 𓊝
  v = v.replace(/🛳️/g, "\u{1329D}"); // 𓊝
  v = v.replace(/⛴️/g, "\u{1329D}"); // 𓊝
  v = v.replace(/🚢/g, "\u{1329D}"); // 𓊝

  // Q. Domestics and funerary furniture
  v = v.replace(/🧰/g, "\u{132AC}"); // 𓊬
  v = v.replace(/💺/g, "\u{132A8}"); // 𓊨
  v = v.replace(/🪑/g, "\u{132A8}"); // 𓊨
  v = v.replace(/🔥/g, "\u{132AE}"); // 𓊮
  v = v.replace(/⚰️/g, "\u{132AD}"); // 𓊭

  // R. Temple furniture and sacred emblems
  v = v.replace(/🍲/g, "\u{132B8}"); // 𓊸
  v = v.replace(/🦇/g, "\u{132CF}"); // 𓋏
  v = v.replace(/🏳️/g, "\u{132B9}"); // 𓊹
  v = v.replace(/🏴/g, "\u{132B9}"); // 𓊹
  v = v.replace(/⛳/g, "\u{132BC}"); // 𓊼
  
  // S. Crowns, dress, staves, etc.
  v = v.replace(/👑/g, "\u{132D6}"); // 𓋖
  v = v.replace(/👒/g, "\u{132DC}"); // 𓋜
  v = v.replace(/📿/g, "\u{132DE}"); // 𓋞
  v = v.replace(/💍/g, "\u{132EA}"); // 𓋪
  v = v.replace(/🧣/g, "\u{132F7}"); // 𓋷
  v = v.replace(/🩴/g, "\u{132F8}"); // 𓋸
  v = v.replace(/👡/g, "\u{132F8}"); // 𓋸
  v = v.replace(/⛱️/g, "\u{132FB}"); // 𓋻
  v = v.replace(/🏖️/g, "\u{132FB}"); // 𓋻
  v = v.replace(/🌂/g, "\u{132FB}"); // 𓋻
  v = v.replace(/☂️/g, "\u{132FB}"); // 𓋻
  v = v.replace(/☔/g, "\u{132FB}"); // 𓋻
  v = v.replace(/🪝/g, "\u{132FE}"); // 𓋾
  v = v.replace(/🦯/g, "\u{132FF}"); // 𓋿
  v = v.replace(/🪄/g, "\u{13300}"); // 𓌀
  v = v.replace(/👗/g, "\u{132EF}"); // 𓋯

  // T. Warfare, hunting, and butchery
  v = v.replace(/🥄/g, "\u{13308}"); // 𓌈
  v = v.replace(/🪓/g, "\u{1330F}"); // 𓌏
  v = v.replace(/🗡️/g, "\u{13311}"); // 𓌑
  v = v.replace(/🏹/g, "\u{13314}"); // 𓌔
  v = v.replace(/🚗/g, "\u{1331D}"); // 𓌝
  v = v.replace(/🚘/g, "\u{1331D}"); // 𓌝
  v = v.replace(/🚙/g, "\u{1331D}"); // 𓌝
  v = v.replace(/🏎️/g, "\u{1331D}"); // 𓌝
  v = v.replace(/🛺/g, "\u{1331D}"); // 𓌝
  v = v.replace(/🪤/g, "\u{13327}"); // 𓌧
  v = v.replace(/🔪/g, "\u{1332A}"); // 𓌪
  v = v.replace(/🛡️/g, "\u{13332}"); // 𓌲
  
  // U. Agriculture, crafts, and professions
  v = v.replace(/🛷/g, "\u{13343}"); // 𓍃
  v = v.replace(/⛏️/g, "\u{13345}"); // 𓍅
  v = v.replace(/🔔/g, "\u{1334A}"); // 𓍊
  v = v.replace(/🛎️/g, "\u{1334A}"); // 𓍊
  v = v.replace(/🎐/g, "\u{1334A}"); // 𓍊
  v = v.replace(/⚖️/g, "\u{1335D}"); // 𓍝
  v = v.replace(/🔱/g, "\u{13361}"); // 𓍡
  v = v.replace(/🍴/g, "\u{1327D}\u{13331}"); // 𓉽𓌱

  // V. Rope, fiber, baskets, bags, etc.
  v = v.replace(/🪢/g, "\u{13370}"); // 𓍰
  v = v.replace(/🦺/g, "\u{13383}"); // 𓎃
  v = v.replace(/🔧/g, "\u{1339A}"); // 𓎚
  v = v.replace(/🍽️/g, "\u{1327D}\u{1339F}\u{13331}"); // 𓉽𓎟𓌱
  v = v.replace(/🧺/g, "\u{133A1}"); // 𓎡
  v = v.replace(/🥣/g, "\u{133A9}"); // 𓎩
  v = v.replace(/🪔/g, "\u{133AA}"); // 𓎪

  // W. Vessels of stone and earthenware
  v = v.replace(/⚱️/g, "\u{133B0}"); // 𓎰
  v = v.replace(/🥘/g, "\u{133B1}"); // 𓎱
  v = v.replace(/🫕/g, "\u{133B5}"); // 𓎵
  v = v.replace(/🏺/g, "\u{133B6}"); // 𓎶
  v = v.replace(/🍬/g, "\u{133B7}"); // 𓎷
  v = v.replace(/🫖/g, "\u{133B8}"); // 𓎸
  v = v.replace(/🥃/g, "\u{133BA}"); // 𓎺
  v = v.replace(/🍳/g, "\u{133BB}"); // 𓎻
  v = v.replace(/🥛/g, "\u{133C8}"); // 𓏈
  v = v.replace(/🍺/g, "\u{133CA}"); // 𓏊
  v = v.replace(/🍯/g, "\u{133CB}"); // 𓏋
  v = v.replace(/🧉/g, "\u{133CC}"); // 𓏌

  // X. Loaves and cakes
  v = v.replace(/🍞/g, "\u{133CF}"); // 𓏏
  v = v.replace(/🥐/g, "\u{131FA}"); // 𓇺
  v = v.replace(/🥖/g, "\u{133D4}"); // 𓏔
  v = v.replace(/🥮/g, "\u{133D6}"); // 𓏖
  v = v.replace(/🎂/g, "\u{133D6}"); // 𓏖
  v = v.replace(/🥧/g, "\u{133D6}"); // 𓏖
  v = v.replace(/🧁/g, "\u{133D6}"); // 𓏖
  v = v.replace(/🫓/g, "\u{133D7}"); // 𓏗

  // Y. Writings, games, music
  v = v.replace(/📜/g, "\u{133DB}"); // 𓏛
  v = v.replace(/♟️/g, "\u{133E1}"); // 𓏡
  v = v.replace(/🪕/g, "\u{133E2}"); // 𓏢
  v = v.replace(/🎸/g, "\u{133E2}"); // 𓏢
  v = v.replace(/🎤/g, "\u{133E3}"); // 𓏣
  v = v.replace(/🎙️/g, "\u{133E3}"); // 𓏣
  
  // Z. Strokes, signs derived from Hieratic, geometrical figures
  v = v.replace(/🌀/g, "\u{133F2}"); // 𓏲
  v = v.replace(/🥢/g, "\u{133F5}"); // 𓏵
  
  // Aa. Unclassified
  v = v.replace(/🍜/g, "\u{13410}"); // 𓐐
  
  // Zodiac
  v = v.replace(/♈/g, "\u{130DD}"); // 𓃝
  v = v.replace(/♉/g, "\u{130D2}"); // 𓃒
  v = v.replace(/♊/g, "\u{13046}\u{1304C}"); // 𓁆𓁌
  v = v.replace(/♋/g, "\u{131A3}"); // 𓆣
  v = v.replace(/♌/g, "\u{130EC}"); // 𓃬
  v = v.replace(/♍/g, "\u{13058}"); // 𓁘
  v = v.replace(/♎/g, "\u{1335D}"); // 𓍝
  v = v.replace(/♏/g, "\u{131AB}"); // 𓆫
  v = v.replace(/♐/g, "\u{1300E}"); // 𓀎
  v = v.replace(/♑/g, "\u{130F6}"); // 𓃶
  v = v.replace(/♒/g, "\u{13007}"); // 𓀇
  v = v.replace(/♓/g, "\u{1319D}\u{1319E}"); // 𓆞𓆝
  v = v.replace(/⛎/g, "\u{13197}\u{13044}"); // 𓆗𓁄
  
  // Combinations and Easter Eggs
  v = v.replace(/𓃱𓁌𓃱/g, "\u{1302C}"); // 𓀬
  v = v.replace(/𓃱𓀀𓃱/g, "\u{1302C}"); // 𓀬
  v = v.replace(/𓃱𓁐𓃱/g, "\u{1302C}"); // 𓀬
  v = v.replace(/𓃱𓀂𓃱/g, "\u{1302C}"); // 𓀬
  v = v.replace(/𓃱𓀕𓃱/g, "\u{1302C}"); // 𓀬
  v = v.replace(/𓃱𓀗𓃱/g, "\u{1302C}"); // 𓀬
  v = v.replace(/𓅓𓅓/g, "\u{13154}"); // 𓅔
  v = v.replace(/𓅱𓅱/g, "\u{13173}"); // 𓅳
  v = v.replace(/𓇑𓇑/g, "\u{131D2}"); // 𓇒
  v = v.replace(/𓇑𓆤𓏏𓏏/g, "\u{131A5}"); // 𓆥
  v = v.replace(/𓆙𓆙𓆙𓊀𓆙𓆙𓆙/g, "\u{1326A}"); // 𓉪
  v = v.replace(/𓆭𓆙/g, "\u{131AF}"); // 𓆯
  v = v.replace(/𓆙𓆙/g, "\u{13195}"); // 𓆕
  v = v.replace(/𓈖𓈖𓈖/g, "\u{13217}"); // 𓈗


	textNode.nodeValue = v;
}


