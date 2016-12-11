var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.ld37;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'AD802F541B76C593F2ADEB459060BE15';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 5:1}, $intern_2 = {63:1}, $intern_3 = 4194303, $intern_4 = {231:1, 3:1}, $intern_5 = {57:1}, $intern_6 = {54:1, 3:1, 23:1, 32:1}, $intern_7 = 1048575, $intern_8 = {3:1, 14:1, 8:1, 10:1}, $intern_9 = {61:1, 13:1, 3:1, 7:1, 6:1}, $intern_10 = {48:1, 13:1, 3:1, 7:1, 6:1}, $intern_11 = {13:1, 49:1, 3:1, 7:1, 6:1}, $intern_12 = {13:1, 50:1, 3:1, 7:1, 6:1}, $intern_13 = {19:1, 3:1, 7:1, 6:1}, $intern_14 = {13:1, 81:1, 3:1, 7:1, 6:1}, $intern_15 = {13:1, 35:1, 3:1, 7:1, 6:1}, $intern_16 = 524288, $intern_17 = {133:1}, $intern_18 = {53:1}, $intern_19 = 1.5707963705062866, $intern_20 = 0.05000000074505806, $intern_21 = 3.906250058207661E-4, $intern_22 = {51:1, 3:1, 7:1, 6:1}, $intern_23 = {12:1, 11:1}, $intern_24 = {36:1, 3:1, 7:1, 6:1}, $intern_25 = 16777215, $intern_26 = {12:1, 17:1, 11:1}, $intern_27 = -16777216, $intern_28 = 65535, $intern_29 = {3:1, 23:1, 32:1}, $intern_30 = {31:1, 3:1}, $intern_31 = 16777619, $intern_32 = {529:1, 3:1}, $intern_33 = 15525485, $intern_34 = 5.9604644775390625E-8, $intern_35 = 16777216, $intern_36 = {33:1, 30:1}, $intern_37 = {33:1, 30:1, 45:1, 43:1}, $intern_38 = 0.10000000149011612, $intern_39 = 0.699999988079071, $intern_40 = {3:1, 7:1, 6:1, 69:1}, $intern_41 = 3.4028234663852886E38, $intern_42 = {3:1, 174:1}, $intern_43 = {90:1, 3:1}, $intern_44 = 34962, $intern_45 = 34963, $intern_46 = {3:1, 7:1, 6:1, 18:1}, $intern_47 = {155:1, 43:1}, $intern_48 = -3.4028234663852886E38, $intern_49 = 1.401298464324817E-45, $intern_50 = {21:1}, $intern_51 = -5592406, $intern_52 = -1118482, $intern_53 = {76:1, 21:1}, $intern_54 = -3355444, $intern_55 = {3:1, 7:1, 6:1, 65:1}, $intern_56 = {3:1, 7:1, 6:1, 134:1, 38:1}, $intern_57 = {3:1, 7:1, 6:1, 66:1}, $intern_58 = {3:1, 7:1, 6:1, 52:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function $toString(this$static){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this$static)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this$static), 16);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

function toString__Ljava_lang_String___devirtual$(this$static){
  return isJavaString(this$static)?this$static:hasJavaObjectVirtualDispatch(this$static)?this$static.toString$():isJavaArray(this$static)?$toString(this$static):this$static.toString?this$static.toString():'[JavaScriptObject]';
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 230:1, 7:1, 2:1};
modernizeBrowser();
function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && (isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId]);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_short(x_0){
  return x_0 << 16 >> 16;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId, superclass){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.superclass = superclass;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_1('.', [packageName, join_1('$', compoundName)]);
  clazz.canonicalName = join_1('.', [packageName, join_1('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_1(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(175, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  clazz.superclass = Ljava_lang_Object_2_classLit;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_24(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, Ljava_lang_Object_2_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 175, Ljava_lang_Object_2_classLit);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  s = $doc.location.href;
  i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  s.length > 0?s + '/':'';
  gwtVoices = getParameter('gwt-voices');
  $equals(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [FLASH])):$equals(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [HTML5])):$equals(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [WEB_AUDIO])):$equals(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [NATIVE])):$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '-500.0px'));
  $setPropertyImpl(style, 'top', '-500.0px');
  $setPropertyImpl(style, 'width', '0.0px');
  $setPropertyImpl(style, 'height', '0.0px');
}

defineClass(391, 1, {}, SoundController);
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass('com.allen_sauer.gwt.voices.client', 'SoundController', 391, Ljava_lang_Object_2_classLit);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {3:1, 7:1, 6:1});
_.compareTo = function compareTo(other){
  return this.ordinal - other.ordinal;
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 6, Ljava_lang_Object_2_classLit);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_0(){
  $clinit_SoundType();
  return initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 40, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(40, 6, {40:1, 3:1, 7:1, 6:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum('com.allen_sauer.gwt.voices.client', 'SoundType', 40, Ljava_lang_Enum_2_classLit, values_0);
defineClass(587, 1, {3:1});
var Lcom_google_common_base_Optional_2_classLit = createForClass('com.google.common.base', 'Optional', 587, Ljava_lang_Object_2_classLit);
function $clinit_Absent(){
  $clinit_Absent = emptyMethod;
  INSTANCE = new Absent;
}

function Absent(){
}

defineClass(494, 587, {3:1}, Absent);
_.equals$ = function equals_1(object){
  return object === this;
}
;
_.get_0 = function get_0(){
  throw new IllegalStateException_0('Optional.get() cannot be called on an absent value');
}
;
_.hashCode$ = function hashCode_2(){
  return 2040732332;
}
;
_.isPresent = function isPresent(){
  return false;
}
;
_.toString$ = function toString_2(){
  return 'Optional.absent()';
}
;
var INSTANCE;
var Lcom_google_common_base_Absent_2_classLit = createForClass('com.google.common.base', 'Absent', 494, Lcom_google_common_base_Optional_2_classLit);
function $appendTo(this$static, appendable, parts){
  checkNotNull(appendable);
  if ($hasNext(parts)) {
    $append_5(appendable, $toString_0(this$static, $next(parts)));
    while ($hasNext(parts)) {
      $append_5(appendable, this$static.separator);
      $append_5(appendable, $toString_0(this$static, $next(parts)));
    }
  }
  return appendable;
}

function $appendTo_0(this$static, builder, parts){
  $appendTo(this$static, builder, parts);
  return builder;
}

function Joiner(){
  this.separator = checkNotNull(', ');
}

defineClass(218, 1, {}, Joiner);
_.toString_0 = function toString_3(part){
  checkNotNull(part);
  return instanceOf(part, 230)?part:toString__Ljava_lang_String___devirtual$(part);
}
;
_.useForNull = function useForNull(nullText){
  checkNotNull(nullText);
  return new Joiner$1(this, this, nullText);
}
;
var Lcom_google_common_base_Joiner_2_classLit = createForClass('com.google.common.base', 'Joiner', 218, Ljava_lang_Object_2_classLit);
function $toString_0(this$static, part){
  return part == null?this$static.val$nullText3:this$static.this$01.toString_0(part);
}

function Joiner$1(this$0, $anonymous0, val$nullText){
  this.this$01 = this$0;
  this.val$nullText3 = val$nullText;
  this.separator = $anonymous0.separator;
}

defineClass(472, 218, {}, Joiner$1);
_.toString_0 = function toString_4(part){
  return $toString_0(this, part);
}
;
_.useForNull = function useForNull_0(nullText){
  throw new UnsupportedOperationException_0('already specified useForNull');
}
;
var Lcom_google_common_base_Joiner$1_2_classLit = createForClass('com.google.common.base', 'Joiner/1', 472, Lcom_google_common_base_Joiner_2_classLit);
function Joiner$MapJoiner(keyValueSeparator){
  checkNotNull(keyValueSeparator);
}

defineClass(471, 1, {}, Joiner$MapJoiner);
var Lcom_google_common_base_Joiner$MapJoiner_2_classLit = createForClass('com.google.common.base', 'Joiner/MapJoiner', 471, Ljava_lang_Object_2_classLit);
function $addHolder(this$static, name_0, value_0){
  var valueHolder, valueHolder_0;
  valueHolder = (valueHolder_0 = new MoreObjects$ToStringHelper$ValueHolder , this$static.holderTail = this$static.holderTail.next = valueHolder_0 , valueHolder_0);
  valueHolder.value_0 = value_0;
  valueHolder.name_0 = checkNotNull(name_0);
  return this$static;
}

function $toString_1(this$static){
  var arrayString, builder, nextSeparator, objectArray, value_0, valueHolder;
  nextSeparator = '';
  builder = $append_1($append_7(new StringBuilder_0, this$static.className), 123);
  for (valueHolder = this$static.holderHead.next; valueHolder; valueHolder = valueHolder.next) {
    value_0 = valueHolder.value_0;
    builder.string += nextSeparator;
    nextSeparator = ', ';
    valueHolder.name_0 != null && $append_1($append_7(builder, valueHolder.name_0), 61);
    if (value_0 != null && (getClass__Ljava_lang_Class___devirtual$(value_0).modifiers & 4) != 0) {
      objectArray = initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [value_0]);
      arrayString = deepToString(objectArray, new HashSet);
      $append_7(builder, $substring_0(arrayString, 1, arrayString.length - 1));
    }
     else {
      builder.string += value_0;
    }
  }
  return (builder.string += '}' , builder).string;
}

function MoreObjects$ToStringHelper(className){
  this.holderHead = new MoreObjects$ToStringHelper$ValueHolder;
  this.holderTail = this.holderHead;
  this.className = checkNotNull(className);
}

defineClass(201, 1, {}, MoreObjects$ToStringHelper);
_.toString$ = function toString_5(){
  return $toString_1(this);
}
;
var Lcom_google_common_base_MoreObjects$ToStringHelper_2_classLit = createForClass('com.google.common.base', 'MoreObjects/ToStringHelper', 201, Ljava_lang_Object_2_classLit);
function MoreObjects$ToStringHelper$ValueHolder(){
}

defineClass(202, 1, {}, MoreObjects$ToStringHelper$ValueHolder);
var Lcom_google_common_base_MoreObjects$ToStringHelper$ValueHolder_2_classLit = createForClass('com.google.common.base', 'MoreObjects/ToStringHelper/ValueHolder', 202, Ljava_lang_Object_2_classLit);
function equal(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function badPositionIndex(index_0, size_0){
  if (index_0 < 0) {
    return format_0('%s (%s) must not be negative', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['index', valueOf(index_0)]));
  }
   else if (size_0 < 0) {
    throw new IllegalArgumentException_0('negative size: ' + size_0);
  }
   else {
    return format_0('%s (%s) must not be greater than size (%s)', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['index', valueOf(index_0), valueOf(size_0)]));
  }
}

function checkArgument(expression, errorMessageTemplate, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format_0(errorMessageTemplate, errorMessageArgs));
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0(badPositionIndex(index_0, size_0));
  }
  return index_0;
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression, errorMessage){
  if (!expression) {
    throw new IllegalStateException_0('' + errorMessage);
  }
}

function format_0(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_7(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_6(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_7(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_6(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_6(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function Present(reference){
  this.reference = reference;
}

defineClass(56, 587, {56:1, 3:1}, Present);
_.equals$ = function equals_2(object){
  var other;
  if (instanceOf(object, 56)) {
    other = object;
    return equals_Ljava_lang_Object__Z__devirtual$(this.reference, other.reference);
  }
  return false;
}
;
_.get_0 = function get_1(){
  return this.reference;
}
;
_.hashCode$ = function hashCode_3(){
  return 1502476572 + hashCode__I__devirtual$(this.reference);
}
;
_.isPresent = function isPresent_0(){
  return true;
}
;
_.toString$ = function toString_6(){
  return 'Optional.of(' + this.reference + ')';
}
;
var Lcom_google_common_base_Present_2_classLit = createForClass('com.google.common.base', 'Present', 56, Lcom_google_common_base_Optional_2_classLit);
defineClass(63, 1, $intern_2);
_.remove = function remove_0(){
  throw new UnsupportedOperationException;
}
;
var Lcom_google_common_collect_UnmodifiableIterator_2_classLit = createForClass('com.google.common.collect', 'UnmodifiableIterator', 63, Ljava_lang_Object_2_classLit);
defineClass(573, 63, $intern_2);
var Lcom_google_common_collect_UnmodifiableListIterator_2_classLit = createForClass('com.google.common.collect', 'UnmodifiableListIterator', 573, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
defineClass(410, 573, $intern_2);
_.hasNext = function hasNext(){
  return this.position_0 < this.size_0;
}
;
_.next_0 = function next_0(){
  if (this.position_0 >= this.size_0) {
    throw new NoSuchElementException;
  }
  return $get_0(this, this.position_0++);
}
;
_.position_0 = 0;
_.size_0 = 0;
var Lcom_google_common_collect_AbstractIndexedListIterator_2_classLit = createForClass('com.google.common.collect', 'AbstractIndexedListIterator', 410, Lcom_google_common_collect_UnmodifiableListIterator_2_classLit);
function $hasNext(this$static){
  checkState(this$static.state != 3);
  switch (this$static.state) {
    case 2:
      return false;
    case 0:
      return true;
  }
  return $tryToComputeNext(this$static);
}

function $next(this$static){
  var result;
  if (!$hasNext(this$static)) {
    throw new NoSuchElementException;
  }
  this$static.state = 1;
  result = this$static.next;
  this$static.next = null;
  return result;
}

function $tryToComputeNext(this$static){
  this$static.state = 3;
  this$static.next = $computeNext(this$static);
  if (this$static.state != 2) {
    this$static.state = 0;
    return true;
  }
  return false;
}

defineClass(452, 63, $intern_2);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next_0 = function next_1(){
  return $next(this);
}
;
_.state = 1;
var Lcom_google_common_collect_AbstractIterator_2_classLit = createForClass('com.google.common.collect', 'AbstractIterator', 452, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkNotNull_0(c);
  changed = false;
  for (e$iterator = $iterator_0(new AbstractMap$1(c.map_0)); $hasNext_0(e$iterator.val$outerIter2);) {
    e = $next_3(e$iterator);
    changed = changed | $add_5(this$static, e);
  }
  return changed;
}

function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull_0(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static){
  return this$static.toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, this$static.size_1(), 3, 1));
}

function $toArray_0(this$static, a){
  var i, it, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    a[i] = it.next_0();
  }
  a.length > size_0 && (a[size_0] = null);
  return a;
}

function $toString_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(544, 1, {});
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(){
  return $toArray(this);
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray_0(this, a);
}
;
_.toString$ = function toString_7(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 544, Ljava_lang_Object_2_classLit);
function $entrySet(this$static){
  var result;
  result = this$static.entrySet;
  !result && (this$static.entrySet = result = new AbstractMultiset$EntrySet(this$static));
  return result;
}

defineClass(577, 544, {231:1});
_.contains = function contains_0(element){
  return $count(this, element) > 0;
}
;
_.equals$ = function equals_3(object){
  return equalsImpl_0(this, object);
}
;
_.hashCode$ = function hashCode_4(){
  return $entrySet(this).hashCode$();
}
;
_.iterator = function iterator_0(){
  return new Multisets$MultisetIteratorImpl(this, $entrySet(this).iterator());
}
;
_.size_1 = function size_1(){
  return sizeImpl(this);
}
;
_.toString$ = function toString_8(){
  return $entrySet(this).toString$();
}
;
var Lcom_google_common_collect_AbstractMultiset_2_classLit = createForClass('com.google.common.collect', 'AbstractMultiset', 577, Ljava_util_AbstractCollection_2_classLit);
function $add(this$static, element){
  var frequency, newCount, oldCount, result;
  checkArgument(true, 'occurrences cannot be negative: %s', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf(4)]));
  frequency = this$static.backingMap.get_2(element);
  if (!frequency) {
    oldCount = 0;
    this$static.backingMap.put(element, new Count(4));
  }
   else {
    oldCount = frequency.value_0;
    newCount = add_1(fromInt(oldCount), {l:4, m:0, h:0});
    checkArgument(lte(newCount, {l:$intern_3, m:511, h:0}), 'too many occurrences: %s', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf_0(newCount)]));
    result = frequency.value_0;
    frequency.value_0 = result + 4;
  }
  this$static.size_0 = add_1(this$static.size_0, {l:4, m:0, h:0});
  return oldCount;
}

function $count(this$static, element){
  var frequency;
  frequency = safeGet(this$static.backingMap, element);
  return !frequency?0:frequency.value_0;
}

function $entryIterator(this$static){
  var backingEntries;
  backingEntries = this$static.backingMap.entrySet_0().iterator();
  return new AbstractMapBasedMultiset$1(this$static, backingEntries);
}

function $remove(this$static, element){
  var frequency, numberRemoved, oldCount;
  checkArgument(true, 'occurrences cannot be negative: %s', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf(1)]));
  frequency = this$static.backingMap.get_2(element);
  if (!frequency) {
    return 0;
  }
  oldCount = frequency.value_0;
  if (oldCount > 1) {
    numberRemoved = 1;
  }
   else {
    numberRemoved = oldCount;
    this$static.backingMap.remove_0(element);
  }
  frequency.value_0 += -numberRemoved;
  this$static.size_0 = sub_0(this$static.size_0, fromInt(numberRemoved));
  return oldCount;
}

function $setCount(this$static, element, count){
  var existingCounter, oldCount;
  checkNonnegative(count);
  if (count == 0) {
    existingCounter = this$static.backingMap.remove_0(element);
    oldCount = getAndSet(existingCounter, 0);
  }
   else {
    existingCounter = this$static.backingMap.get_2(element);
    oldCount = getAndSet(existingCounter, count);
    !existingCounter && this$static.backingMap.put(element, new Count(count));
  }
  this$static.size_0 = add_1(this$static.size_0, fromInt(count - oldCount));
  return oldCount;
}

function AbstractMapBasedMultiset(backingMap){
  this.backingMap = checkNotNull(backingMap);
  this.size_0 = fromInt(sizeImpl(this));
}

function getAndSet(i, count){
  if (!i) {
    return 0;
  }
  return $getAndSet(i, count);
}

defineClass(445, 577, $intern_4);
_.iterator = function iterator_1(){
  return new AbstractMapBasedMultiset$MapBasedMultisetIterator(this);
}
;
_.size_1 = function size_2(){
  return saturatedCast(this.size_0);
}
;
_.size_0 = {l:0, m:0, h:0};
var Lcom_google_common_collect_AbstractMapBasedMultiset_2_classLit = createForClass('com.google.common.collect', 'AbstractMapBasedMultiset', 445, Lcom_google_common_collect_AbstractMultiset_2_classLit);
function AbstractMapBasedMultiset$1(this$0, val$backingEntries){
  this.this$01 = this$0;
  this.val$backingEntries2 = val$backingEntries;
}

defineClass(448, 1, {}, AbstractMapBasedMultiset$1);
_.hasNext = function hasNext_1(){
  return this.val$backingEntries2.hasNext();
}
;
_.next_0 = function next_2(){
  var mapEntry;
  return mapEntry = this.val$backingEntries2.next_0() , this.toRemove = mapEntry , new AbstractMapBasedMultiset$1$1(this, mapEntry);
}
;
_.remove = function remove_1(){
  checkState_0(!!this.toRemove, 'no calls to next() since the last call to remove()');
  this.this$01.size_0 = sub_0(this.this$01.size_0, fromInt($getAndSet(this.toRemove.getValue(), 0)));
  this.val$backingEntries2.remove();
  this.toRemove = null;
}
;
var Lcom_google_common_collect_AbstractMapBasedMultiset$1_2_classLit = createForClass('com.google.common.collect', 'AbstractMapBasedMultiset/1', 448, Ljava_lang_Object_2_classLit);
defineClass(578, 1, {232:1});
_.equals$ = function equals_4(object){
  var that;
  if (instanceOf(object, 232)) {
    that = object;
    return $getCount(this) == $getCount(that) && equal(this.val$mapEntry2.getKey(), that.val$mapEntry2.getKey());
  }
  return false;
}
;
_.hashCode$ = function hashCode_5(){
  var e;
  e = this.val$mapEntry2.getKey();
  return (e == null?0:hashCode__I__devirtual$(e)) ^ $getCount(this);
}
;
_.toString$ = function toString_9(){
  var n, text_0;
  text_0 = '' + this.val$mapEntry2.getKey();
  n = $getCount(this);
  return n == 1?text_0:text_0 + ' x ' + n;
}
;
var Lcom_google_common_collect_Multisets$AbstractEntry_2_classLit = createForClass('com.google.common.collect', 'Multisets/AbstractEntry', 578, Ljava_lang_Object_2_classLit);
function $getCount(this$static){
  var count, frequency;
  count = this$static.val$mapEntry2.getValue();
  if (!count || count.value_0 == 0) {
    frequency = this$static.this$11.this$01.backingMap.get_2(this$static.val$mapEntry2.getKey());
    if (frequency) {
      return frequency.value_0;
    }
  }
  return !count?0:count.value_0;
}

function AbstractMapBasedMultiset$1$1(this$1, val$mapEntry){
  this.this$11 = this$1;
  this.val$mapEntry2 = val$mapEntry;
}

defineClass(449, 578, {232:1}, AbstractMapBasedMultiset$1$1);
var Lcom_google_common_collect_AbstractMapBasedMultiset$1$1_2_classLit = createForClass('com.google.common.collect', 'AbstractMapBasedMultiset/1/1', 449, Lcom_google_common_collect_Multisets$AbstractEntry_2_classLit);
function AbstractMapBasedMultiset$MapBasedMultisetIterator(this$0){
  this.this$01 = this$0;
  this.entryIterator = this$0.backingMap.entrySet_0().iterator();
}

defineClass(447, 1, {}, AbstractMapBasedMultiset$MapBasedMultisetIterator);
_.hasNext = function hasNext_2(){
  return this.occurrencesLeft > 0 || this.entryIterator.hasNext();
}
;
_.next_0 = function next_3(){
  if (this.occurrencesLeft == 0) {
    this.currentEntry = this.entryIterator.next_0();
    this.occurrencesLeft = this.currentEntry.getValue().value_0;
  }
  --this.occurrencesLeft;
  this.canRemove = true;
  return this.currentEntry.getKey();
}
;
_.remove = function remove_2(){
  var frequency;
  checkState_0(this.canRemove, 'no calls to next() since the last call to remove()');
  frequency = this.currentEntry.getValue().value_0;
  if (frequency <= 0) {
    throw new ConcurrentModificationException;
  }
  (this.currentEntry.getValue().value_0 += -1) == 0 && this.entryIterator.remove();
  this.this$01.size_0 = sub_0(this.this$01.size_0, {l:1, m:0, h:0});
  this.canRemove = false;
}
;
_.canRemove = false;
_.occurrencesLeft = 0;
var Lcom_google_common_collect_AbstractMapBasedMultiset$MapBasedMultisetIterator_2_classLit = createForClass('com.google.common.collect', 'AbstractMapBasedMultiset/MapBasedMultisetIterator', 447, Ljava_lang_Object_2_classLit);
defineClass(545, 544, $intern_5);
_.equals$ = function equals_5(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 57)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_25(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 545, Ljava_util_AbstractCollection_2_classLit);
defineClass(579, 545, $intern_5);
var Lcom_google_common_collect_Sets$ImprovedAbstractSet_2_classLit = createForClass('com.google.common.collect', 'Sets/ImprovedAbstractSet', 579, Ljava_util_AbstractSet_2_classLit);
defineClass(580, 579, $intern_5);
_.contains = function contains_1(o){
  var count, entry;
  if (instanceOf(o, 232)) {
    entry = o;
    if ($getCount(entry) <= 0) {
      return false;
    }
    count = $count(this.this$01, entry.val$mapEntry2.getKey());
    return count == $getCount(entry);
  }
  return false;
}
;
var Lcom_google_common_collect_Multisets$EntrySet_2_classLit = createForClass('com.google.common.collect', 'Multisets/EntrySet', 580, Lcom_google_common_collect_Sets$ImprovedAbstractSet_2_classLit);
function AbstractMultiset$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(450, 580, $intern_5, AbstractMultiset$EntrySet);
_.iterator = function iterator_2(){
  return $entryIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.backingMap.size_1();
}
;
var Lcom_google_common_collect_AbstractMultiset$EntrySet_2_classLit = createForClass('com.google.common.collect', 'AbstractMultiset/EntrySet', 450, Lcom_google_common_collect_Multisets$EntrySet_2_classLit);
function checkNonnegative(value_0){
  if (value_0 < 0) {
    throw new IllegalArgumentException_0('count cannot be negative but was: ' + value_0);
  }
  return value_0;
}

function $clinit_Collections2(){
  $clinit_Collections2 = emptyMethod;
  STANDARD_JOINER = (new Joiner).useForNull('null');
}

var STANDARD_JOINER;
function $getAndSet(this$static, newValue){
  var result;
  result = this$static.value_0;
  this$static.value_0 = newValue;
  return result;
}

function Count(value_0){
  this.value_0 = value_0;
}

defineClass(126, 1, {126:1, 3:1}, Count);
_.equals$ = function equals_6(obj){
  return instanceOf(obj, 126) && obj.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return this.value_0;
}
;
_.toString$ = function toString_10(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Lcom_google_common_collect_Count_2_classLit = createForClass('com.google.common.collect', 'Count', 126, Ljava_lang_Object_2_classLit);
defineClass(412, 1, {});
_.toString$ = function toString_11(){
  return toString_14($iterator(this.iterable));
}
;
var Lcom_google_common_collect_FluentIterable_2_classLit = createForClass('com.google.common.collect', 'FluentIterable', 412, Ljava_lang_Object_2_classLit);
function $clinit_ImmutableCollection(){
  $clinit_ImmutableCollection = emptyMethod;
  new ForwardingImmutableCollection(($clinit_Collections() , $clinit_Collections() , EMPTY_LIST));
}

function $createAsList(this$static){
  switch (this$static.size_1()) {
    case 0:
      return $clinit_ImmutableList() , $clinit_ImmutableList() , EMPTY;
    case 1:
      return $clinit_ImmutableList() , new SingletonImmutableList(this$static.iterator_0().next_0());
    default:return new RegularImmutableAsList_0(this$static, this$static.toArray());
  }
}

defineClass(54, 544, {54:1, 3:1});
_.add_0 = function add_0(e){
  throw new UnsupportedOperationException;
}
;
_.asList_0 = function asList(){
  var list;
  list = this.asList;
  return !list?(this.asList = $createAsList(this)):list;
}
;
_.contains = function contains_2(object){
  return object != null && $advanceToFind(this, object);
}
;
_.iterator = function iterator_3(){
  return this.iterator_0();
}
;
var Lcom_google_common_collect_ImmutableCollection_2_classLit = createForClass('com.google.common.collect', 'ImmutableCollection', 54, Ljava_util_AbstractCollection_2_classLit);
function ForwardingImmutableCollection(delegate){
  this.delegate = delegate;
}

defineClass(439, 54, {54:1, 3:1}, ForwardingImmutableCollection);
_.contains = function contains_3(object){
  return false;
}
;
_.iterator_0 = function iterator_4(){
  return unmodifiableIterator(($clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_1));
}
;
_.size_1 = function size_4(){
  return 0;
}
;
_.toArray = function toArray_1(){
  return $toArray(this.delegate);
}
;
_.toArray_0 = function toArray_2(other){
  return $toArray_0(this.delegate, other);
}
;
_.toString$ = function toString_12(){
  return $toString_2(this.delegate);
}
;
var Lcom_google_common_collect_ForwardingImmutableCollection_2_classLit = createForClass('com.google.common.collect', 'ForwardingImmutableCollection', 439, Lcom_google_common_collect_ImmutableCollection_2_classLit);
function $clinit_ImmutableList(){
  $clinit_ImmutableList = emptyMethod;
  $clinit_ImmutableCollection();
  EMPTY = new RegularImmutableList(($clinit_Collections() , $clinit_Collections() , EMPTY_LIST));
}

function $listIterator(this$static, index_0){
  return new ImmutableList$1(this$static, this$static.size_1(), index_0);
}

function copyFromCollection(collection){
  var elements, list;
  elements = collection.toArray();
  switch (elements.length) {
    case 0:
      return EMPTY;
    case 1:
      list = new SingletonImmutableList(elements[0]);
      return list;
    default:return new RegularImmutableList(nullCheckedList(elements));
  }
}

function copyOf(elements){
  $clinit_ImmutableList();
  var list;
  if (instanceOf(elements, 54)) {
    list = elements;
    return list.asList_0();
  }
  return copyFromCollection(elements);
}

function nullCheckedList(array){
  $clinit_ImmutableList();
  var i, len;
  for (i = 0 , len = array.length; i < len; i++) {
    if (array[i] == null) {
      throw new NullPointerException_0('at index ' + i);
    }
  }
  return new Arrays$ArrayList(array);
}

function unsafeDelegateList(list){
  switch (list.array.length) {
    case 0:
      return EMPTY;
    case 1:
      return new SingletonImmutableList($next_2(new AbstractList$IteratorImpl(list)));
    default:return new RegularImmutableList(list);
  }
}

defineClass(571, 54, $intern_6);
_.asList_0 = function asList_0(){
  return this;
}
;
_.equals$ = function equals_7(obj){
  return equalsImpl(this, obj);
}
;
_.hashCode$ = function hashCode_8(){
  return hashCodeImpl(this);
}
;
_.iterator_0 = function iterator_5(){
  return this.listIterator(0);
}
;
_.iterator = function iterator_6(){
  return this.iterator_0();
}
;
_.listIterator = function listIterator(index_0){
  return $listIterator(this, index_0);
}
;
var EMPTY;
var Lcom_google_common_collect_ImmutableList_2_classLit = createForClass('com.google.common.collect', 'ImmutableList', 571, Lcom_google_common_collect_ImmutableCollection_2_classLit);
function $get(this$static, index_0){
  return this$static.delegateList_0().get_1(index_0);
}

defineClass(576, 571, $intern_6);
_.contains = function contains_4(object){
  return object != null && this.delegateList_0().contains(object);
}
;
_.equals$ = function equals_8(obj){
  return this.delegateList_0().equals$(obj);
}
;
_.get_1 = function get_2(index_0){
  return $get(this, index_0);
}
;
_.hashCode$ = function hashCode_9(){
  return this.delegateList_0().hashCode$();
}
;
_.iterator_0 = function iterator_7(){
  return unmodifiableIterator(this.delegateList_0().iterator());
}
;
_.size_1 = function size_5(){
  return this.delegateList_0().size_1();
}
;
_.toArray = function toArray_3(){
  return this.delegateList_0().toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, this.delegateList_0().size_1(), 3, 1));
}
;
_.toArray_0 = function toArray_4(other){
  return this.delegateList_0().toArray_0(other);
}
;
_.toString$ = function toString_13(){
  return this.delegateList_0().toString$();
}
;
var Lcom_google_common_collect_ForwardingImmutableList_2_classLit = createForClass('com.google.common.collect', 'ForwardingImmutableList', 576, Lcom_google_common_collect_ImmutableList_2_classLit);
function HashMultiset(){
  AbstractMapBasedMultiset.call(this, new HashMap);
}

defineClass(446, 445, $intern_4, HashMultiset);
var Lcom_google_common_collect_HashMultiset_2_classLit = createForClass('com.google.common.collect', 'HashMultiset', 446, Lcom_google_common_collect_AbstractMapBasedMultiset_2_classLit);
defineClass(585, 571, $intern_6);
_.contains = function contains_5(target){
  return this.delegate.contains(target);
}
;
_.size_1 = function size_6(){
  return this.delegate.size_1();
}
;
var Lcom_google_common_collect_ImmutableAsList_2_classLit = createForClass('com.google.common.collect', 'ImmutableAsList', 585, Lcom_google_common_collect_ImmutableList_2_classLit);
defineClass(572, 1, {});
var Lcom_google_common_collect_ImmutableCollection$Builder_2_classLit = createForClass('com.google.common.collect', 'ImmutableCollection/Builder', 572, Ljava_lang_Object_2_classLit);
function $get_0(this$static, index_0){
  return this$static.this$01.get_1(index_0);
}

function ImmutableList$1(this$0, $anonymous0, $anonymous1){
  this.this$01 = this$0;
  checkPositionIndex($anonymous1, $anonymous0);
  this.size_0 = $anonymous0;
  this.position_0 = $anonymous1;
}

defineClass(411, 410, $intern_2, ImmutableList$1);
var Lcom_google_common_collect_ImmutableList$1_2_classLit = createForClass('com.google.common.collect', 'ImmutableList/1', 411, Lcom_google_common_collect_AbstractIndexedListIterator_2_classLit);
function $add_0(this$static, element){
  $add_4(this$static.contents, checkNotNull(element));
  return this$static;
}

function ImmutableList$Builder(){
  this.contents = new ArrayList;
}

defineClass(121, 572, {}, ImmutableList$Builder);
var Lcom_google_common_collect_ImmutableList$Builder_2_classLit = createForClass('com.google.common.collect', 'ImmutableList/Builder', 121, Lcom_google_common_collect_ImmutableCollection$Builder_2_classLit);
function filter_0(unfiltered, predicate){
  checkNotNull(unfiltered);
  checkNotNull(predicate);
  return new Iterables$6(unfiltered, predicate);
}

function $iterator(this$static){
  return filter_1(this$static.val$unfiltered1.iterator(), this$static.val$predicate2);
}

function Iterables$6(val$unfiltered, val$predicate){
  this.val$unfiltered1 = val$unfiltered;
  this.val$predicate2 = val$predicate;
  this.iterable = this;
}

defineClass(413, 412, {}, Iterables$6);
_.iterator = function iterator_8(){
  return $iterator(this);
}
;
var Lcom_google_common_collect_Iterables$6_2_classLit = createForClass('com.google.common.collect', 'Iterables/6', 413, Lcom_google_common_collect_FluentIterable_2_classLit);
function elementsEqual(iterator1, iterator2){
  var o1, o2;
  while (iterator1.hasNext()) {
    if (!iterator2.hasNext()) {
      return false;
    }
    o1 = iterator1.next_0();
    o2 = iterator2.next_0();
    if (!(maskUndefined(o1) === maskUndefined(o2) || o1 != null && equals_Ljava_lang_Object__Z__devirtual$(o1, o2))) {
      return false;
    }
  }
  return !iterator2.hasNext();
}

function filter_1(unfiltered, predicate){
  checkNotNull(unfiltered);
  checkNotNull(predicate);
  return new Iterators$7(unfiltered, predicate);
}

function toString_14(iterator){
  return $append_1($appendTo_0(($clinit_Collections2() , STANDARD_JOINER), $append_1(new StringBuilder, 91), iterator), 93).string;
}

function unmodifiableIterator(iterator){
  checkNotNull(iterator);
  if (instanceOf(iterator, 63)) {
    return iterator;
  }
  return new Iterators$3(iterator);
}

function Iterators$3(val$iterator){
  this.val$iterator1 = val$iterator;
}

defineClass(456, 63, $intern_2, Iterators$3);
_.hasNext = function hasNext_3(){
  return this.val$iterator1.hasNext();
}
;
_.next_0 = function next_4(){
  return this.val$iterator1.next_0();
}
;
var Lcom_google_common_collect_Iterators$3_2_classLit = createForClass('com.google.common.collect', 'Iterators/3', 456, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
function $computeNext(this$static){
  var element;
  while (this$static.val$unfiltered1.hasNext()) {
    element = this$static.val$unfiltered1.next_0();
    if ($apply(this$static.val$predicate2, element)) {
      return element;
    }
  }
  return this$static.state = 2 , null;
}

function Iterators$7(val$unfiltered, val$predicate){
  this.val$unfiltered1 = val$unfiltered;
  this.val$predicate2 = val$predicate;
}

defineClass(457, 452, $intern_2, Iterators$7);
var Lcom_google_common_collect_Iterators$7_2_classLit = createForClass('com.google.common.collect', 'Iterators/7', 457, Lcom_google_common_collect_AbstractIterator_2_classLit);
function equalsImpl(thisList, other){
  var i, otherList, size_0;
  if (maskUndefined(other) === maskUndefined(checkNotNull(thisList))) {
    return true;
  }
  if (!instanceOf(other, 23)) {
    return false;
  }
  otherList = other;
  size_0 = thisList.size_1();
  if (size_0 != otherList.size_1()) {
    return false;
  }
  if (instanceOf(otherList, 32)) {
    for (i = 0; i < size_0; i++) {
      if (!equal(thisList.get_1(i), otherList.get_1(i))) {
        return false;
      }
    }
    return true;
  }
   else {
    return elementsEqual(thisList.iterator_0(), otherList.iterator());
  }
}

function hashCodeImpl(list){
  var hashCode, o, o$iterator;
  hashCode = 1;
  for (o$iterator = list.iterator_0(); o$iterator.hasNext();) {
    o = o$iterator.next_0();
    hashCode = 31 * hashCode + (o == null?0:hashCode__I__devirtual$(o));
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function $clinit_Maps(){
  $clinit_Maps = emptyMethod;
  new Joiner$MapJoiner(($clinit_Collections2() , '='));
}

function safeGet(map_0, key){
  $clinit_Maps();
  checkNotNull(map_0);
  try {
    return map_0.get_2(key);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 58)) {
      return null;
    }
     else if (instanceOf($e0, 39)) {
      return null;
    }
     else 
      throw unwrap($e0);
  }
}

function equalsImpl_0(multiset, object){
  var entry, entry$iterator, that;
  if (object === multiset) {
    return true;
  }
  if (instanceOf(object, 231)) {
    that = object;
    if (saturatedCast(multiset.size_0) != saturatedCast(that.size_0) || $entrySet(multiset).size_1() != $entrySet(that).size_1()) {
      return false;
    }
    for (entry$iterator = $entrySet(that).iterator(); entry$iterator.hasNext();) {
      entry = entry$iterator.next_0();
      if ($count(multiset, entry.val$mapEntry2.getKey()) != $getCount(entry)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function sizeImpl(multiset){
  var entry, entry$iterator, size_0;
  size_0 = {l:0, m:0, h:0};
  for (entry$iterator = $entrySet(multiset).iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    size_0 = add_1(size_0, fromInt($getCount(entry)));
  }
  return saturatedCast(size_0);
}

function Multisets$MultisetIteratorImpl(multiset, entryIterator){
  this.multiset = multiset;
  this.entryIterator = entryIterator;
}

defineClass(451, 1, {}, Multisets$MultisetIteratorImpl);
_.hasNext = function hasNext_4(){
  return this.laterCount > 0 || this.entryIterator.hasNext();
}
;
_.next_0 = function next_5(){
  if (!(this.laterCount > 0 || this.entryIterator.hasNext())) {
    throw new NoSuchElementException;
  }
  if (this.laterCount == 0) {
    this.currentEntry = this.entryIterator.next_0();
    this.totalCount = this.laterCount = $getCount(this.currentEntry);
  }
  --this.laterCount;
  this.canRemove = true;
  return this.currentEntry.val$mapEntry2.getKey();
}
;
_.remove = function remove_3(){
  checkState_0(this.canRemove, 'no calls to next() since the last call to remove()');
  this.totalCount == 1?this.entryIterator.remove():$remove(this.multiset, this.currentEntry.val$mapEntry2.getKey()) > 0;
  --this.totalCount;
  this.canRemove = false;
}
;
_.canRemove = false;
_.laterCount = 0;
_.totalCount = 0;
var Lcom_google_common_collect_Multisets$MultisetIteratorImpl_2_classLit = createForClass('com.google.common.collect', 'Multisets/MultisetIteratorImpl', 451, Ljava_lang_Object_2_classLit);
function RegularImmutableAsList(delegate, delegateList){
  this.delegate = delegate;
  this.delegateList = delegateList;
}

function RegularImmutableAsList_0(delegate, array){
  $clinit_ImmutableList();
  RegularImmutableAsList.call(this, delegate, unsafeDelegateList(new Arrays$ArrayList(array)));
}

defineClass(216, 585, $intern_6, RegularImmutableAsList_0);
_.get_1 = function get_3(index_0){
  return $get(this.delegateList, index_0);
}
;
_.listIterator = function listIterator_0(index_0){
  return $listIterator(this.delegateList, index_0);
}
;
var Lcom_google_common_collect_RegularImmutableAsList_2_classLit = createForClass('com.google.common.collect', 'RegularImmutableAsList', 216, Lcom_google_common_collect_ImmutableAsList_2_classLit);
function RegularImmutableList(delegate){
  $clinit_ImmutableList();
  this.delegate = ($clinit_Collections() , instanceOf(delegate, 32)?new Collections$UnmodifiableRandomAccessList(delegate):new Collections$UnmodifiableList(delegate));
}

defineClass(105, 576, $intern_6, RegularImmutableList);
_.delegateList_0 = function delegateList_0(){
  return this.delegate;
}
;
var Lcom_google_common_collect_RegularImmutableList_2_classLit = createForClass('com.google.common.collect', 'RegularImmutableList', 105, Lcom_google_common_collect_ForwardingImmutableList_2_classLit);
function SingletonImmutableList(element){
  $clinit_ImmutableList();
  this.delegate = ($clinit_Collections() , new Collections$SingletonList(checkNotNull(element)));
}

defineClass(161, 576, $intern_6, SingletonImmutableList);
_.delegateList_0 = function delegateList_1(){
  return this.delegate;
}
;
var Lcom_google_common_collect_SingletonImmutableList_2_classLit = createForClass('com.google.common.collect', 'SingletonImmutableList', 161, Lcom_google_common_collect_ForwardingImmutableList_2_classLit);
function saturatedCast(value_0){
  if (gt(value_0, {l:$intern_3, m:511, h:0})) {
    return $intern_0;
  }
  if (lt(value_0, {l:0, m:4193792, h:$intern_7})) {
    return -2147483648;
  }
  return toInt(value_0);
}

function $addColorStop(this$static, offset, color_0){
  this$static.addColorStop(offset, color_0);
}

function $arcTo(this$static, x1, y1, x2, y2, radius){
  this$static.arcTo(x1, y1, x2, y2, radius);
}

function $clearRect(this$static, x_0, y_0, w, h){
  this$static.clearRect(x_0, y_0, w, h);
}

function $createLinearGradient(this$static, x0, y0, x1, y1){
  return this$static.createLinearGradient(x0, y0, x1, y1);
}

function $drawImage(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $fillText(this$static, text_0, x_0, y_0){
  this$static.fillText && this$static.fillText(text_0, x_0, y_0);
}

function $moveTo(this$static, x_0, y_0){
  this$static.moveTo(x_0, y_0);
}

function $restore(this$static){
  this$static.restore();
}

function $save(this$static){
  this$static.save();
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function $setFont(this$static, f){
  this$static.font = f;
}

function $setLineCap(this$static, lineCap){
  this$static.lineCap = lineCap;
}

function $setLineJoin(this$static, lineJoin){
  this$static.lineJoin = lineJoin;
}

function $setLineWidth(this$static, lineWidth){
  this$static.lineWidth = lineWidth;
}

function $setStrokeStyleWeb(this$static, strokeStyle){
  this$static.strokeStyle = strokeStyle;
}

function $setTextBaseline(this$static, baseline){
  this$static.textBaseline = baseline;
}

function $strokeText(this$static, text_0, x_0, y_0){
  this$static.strokeText(text_0, x_0, y_0);
}

function $clinit_Context2d$LineCap(){
  $clinit_Context2d$LineCap = emptyMethod;
  BUTT = new Context2d$LineCap('BUTT', 0, 'butt');
  ROUND = new Context2d$LineCap('ROUND', 1, 'round');
  SQUARE = new Context2d$LineCap('SQUARE', 2, 'square');
}

function Context2d$LineCap(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_1(){
  $clinit_Context2d$LineCap();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit, 1), $intern_1, 98, 0, [BUTT, ROUND, SQUARE]);
}

defineClass(98, 6, {98:1, 3:1, 7:1, 6:1}, Context2d$LineCap);
var BUTT, ROUND, SQUARE;
var Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/LineCap', 98, Ljava_lang_Enum_2_classLit, values_1);
function $clinit_Context2d$LineJoin(){
  $clinit_Context2d$LineJoin = emptyMethod;
  BEVEL = new Context2d$LineJoin('BEVEL', 0, 'bevel');
  MITER = new Context2d$LineJoin('MITER', 1, 'miter');
  ROUND_0 = new Context2d$LineJoin('ROUND', 2, 'round');
}

function Context2d$LineJoin(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_2(){
  $clinit_Context2d$LineJoin();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$LineJoin_2_classLit, 1), $intern_1, 99, 0, [BEVEL, MITER, ROUND_0]);
}

defineClass(99, 6, {99:1, 3:1, 7:1, 6:1}, Context2d$LineJoin);
var BEVEL, MITER, ROUND_0;
var Lcom_google_gwt_canvas_dom_client_Context2d$LineJoin_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/LineJoin', 99, Ljava_lang_Enum_2_classLit, values_2);
function $clinit_Context2d$TextBaseline(){
  $clinit_Context2d$TextBaseline = emptyMethod;
  ALPHABETIC = new Context2d$TextBaseline('ALPHABETIC', 0, 'alphabetic');
  BOTTOM = new Context2d$TextBaseline('BOTTOM', 1, 'bottom');
  HANGING = new Context2d$TextBaseline('HANGING', 2, 'hanging');
  IDEOGRAPHIC = new Context2d$TextBaseline('IDEOGRAPHIC', 3, 'ideographic');
  MIDDLE = new Context2d$TextBaseline('MIDDLE', 4, 'middle');
  TOP = new Context2d$TextBaseline('TOP', 5, 'top');
}

function Context2d$TextBaseline(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_3(){
  $clinit_Context2d$TextBaseline();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit, 1), $intern_1, 60, 0, [ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP]);
}

defineClass(60, 6, {60:1, 3:1, 7:1, 6:1}, Context2d$TextBaseline);
var ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP;
var Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/TextBaseline', 60, Ljava_lang_Enum_2_classLit, values_3);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $addSuppressed(this$static, exception){
  checkNotNull_1(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument_0(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = initValues(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $initCause(this$static, cause){
  checkState_2(!this$static.cause);
  checkCriticalArgument_0(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $toString_3(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

defineClass(10, 1, {3:1, 10:1});
_.fillInStackTrace = function fillInStackTrace(){
  this.stackTrace = null;
  captureStackTrace(this, this.detailMessage);
  return this;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.printStackTrace = function printStackTrace(out){
  var element$array, element$index, element$max, t, stackTrace;
  for (t = this; t; t = t.cause) {
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
    ;
  }
}
;
_.toString$ = function toString_15(){
  return $toString_3(this);
}
;
_.disableSuppression = false;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 10, Ljava_lang_Object_2_classLit);
defineClass(14, 10, {3:1, 14:1, 10:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 14, Ljava_lang_Throwable_2_classLit);
function RuntimeException(){
  this.fillInStackTrace();
}

function RuntimeException_0(message){
  this.detailMessage = message;
  this.fillInStackTrace();
}

function RuntimeException_1(cause){
  this.detailMessage = !cause?null:$toString_3(cause);
  this.cause = cause;
  this.fillInStackTrace();
}

defineClass(8, 14, $intern_8, RuntimeException, RuntimeException_0, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8, Ljava_lang_Exception_2_classLit);
defineClass(233, 8, $intern_8);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 233, Ljava_lang_RuntimeException_2_classLit);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.disableSuppression = !true;
  this.description = '';
  this.e = e;
  this.description = '';
}

defineClass(78, 233, {78:1, 3:1, 14:1, 8:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 78, Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $set(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(530, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 530, Ljava_lang_Object_2_classLit);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE_0));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (instanceOf($e0, 10)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE_0));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 78)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE_0 = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(406, 530, {}, SchedulerImpl);
var INSTANCE_0;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 406, Lcom_google_gwt_core_client_Scheduler_2_classLit);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_1(stackTrace.length, 5);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(541, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 541, Ljava_lang_Object_2_classLit);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(234, 541, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 71, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 234, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(542, 541, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 71, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 542, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(235, 542, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 235, Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
function checkArrayType(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException('' + errorMessage);
  }
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw new IllegalArgumentException;
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalArgument_1(expression, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format_1('%s > %s', errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull_0(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_1(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0('' + errorMessage);
  }
}

function checkPositionIndex_0(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState_1(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_2(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function format_1(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_7(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_6(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_7(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_6(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_6(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getSubPixelOffsetHeight(this$static){
  return this$static.offsetHeight || 0;
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getSubPixelScrollTop(this$static){
  return this$static.scrollTop || 0;
}

function $getContext2d(this$static){
  return this$static.getContext('2d');
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = getBoundingClientRect(elem);
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = getBoundingClientRect(elem);
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase('body', elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ($getSubPixelScrollLeft(elem) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function getBoundingClientRect(element){
  return element.getBoundingClientRect && element.getBoundingClientRect();
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$FontStyle(){
  $clinit_Style$FontStyle = emptyMethod;
  NORMAL = new Style$FontStyle$1;
  ITALIC = new Style$FontStyle$2;
  OBLIQUE = new Style$FontStyle$3;
}

function Style$FontStyle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$FontStyle();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, 1), $intern_1, 61, 0, [NORMAL, ITALIC, OBLIQUE]);
}

defineClass(61, 6, $intern_9);
var ITALIC, NORMAL, OBLIQUE;
var Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle', 61, Ljava_lang_Enum_2_classLit, values_4);
function Style$FontStyle$1(){
  Style$FontStyle.call(this, 'NORMAL', 0);
}

defineClass(369, 61, $intern_9, Style$FontStyle$1);
var Lcom_google_gwt_dom_client_Style$FontStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/1', 369, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null);
function Style$FontStyle$2(){
  Style$FontStyle.call(this, 'ITALIC', 1);
}

defineClass(370, 61, $intern_9, Style$FontStyle$2);
var Lcom_google_gwt_dom_client_Style$FontStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/2', 370, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null);
function Style$FontStyle$3(){
  Style$FontStyle.call(this, 'OBLIQUE', 2);
}

defineClass(371, 61, $intern_9, Style$FontStyle$3);
var Lcom_google_gwt_dom_client_Style$FontStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/3', 371, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null);
function $clinit_Style$FontWeight(){
  $clinit_Style$FontWeight = emptyMethod;
  NORMAL_0 = new Style$FontWeight$1;
  BOLD = new Style$FontWeight$2;
  BOLDER = new Style$FontWeight$3;
  LIGHTER = new Style$FontWeight$4;
}

function Style$FontWeight(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$FontWeight();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, 1), $intern_1, 48, 0, [NORMAL_0, BOLD, BOLDER, LIGHTER]);
}

defineClass(48, 6, $intern_10);
var BOLD, BOLDER, LIGHTER, NORMAL_0;
var Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight', 48, Ljava_lang_Enum_2_classLit, values_5);
function Style$FontWeight$1(){
  Style$FontWeight.call(this, 'NORMAL', 0);
}

defineClass(372, 48, $intern_10, Style$FontWeight$1);
var Lcom_google_gwt_dom_client_Style$FontWeight$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/1', 372, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function Style$FontWeight$2(){
  Style$FontWeight.call(this, 'BOLD', 1);
}

defineClass(373, 48, $intern_10, Style$FontWeight$2);
var Lcom_google_gwt_dom_client_Style$FontWeight$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/2', 373, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function Style$FontWeight$3(){
  Style$FontWeight.call(this, 'BOLDER', 2);
}

defineClass(374, 48, $intern_10, Style$FontWeight$3);
var Lcom_google_gwt_dom_client_Style$FontWeight$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/3', 374, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function Style$FontWeight$4(){
  Style$FontWeight.call(this, 'LIGHTER', 3);
}

defineClass(375, 48, $intern_10, Style$FontWeight$4);
var Lcom_google_gwt_dom_client_Style$FontWeight$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/4', 375, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 49, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(49, 6, $intern_11);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 49, Ljava_lang_Enum_2_classLit, values_6);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(376, 49, $intern_11, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 376, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(377, 49, $intern_11, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 377, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(378, 49, $intern_11, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 378, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(379, 49, $intern_11, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 379, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 50, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(50, 6, $intern_12);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 50, Ljava_lang_Enum_2_classLit, values_7);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(380, 50, $intern_12, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 380, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(381, 50, $intern_12, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 381, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(382, 50, $intern_12, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 382, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(383, 50, $intern_12, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 383, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 19, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(19, 6, $intern_13);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 19, Ljava_lang_Enum_2_classLit, values_8);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(360, 19, $intern_13, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 360, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(361, 19, $intern_13, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 361, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(362, 19, $intern_13, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 362, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(363, 19, $intern_13, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 363, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(364, 19, $intern_13, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 364, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(365, 19, $intern_13, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 365, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(366, 19, $intern_13, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 366, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(367, 19, $intern_13, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 367, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(368, 19, $intern_13, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 368, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 81, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(81, 6, $intern_14);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 81, Ljava_lang_Enum_2_classLit, values_9);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(384, 81, $intern_14, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 384, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(385, 81, $intern_14, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 385, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL_1 = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Style$WhiteSpace();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 35, 0, [NORMAL_1, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(35, 6, $intern_15);
var NORMAL_1, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 35, Ljava_lang_Enum_2_classLit, values_10);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(386, 35, $intern_15, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 386, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(387, 35, $intern_15, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 387, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(388, 35, $intern_15, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 388, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(389, 35, $intern_15, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 389, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(390, 35, $intern_15, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 390, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ($getSubPixelScrollTop(target) | 0) + $getScrollTop(target.ownerDocument);
}

function throwIfNull(value_0){
  if (null == value_0) {
    throw new NullPointerException_0('encodedURLComponent cannot be null');
  }
}

function clone(array){
  return cloneSubrange(array, array.length);
}

function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 78)) {
    jse = e;
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap_0(e){
  var jse;
  if (instanceOf(e, 10)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_3;
  a1 = value_0 >> 22 & $intern_3;
  a2 = value_0 < 0?$intern_7:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_16 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_16 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder_0 = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_16 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create_0(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder_0 = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder_0 = neg(a);
      aIsMinValue && (remainder_0 = sub_0(remainder_0, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder_0 = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_3);
  setM(a, sum1 & $intern_3);
  setH(a, sum2 & $intern_7);
  return true;
}

var remainder_0;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_3, m:sum1 & $intern_3, h:sum2 & $intern_7};
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_1, 595, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_7;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_3, m:res1 & $intern_3, h:res2 & $intern_7};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_16) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_7:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_7:0;
    res1 = negative?$intern_3:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_3, m:res1 & $intern_3, h:res2 & $intern_7};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_3, m:sum1 & $intern_3, h:sum2 & $intern_7};
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_16(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_16 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_16(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder_0);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_3, $intern_3, 524287);
  MIN_VALUE = create0(0, 0, $intern_16);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  var config, plat;
  $onModuleLoad();
  config = new HtmlPlatform$Config;
  plat = new HtmlPlatform(config);
  plat.assets.pathPrefix = 'ld37/';
  new MainGame(plat);
  $listenForVisibilityChange(plat);
  $requestAnimationFrame(new HtmlPlatform$2(plat));
}

function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $removeItem(this$static, key){
  $removeItem_0(this$static.storage, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(392, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 392, Ljava_lang_Object_2_classLit);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $removeItem_0(storage, key){
  $getItem_0(storage, key);
  $wnd[storage].removeItem(key);
}

function $setItem_0(storage, key, data_0){
  $getItem_0(storage, key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_2(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext();) {
    entry = iter.next_0();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove();
      }
      return entry;
    }
  }
  return null;
}

function $toString_4(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(543, 1, $intern_17);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals$ = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 133)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_2 = function get_4(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_25(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_0 = function remove_4(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_7(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_17(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_7(sb, $toString_4(this, entry.getKey()));
    sb.string += '=';
    $append_7(sb, $toString_4(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 543, Ljava_lang_Object_2_classLit);
function $get_1(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $getItem(this$static.storage, toString__Ljava_lang_String___devirtual$(key));
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw new NullPointerException;
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function $remove_0(this$static, key){
  var k, old;
  if (key == null) {
    throw new NullPointerException;
  }
  k = toString__Ljava_lang_String___devirtual$(key);
  old = $getItem(this$static.storage, k);
  $removeItem(this$static.storage, k);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(393, 543, $intern_17, StorageMap);
_.containsKey = function containsKey_0(key){
  return $get_1(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.get_2 = function get_5(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_0 = function remove_5(key){
  return $remove_0(this, key);
}
;
_.size_1 = function size_8(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap', 393, Ljava_util_AbstractMap_2_classLit);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(394, 1, $intern_18, StorageMap$StorageEntry);
_.equals$ = function equals_10(obj){
  var e;
  if (!instanceOf(obj, 53)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_1(this.this$01, this.key_0), e.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get_1(this.this$01, this.key_0);
}
;
_.hashCode$ = function hashCode_11(){
  return $hashCode(this.key_0) ^ $hashCode($get_1(this.this$01, this.key_0));
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntry', 394, Ljava_lang_Object_2_classLit);
function $next_0(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw new NoSuchElementException;
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(395, 1, {}, StorageMap$StorageEntryIterator);
_.hasNext = function hasNext_5(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.next_0 = function next_6(){
  return $next_0(this);
}
;
_.remove = function remove_6(){
  if (this.lastKey == null) {
    throw new IllegalStateException;
  }
  $removeItem(this.this$01.storage, this.lastKey);
  this.lastKey = null;
  --this.index_0;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntryIterator', 395, Ljava_lang_Object_2_classLit);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 53)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_1(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(396, 545, $intern_5, StorageMap$StorageEntrySet);
_.contains = function contains_6(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_9(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.size_1 = function size_9(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntrySet', 396, Ljava_util_AbstractSet_2_classLit);
function create_1(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function $set_0(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function create_3(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_5(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_6(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function alert_0(msg){
  $wnd.alert(msg);
}

function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (!instanceOf($e0, 78))
          throw unwrap($e0);
      }
      values = out.get_2(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_2(name_0);
  return !paramsForName?null:paramsForName.get_1(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  new HashMap;
  new HashSet;
}

function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $activeTexture(this$static, texture){
  this$static.activeTexture(texture);
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $clearColor(this$static, red, green, blue, alpha_0){
  this$static.clearColor(red, green, blue, alpha_0);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteBuffer(this$static, buffer){
  this$static.deleteBuffer(buffer);
}

function $deleteFramebuffer(this$static, framebuffer){
  this$static.deleteFramebuffer(framebuffer);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteRenderbuffer(this$static, renderbuffer){
  this$static.deleteRenderbuffer(renderbuffer);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $deleteTexture(this$static, texture){
  this$static.deleteTexture(texture);
}

function $disable(this$static, cap){
  this$static.disable(cap);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enable(this$static, cap){
  this$static.enable(cap);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $scissor(this$static, x_0, y_0, width_0, height){
  this$static.scissor(x_0, y_0, width_0, height);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function $closeOnHide(this$static, ac){
  $add_7(this$static._closeOnHide, ac);
}

defineClass(256, 1, {});
var Ltripleplay_game_ScreenStack$Screen_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Screen', 256, Ljava_lang_Object_2_classLit);
function ScreenStack$UIScreen(plat){
  this.layer = new GroupLayer;
  this.update = ($clinit_AbstractSignal() , new Signal);
  this.paint = new Signal;
  this._closeOnHide = new Closeable$Set;
  this.iface = new Interface(plat, this.paint);
}

defineClass(257, 256, {});
var Ltripleplay_game_ScreenStack$UIScreen_2_classLit = createForClass('tripleplay.game', 'ScreenStack/UIScreen', 257, Ltripleplay_game_ScreenStack$Screen_2_classLit);
function $createDialog(this$static, layout, stylesheet){
  return new DialogKeeper$Dialog(this$static.dialogKeeper, this$static, $createRoot(this$static.iface, layout, stylesheet, this$static.layer));
}

defineClass(325, 257, {});
var Lde_cdietze_playn_1util_Screen_2_classLit = createForClass('de.cdietze.playn_util', 'Screen', 325, Ltripleplay_game_ScreenStack$UIScreen_2_classLit);
function $clinit_BoardScreen(){
  $clinit_BoardScreen = emptyMethod;
  new Logger('screen');
}

function $createEntityLayer(this$static, entity){
  var dust, group, layer, vacuum;
  switch (entity.type_0.ordinal) {
    case 1:
      {
        vacuum = entity;
        layer = new ImageLayer_0(this$static.game.images.vacuum);
        $setDepth(layer, 3);
        $setOrigin_0((layer.forceWidth = 1 , layer.forceHeight = 1 , layer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(layer, ($clinit_Layer$Flag() , ODIRTY), true) , layer), CENTER_0);
        $connectNotify(vacuum.dir_0, new BoardScreen$8(layer));
        return new Present(checkNotNull(layer));
      }

    case 2:
      {
        dust = entity;
        group = new GroupLayer;
        $setDepth(group, 2);
        $connectNotify(dust.dustAmount, new BoardScreen$6(this$static, group));
        $connectNotify(this$static.state.explored.get_1(entity.fieldIndex._value.value_0), new UiUtils$1(group));
        return new Present(checkNotNull(group));
      }

    case 3:
      {
        layer = new ImageLayer_0(this$static.game.images.base);
        $setDepth(layer, 2);
        $setOrigin_0((layer.forceWidth = 1 , layer.forceHeight = 1 , layer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(layer, ($clinit_Layer$Flag() , ODIRTY), true) , layer), CENTER_0);
        $connectNotify(this$static.state.explored.get_1(entity.fieldIndex._value.value_0), new UiUtils$1(layer));
        return new Present(checkNotNull(layer));
      }

    case 4:
      {
        layer = new ImageLayer_0(this$static.game.images.cable);
        $setOrigin_0((layer.forceWidth = 1 , layer.forceHeight = 1 , layer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(layer, ($clinit_Layer$Flag() , ODIRTY), true) , layer), CENTER_0);
        $setDepth(layer, 1.5);
        $connectNotify(this$static.state.explored.get_1(entity.fieldIndex._value.value_0), new UiUtils$1(layer));
        return new Present(checkNotNull(layer));
      }

    case 5:
      {
        layer = new ImageLayer_0(this$static.game.images.lint);
        $setOrigin_0((layer.forceWidth = 1 , layer.forceHeight = 1 , layer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(layer, ($clinit_Layer$Flag() , ODIRTY), true) , layer), CENTER_0);
        $setDepth(layer, 1.7999999523162842);
        $connectNotify(this$static.state.explored.get_1(entity.fieldIndex._value.value_0), new UiUtils$1(layer));
        return new Present(checkNotNull(layer));
      }

    case 0:
      {
        layer = new ImageLayer_0(this$static.game.images.mouse);
        $setOrigin_0((layer.forceWidth = 1 , layer.forceHeight = 1 , layer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(layer, ($clinit_Layer$Flag() , ODIRTY), true) , layer), CENTER_0);
        $connectNotify(this$static.state.explored.get_1(null.nullMethod().nullField), new UiUtils$1(layer));
        null.nullMethod(new BoardScreen$8(layer));
        return new Present(checkNotNull(layer));
      }

  }
  return $clinit_Absent() , $clinit_Absent() , INSTANCE;
}

function $createFieldGroupLayer(this$static){
  var fieldCount, fieldIndex, fieldLayer, group, x_0, y_0, layer, isOdd;
  group = new GroupLayer;
  fieldCount = this$static.dim.width_0 * this$static.dim.height_0;
  for (fieldIndex = 0; fieldIndex < fieldCount; ++fieldIndex) {
    fieldLayer = (layer = new ImageLayer_0(this$static.game.images.parquet) , $setOrigin_0((layer.forceWidth = 1 , layer.forceHeight = 1 , layer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(layer, ($clinit_Layer$Flag() , ODIRTY), true) , layer), CENTER_0) , isOdd = (toX(this$static.dim, fieldIndex) + toY(this$static.dim, fieldIndex)) % 2 == 0 , isOdd && $setRotation(layer, $intern_19) , $connectNotify(this$static.state.explored.get_1(fieldIndex), new BoardScreen$3(layer)) , $addConnection((!layer.events && (layer.events = new Layer$1(layer)) , layer.events), new BoardScreen$4(this$static, fieldIndex)) , layer);
    x_0 = toX(this$static.dim, fieldIndex);
    y_0 = toY(this$static.dim, fieldIndex);
    $add_6(group, ($setTranslation_0(fieldLayer.transform, x_0, y_0) , fieldLayer));
  }
  return group;
}

function $wasAdded(this$static){
  var batteryLayer, dustLayer, group, height, offsetX, offsetY, root, squareSize, wallsLayer, width_0, group_0, group_1, random;
  root = $createRoot(this$static.iface, new BorderLayout, $create($add_15(newSheetBuilder(this$static.plat.graphics), Ltripleplay_ui_Element_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , FONT), new Font(24))])))), this$static.layer);
  width_0 = this$static.plat.graphics.viewSize.width_0;
  height = this$static.plat.graphics.viewSize.height_0;
  $setSize_4(root, width_0, height);
  squareSize = min_0(this$static.plat.graphics.viewSize.width_0, this$static.plat.graphics.viewSize.height_0);
  offsetX = (this$static.plat.graphics.viewSize.width_0 - squareSize) * 0.5;
  offsetY = (this$static.plat.graphics.viewSize.height_0 - squareSize) * 0.5;
  group = new GroupLayer;
  $setSize_1(group, 1, 1);
  $setScale_0(group, squareSize, squareSize);
  wallsLayer = new ImageLayer_0(this$static.game.images.walls);
  $setScale_0(wallsLayer, 9.765625E-4, 9.765625E-4);
  $setOrigin_0(wallsLayer, ($clinit_Layer$Origin() , CENTER_0));
  $addAt(group, wallsLayer, group.width_0 * 0.5, group.height_0 * 0.5);
  batteryLayer = (group_0 = new GroupLayer , $connectNotify(this$static.state.battery, new BoardScreen$2(this$static, group_0)) , group_0);
  $setDepth(batteryLayer, 8);
  $add_6(group, ($setTranslation_0(batteryLayer.transform, 0.3100000023841858, 0.8600000143051147) , batteryLayer));
  dustLayer = (group_1 = new GroupLayer , random = new Random , $connectNotify(this$static.state.dustRemaining, new BoardScreen$1(this$static, group_1, random)) , group_1);
  $setDepth(dustLayer, 10);
  $add_6(group, ($setTranslation_0(dustLayer.transform, 0.27000001072883606, 0.9399999976158142) , dustLayer));
  $addAt(group, this$static.boardLayer, group.width_0 * 0.5, group.height_0 * 0.5);
  $setDepth(this$static.boardLayer, 5);
  $setScale(this$static.boardLayer, 0.08886718526537157);
  $addAt(root.layer, group, offsetX, offsetY);
  $connectNotify(this$static.state.dustRemaining, new BoardScreen$9(this$static));
}

function BoardScreen(game, state){
  var group;
  $clinit_BoardScreen();
  ScreenStack$UIScreen.call(this, game.plat);
  this.updateAnim = new Animator;
  this.game_0 = game;
  this.plat = game.plat;
  this.dialogKeeper = new DialogKeeper(this);
  $addConnection(this.update, this.updateAnim.onPaint);
  this.entityLayerMap = new HashMap;
  this.game = game;
  this.state = state;
  this.dim = state.dim;
  this.boardLayer = new GroupLayer;
  $setOrigin_0($setSize_1(this.boardLayer, this.dim.width_0, this.dim.height_0), ($clinit_Layer$Origin() , CENTER_0));
  $addAt(this.boardLayer, $setDepth($createFieldGroupLayer(this), 1), 0.5, 0.5);
  $addAt(this.boardLayer, $setDepth((group = new GroupLayer , $connectNotify_0(this.state.entities, new BoardScreen$5(this, group)) , group), 2), 0.5, 0.5);
}

defineClass(187, 325, {}, BoardScreen);
var Lde_cdietze_ld37_core_BoardScreen_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen', 187, Lde_cdietze_playn_1util_Screen_2_classLit);
defineClass(547, 1, {});
_.onChange = function onChange(value_0, oldValue){
  this.onEmit(value_0);
}
;
var Lreact_Slot_2_classLit = createForClass('react', 'Slot', 547, Ljava_lang_Object_2_classLit);
function $onEmit(this$static, dustRemaining){
  var i, layer;
  while (this$static.val$group2.children.array.length > dustRemaining.value_0)
    $childAt(this$static.val$group2, this$static.val$group2.children.array.length - 1).close_0();
  while (this$static.val$group2.children.array.length < dustRemaining.value_0) {
    layer = new ImageLayer_0($get(this$static.this$01.game.images.fluffList, $nextInt(this$static.val$random3, this$static.this$01.game.images.fluffList.delegate.size_1())));
    $setSize_0(layer, $intern_20, $intern_20);
    $add_6(this$static.val$group2, layer);
  }
  for (i = 0; i < this$static.val$group2.children.array.length; ++i) {
    $setTx($childAt(this$static.val$group2, i), 0.015000000596046448 * i);
    $setTy($childAt(this$static.val$group2, i), i % 2 * -0.009999999776482582);
  }
}

function BoardScreen$1(this$0, val$group, val$random){
  this.this$01 = this$0;
  this.val$group2 = val$group;
  this.val$random3 = val$random;
}

defineClass(326, 547, {}, BoardScreen$1);
_.onEmit = function onEmit(dustRemaining){
  $onEmit(this, dustRemaining);
}
;
var Lde_cdietze_ld37_core_BoardScreen$1_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/1', 326, Lreact_Slot_2_classLit);
function $onEmit_0(this$static, dustRemaining){
  var i, layer;
  while (this$static.val$group2.children.array.length > dustRemaining.value_0)
    $childAt(this$static.val$group2, this$static.val$group2.children.array.length - 1).close_0();
  while (this$static.val$group2.children.array.length < dustRemaining.value_0) {
    layer = new ImageLayer_0(this$static.this$01.game.images.battery);
    $setScale_0(layer, $intern_21, $intern_21);
    $add_6(this$static.val$group2, layer);
  }
  for (i = 0; i < this$static.val$group2.children.array.length; ++i) {
    $setTx($childAt(this$static.val$group2, i), 0.029999999329447746 * i);
  }
}

function BoardScreen$2(this$0, val$group){
  this.this$01 = this$0;
  this.val$group2 = val$group;
}

defineClass(327, 547, {}, BoardScreen$2);
_.onEmit = function onEmit_0(dustRemaining){
  $onEmit_0(this, dustRemaining);
}
;
var Lde_cdietze_ld37_core_BoardScreen$2_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/2', 327, Lreact_Slot_2_classLit);
function BoardScreen$3(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(328, 547, {}, BoardScreen$3);
_.onEmit = function onEmit_1(explored){
  $setTint(this.val$layer2, explored.value_0?-1:-934260656);
}
;
var Lde_cdietze_ld37_core_BoardScreen$3_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/3', 328, Lreact_Slot_2_classLit);
defineClass(557, 547, {});
_.onCancel = function onCancel(iact){
}
;
_.onDrag = function onDrag(iact){
}
;
_.onEmit = function onEmit_2(event_0){
  var iact;
  if (instanceOf(event_0, 144)) {
    iact = event_0;
    switch (iact.event_0.kind.ordinal) {
      case 0:
        this.onStart(iact);
        break;
      case 1:
        this.onDrag(iact);
        break;
      case 2:
        this.onEnd(iact);
        break;
      case 3:
        this.onCancel(iact);
    }
  }
}
;
_.onEnd = function onEnd(iact){
}
;
_.onStart = function onStart(iact){
}
;
var Lplayn_scene_Pointer$Listener_2_classLit = createForClass('playn.scene', 'Pointer/Listener', 557, Lreact_Slot_2_classLit);
function BoardScreen$4(this$0, val$fieldIndex){
  this.this$01 = this$0;
  this.val$fieldIndex2 = val$fieldIndex;
}

defineClass(329, 557, {}, BoardScreen$4);
_.onStart = function onStart_0(iact){
  $tryMoveVacuum(this.this$01.state, this.val$fieldIndex2);
}
;
_.val$fieldIndex2 = 0;
var Lde_cdietze_ld37_core_BoardScreen$4_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/4', 329, Lplayn_scene_Pointer$Listener_2_classLit);
defineClass(558, 1, {});
_.onAdd = function onAdd(elem){
}
;
_.onRemove = function onRemove(elem){
}
;
var Lreact_RList$Listener_2_classLit = createForClass('react', 'RList/Listener', 558, Ljava_lang_Object_2_classLit);
function $onAdd(this$static, entity){
  var layer;
  layer = $createEntityLayer(this$static.this$01, entity);
  if (!layer.isPresent())
    return;
  $add_6(this$static.val$group2, layer.get_0());
  $connectNotify(entity.fieldIndex, new BoardScreen$7(this$static.this$01, layer.get_0()));
  $put_4(this$static.this$01.entityLayerMap, entity, layer.get_0());
}

function BoardScreen$5(this$0, val$group){
  this.this$01 = this$0;
  this.val$group2 = val$group;
}

defineClass(330, 558, {}, BoardScreen$5);
_.onAdd = function onAdd_0(entity){
  $onAdd(this, entity);
}
;
_.onRemove = function onRemove_0(entity){
  var layer;
  layer = $remove_1(this.this$01.entityLayerMap, entity);
  !!layer && layer.close_0();
}
;
var Lde_cdietze_ld37_core_BoardScreen$5_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/5', 330, Lreact_RList$Listener_2_classLit);
function $onEmit_1(this$static, newDustAmount){
  var layer;
  $removeAll(this$static.val$group2);
  if (newDustAmount.value_0 == 0)
    return;
  layer = new ImageLayer_0($get(this$static.this$01.game.images.dustList, newDustAmount.value_0 - 1));
  $setOrigin_0($setSize_0(layer, 1, 1), ($clinit_Layer$Origin() , CENTER_0));
  $add_6(this$static.val$group2, layer);
}

function BoardScreen$6(this$0, val$group){
  this.this$01 = this$0;
  this.val$group2 = val$group;
}

defineClass(331, 547, {}, BoardScreen$6);
_.onEmit = function onEmit_3(newDustAmount){
  $onEmit_1(this, newDustAmount);
}
;
var Lde_cdietze_ld37_core_BoardScreen$6_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/6', 331, Lreact_Slot_2_classLit);
function BoardScreen$7(this$0, val$layer){
  this.this$01 = this$0;
  this.val$layer2 = val$layer;
}

defineClass(332, 547, {}, BoardScreen$7);
_.onEmit = function onEmit_4(fieldIndex){
  var x_0, y_0;
  x_0 = toX(this.this$01.dim, fieldIndex.value_0);
  y_0 = toY(this.this$01.dim, fieldIndex.value_0);
  $setTranslation(this.val$layer2, x_0, y_0);
}
;
var Lde_cdietze_ld37_core_BoardScreen$7_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/7', 332, Lreact_Slot_2_classLit);
function BoardScreen$8(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(188, 547, {}, BoardScreen$8);
_.onEmit = function onEmit_5(dir_0){
  $setRotation(this.val$layer2, dir_0.angle());
}
;
var Lde_cdietze_ld37_core_BoardScreen$8_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/8', 188, Lreact_Slot_2_classLit);
function $onEmit_2(this$static, dustRemaining){
  var group;
  if (dustRemaining.value_0 > 0)
    return;
  group = createDialogGroup(this$static.this$01.plat);
  $add_12(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 21, 0, [new Label('Nice and clean again!')]));
  $add_12(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 21, 0, [new Label('You needed ' + this$static.this$01.state.moveCount._value + ' moves.')]));
  $add_12(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 21, 0, [$onClick(new Button, new BoardScreen$9$1(this$static))]));
  $display($slideTopDown($useShade($add_2($createDialog(this$static.this$01, ($clinit_AxisLayout() , new AxisLayout$Vertical), $create($add_15(newSheetBuilder(this$static.this$01.plat.graphics), Ltripleplay_ui_Element_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , FONT), new Font(24))]))))), group))));
}

function BoardScreen$9(this$0){
  this.this$01 = this$0;
}

defineClass(333, 547, {}, BoardScreen$9);
_.onEmit = function onEmit_6(dustRemaining){
  $onEmit_2(this, dustRemaining);
}
;
var Lde_cdietze_ld37_core_BoardScreen$9_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/9', 333, Lreact_Slot_2_classLit);
function $onEmit_3(this$static){
  var boardState, level;
  level = ($clinit_LevelGenerator() , (new LevelGenerator(new Dimension_2)).level);
  boardState = new BoardState(level);
  $replace(this$static.this$11.this$01.game.screens, new BoardScreen(this$static.this$11.this$01.game, boardState));
}

function BoardScreen$9$1(this$1){
  this.this$11 = this$1;
}

defineClass(334, 547, {}, BoardScreen$9$1);
_.onEmit = function onEmit_7(event_0){
  $onEmit_3(this, event_0);
}
;
var Lde_cdietze_ld37_core_BoardScreen$9$1_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardScreen/9/1', 334, Lreact_Slot_2_classLit);
function $clinit_BoardState(){
  $clinit_BoardState = emptyMethod;
  new Logger('state');
}

function $cleanupLint(this$static){
  var lint, lint$iterator, lintIndexes;
  lintIndexes = $getLintIndexes(this$static);
  for (lint$iterator = $iterator(filter_0(copyOf(this$static.entities), new BoardState$1(($clinit_Entity$Type() , LINT)))); $hasNext(lint$iterator);) {
    lint = $next(lint$iterator);
    $get_8(lintIndexes, lint.fieldIndex._value.value_0) || $remove_9(this$static.entities, lint);
  }
}

function $createCables(this$static){
  var base, base$iterator, builder, i, indexes;
  builder = ($clinit_ImmutableList() , new ImmutableList$Builder);
  indexes = new BitSet;
  for (base$iterator = $iterator(filter_0(this$static.entities, new BoardState$1(($clinit_Entity$Type() , BASE)))); $hasNext(base$iterator);) {
    base = $next(base$iterator);
    $set_2(indexes, base.fieldIndex._value.value_0);
    $or(indexes, neighbors(this$static.dim, base.fieldIndex._value.value_0, new BitSet));
  }
  for (i = $nextSetBit(indexes, 0); i >= 0; i = $nextSetBit(indexes, i + 1)) {
    $add_0(builder, new Entity_0(CABLE, i));
  }
  return copyOf(builder.contents);
}

function $createLint(this$static){
  var builder, i, indexes;
  indexes = $getLintIndexes(this$static);
  builder = ($clinit_ImmutableList() , new ImmutableList$Builder);
  for (i = $nextSetBit(indexes, 0); i >= 0; i = $nextSetBit(indexes, i + 1)) {
    $add_0(builder, new Entity_0(($clinit_Entity$Type() , LINT), i));
  }
  return copyOf(builder.contents);
}

function $explore(this$static, fieldIndex){
  this$static.explored.get_1(fieldIndex).updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , TRUE), false);
}

function $getEntityAt(this$static, index_0, type_0){
  var entity, entity$iterator;
  for (entity$iterator = $listIterator_0(this$static.entities); entity$iterator.val$iiter2.hasNext();) {
    entity = entity$iterator._current = entity$iterator.val$iiter2.next_0();
    if (entity.type_0 == type_0 && entity.fieldIndex._value.value_0 == index_0)
      return new Present(checkNotNull(entity));
  }
  return $clinit_Absent() , $clinit_Absent() , INSTANCE;
}

function $getLintIndexes(this$static){
  var dust, dust$iterator, indexes;
  indexes = new BitSet;
  for (dust$iterator = $iterator(filter_0(this$static.entities, new BoardState$1(($clinit_Entity$Type() , DUST)))); $hasNext(dust$iterator);) {
    dust = $next(dust$iterator);
    $set_2(indexes, dust.fieldIndex._value.value_0);
    $or(indexes, neighbors(this$static.dim, dust.fieldIndex._value.value_0, new BitSet));
  }
  return indexes;
}

function $tryMoveVacuum(this$static, target){
  var base;
  if (!(this$static.battery._value.value_0 > 0 && isNeighbor(this$static.dim, this$static.vacuum.fieldIndex._value.value_0, target) || this$static.battery._value.value_0 > 0 && target == this$static.vacuum.fieldIndex._value.value_0 && $getEntityAt(this$static, target, ($clinit_Entity$Type() , DUST)).isPresent() || this$static.explored.get_1(target)._value.value_0 && $getEntityAt(this$static, target, ($clinit_Entity$Type() , BASE)).isPresent()))
    return false;
  $updateAndNotify(this$static.vacuum.fieldIndex, valueOf(target), false);
  $increment(this$static.moveCount, 1);
  this$static.explored.get_1(target).updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , TRUE), false);
  $tryToCollectDust(this$static);
  $decrementClamp(this$static.battery);
  base = $getEntityAt(this$static, this$static.vacuum.fieldIndex._value.value_0, ($clinit_Entity$Type() , BASE));
  base.isPresent() && $updateAndNotify(this$static.battery, valueOf(10), false);
  return false;
}

function $tryToCollectDust(this$static){
  var dust, entity;
  entity = $getEntityAt(this$static, this$static.vacuum.fieldIndex._value.value_0, ($clinit_Entity$Type() , DUST));
  if (!entity.isPresent())
    return;
  dust = entity.get_0();
  $decrementClamp(dust.dustAmount);
  dust.dustAmount._value.value_0 == 0 && $remove_9(this$static.entities, dust);
  $cleanupLint(this$static);
}

function BoardState(level){
  $clinit_BoardState();
  var baseIndex, baseIndex$iterator, entry, entry$iterator;
  this.entities = ($clinit_RList() , $clinit_RList() , new RList(new ArrayList));
  this.dustRemaining = new IntValue(0);
  this.battery = new IntValue(10);
  this.moveCount = new IntValue(0);
  this.dim = level.dim;
  this.vacuum = new Entities$Vacuum(level.vacuumIndex, ($clinit_Direction() , UP));
  $add_9(this.entities, this.vacuum);
  for (baseIndex$iterator = new AbstractList$IteratorImpl(level.baseIndexes); baseIndex$iterator.i < baseIndex$iterator.this$01.size_1();) {
    baseIndex = (checkCriticalElement(baseIndex$iterator.i < baseIndex$iterator.this$01.size_1()) , baseIndex$iterator.this$01.get_1(baseIndex$iterator.last = baseIndex$iterator.i++));
    $add_9(this.entities, createBase(baseIndex.value_0));
  }
  for (entry$iterator = $entrySet(level.dustAmount).iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    $add_9(this.entities, new Entities$Dust(entry.val$mapEntry2.getKey().value_0, $getCount(entry), this.dustRemaining));
  }
  $addAll_2(this.entities, $createCables(this));
  $addAll_2(this.entities, $createLint(this));
  this.explored = buildExplored(this.dim);
  $explore(this, this.vacuum.fieldIndex._value.value_0);
}

function buildExplored(dim){
  var builder, fieldCount, i;
  fieldCount = dim.width_0 * dim.height_0;
  builder = ($clinit_ImmutableList() , new ImmutableList$Builder);
  for (i = 0; i < fieldCount; i++) {
    $add_0(builder, ($clinit_AbstractValue() , new Value(($clinit_Boolean() , $clinit_Boolean() , FALSE))));
  }
  return copyOf(builder.contents);
}

defineClass(185, 1, {}, BoardState);
var Lde_cdietze_ld37_core_BoardState_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardState', 185, Ljava_lang_Object_2_classLit);
function $apply(this$static, entity){
  return entity.type_0 == this$static.val$type1;
}

function BoardState$1(val$type){
  this.val$type1 = val$type;
}

defineClass(143, 1, {}, BoardState$1);
var Lde_cdietze_ld37_core_BoardState$1_2_classLit = createForClass('de.cdietze.ld37.core', 'BoardState/1', 143, Ljava_lang_Object_2_classLit);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  UP = new Direction$1;
  DOWN = new Direction$2;
  LEFT = new Direction$3;
  RIGHT = new Direction$4;
}

function Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_Direction();
  return initValues(getClassLiteralForArray(Lde_cdietze_ld37_core_Direction_2_classLit, 1), $intern_1, 51, 0, [UP, DOWN, LEFT, RIGHT]);
}

defineClass(51, 6, $intern_22);
var DOWN, LEFT, RIGHT, UP;
var Lde_cdietze_ld37_core_Direction_2_classLit = createForEnum('de.cdietze.ld37.core', 'Direction', 51, Ljava_lang_Enum_2_classLit, values_11);
function Direction$1(){
  Direction.call(this, 'UP', 0);
  new Point_1(0, -1);
}

defineClass(402, 51, $intern_22, Direction$1);
_.angle = function angle_0(){
  return 0;
}
;
var Lde_cdietze_ld37_core_Direction$1_2_classLit = createForEnum('de.cdietze.ld37.core', 'Direction/1', 402, Lde_cdietze_ld37_core_Direction_2_classLit, null);
function Direction$2(){
  Direction.call(this, 'DOWN', 1);
  new Point_1(0, 1);
}

defineClass(403, 51, $intern_22, Direction$2);
_.angle = function angle_1(){
  return 3.1415927410125732;
}
;
var Lde_cdietze_ld37_core_Direction$2_2_classLit = createForEnum('de.cdietze.ld37.core', 'Direction/2', 403, Lde_cdietze_ld37_core_Direction_2_classLit, null);
function Direction$3(){
  Direction.call(this, 'LEFT', 2);
  new Point_1(-1, 0);
}

defineClass(404, 51, $intern_22, Direction$3);
_.angle = function angle_2(){
  return 4.71238899230957;
}
;
var Lde_cdietze_ld37_core_Direction$3_2_classLit = createForEnum('de.cdietze.ld37.core', 'Direction/3', 404, Lde_cdietze_ld37_core_Direction_2_classLit, null);
function Direction$4(){
  Direction.call(this, 'RIGHT', 3);
  new Point_1(1, 0);
}

defineClass(405, 51, $intern_22, Direction$4);
_.angle = function angle_3(){
  return $intern_19;
}
;
var Lde_cdietze_ld37_core_Direction$4_2_classLit = createForEnum('de.cdietze.ld37.core', 'Direction/4', 405, Lde_cdietze_ld37_core_Direction_2_classLit, null);
function createBase(initialFieldIndex){
  return new Entity_0(($clinit_Entity$Type() , BASE), initialFieldIndex);
}

function Entity_0(type_0, initialFieldIndex){
  this.type_0 = type_0;
  this.fieldIndex = new IntValue(initialFieldIndex);
}

defineClass(100, 1, {}, Entity_0);
_.toString$ = function toString_18(){
  return $toString_1($addHolder($addHolder(new MoreObjects$ToStringHelper($getSimpleName(this.___clazz$)), 'type', this.type_0), 'fieldIndex', this.fieldIndex));
}
;
var Lde_cdietze_ld37_core_Entity_2_classLit = createForClass('de.cdietze.ld37.core', 'Entity', 100, Ljava_lang_Object_2_classLit);
function Entities$Dust(initialFieldIndex, amount, dustRemaining){
  Entity_0.call(this, ($clinit_Entity$Type() , DUST), initialFieldIndex);
  this.dustAmount = new IntValue(amount);
  $connectNotify(this.dustAmount, new Entities$Dust$1(dustRemaining));
}

defineClass(400, 100, {}, Entities$Dust);
var Lde_cdietze_ld37_core_Entities$Dust_2_classLit = createForClass('de.cdietze.ld37.core', 'Entities/Dust', 400, Lde_cdietze_ld37_core_Entity_2_classLit);
function Entities$Dust$1(val$dustRemaining){
  this.val$dustRemaining2 = val$dustRemaining;
}

defineClass(401, 1, {}, Entities$Dust$1);
_.onChange = function onChange_0(value_0, oldValue){
  var change;
  change = value_0.value_0 - (oldValue?oldValue.value_0:0);
  $increment(this.val$dustRemaining2, change);
}
;
var Lde_cdietze_ld37_core_Entities$Dust$1_2_classLit = createForClass('de.cdietze.ld37.core', 'Entities/Dust/1', 401, Ljava_lang_Object_2_classLit);
function Entities$Vacuum(initialFieldIndex, initialDirection){
  Entity_0.call(this, ($clinit_Entity$Type() , VACUUM), initialFieldIndex);
  this.dir_0 = ($clinit_AbstractValue() , new Value(initialDirection));
}

defineClass(399, 100, {}, Entities$Vacuum);
var Lde_cdietze_ld37_core_Entities$Vacuum_2_classLit = createForClass('de.cdietze.ld37.core', 'Entities/Vacuum', 399, Lde_cdietze_ld37_core_Entity_2_classLit);
function $clinit_Entity$Type(){
  $clinit_Entity$Type = emptyMethod;
  MOUSE = new Entity$Type('MOUSE', 0);
  VACUUM = new Entity$Type('VACUUM', 1);
  DUST = new Entity$Type('DUST', 2);
  BASE = new Entity$Type('BASE', 3);
  CABLE = new Entity$Type('CABLE', 4);
  LINT = new Entity$Type('LINT', 5);
}

function Entity$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_Entity$Type();
  return initValues(getClassLiteralForArray(Lde_cdietze_ld37_core_Entity$Type_2_classLit, 1), $intern_1, 62, 0, [MOUSE, VACUUM, DUST, BASE, CABLE, LINT]);
}

defineClass(62, 6, {62:1, 3:1, 7:1, 6:1}, Entity$Type);
var BASE, CABLE, DUST, LINT, MOUSE, VACUUM;
var Lde_cdietze_ld37_core_Entity$Type_2_classLit = createForEnum('de.cdietze.ld37.core', 'Entity/Type', 62, Ljava_lang_Enum_2_classLit, values_12);
function ImageLoader(plat){
  this.plat = plat;
}

defineClass(313, 1, {}, ImageLoader);
var Lde_cdietze_ld37_core_ImageLoader_2_classLit = createForClass('de.cdietze.ld37.core', 'ImageLoader', 313, Ljava_lang_Object_2_classLit);
function ImageLoader$Images(this$0){
  this.this$01 = this$0;
  this.vacuum = $getImage(this.this$01.plat.assets, 'images/vacuum.png');
  this.parquet = $getImage(this.this$01.plat.assets, 'images/parquet.png');
  this.base = $getImage(this.this$01.plat.assets, 'images/base.png');
  this.mouse = $getImage(this.this$01.plat.assets, 'images/mouse.png');
  this.cable = $getImage(this.this$01.plat.assets, 'images/cable.png');
  this.lint = $getImage(this.this$01.plat.assets, 'images/lint.png');
  this.walls = $getImage(this.this$01.plat.assets, 'images/walls.png');
  this.battery = $getImage(this.this$01.plat.assets, 'images/battery.png');
  this.dustList = ($clinit_ImmutableList() , new RegularImmutableList(nullCheckedList(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [$getImage(this.this$01.plat.assets, 'images/dust1.png'), $getImage(this.this$01.plat.assets, 'images/dust2.png'), $getImage(this.this$01.plat.assets, 'images/dust3.png'), $getImage(this.this$01.plat.assets, 'images/dust4.png')]))));
  this.fluffList = new RegularImmutableList(nullCheckedList(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [$getImage(this.this$01.plat.assets, 'images/fluff1.png'), $getImage(this.this$01.plat.assets, 'images/fluff2.png'), $getImage(this.this$01.plat.assets, 'images/fluff3.png'), $getImage(this.this$01.plat.assets, 'images/fluff4.png')])));
}

defineClass(314, 1, {}, ImageLoader$Images);
var Lde_cdietze_ld37_core_ImageLoader$Images_2_classLit = createForClass('de.cdietze.ld37.core', 'ImageLoader/Images', 314, Ljava_lang_Object_2_classLit);
function $clinit_LevelGenerator(){
  $clinit_LevelGenerator = emptyMethod;
  random_0 = new Random;
}

function $addAdditionalBases(this$static){
  var candidateIndex, candidateIndex$iterator, dist, edge, existingBaseIndex, existingBaseIndex$iterator, maxDist, minDist;
  edge = sqrt_0(this$static.dim.width_0 * this$static.dim.height_0);
  minDist = round_int(Math.ceil(edge * 0.5));
  maxDist = round_int(Math.floor(edge * 1.5));
  canidateLoop: for (candidateIndex$iterator = new AbstractList$IteratorImpl(shuffledRange(this$static.dim.width_0 * this$static.dim.height_0, random_0)); candidateIndex$iterator.i < candidateIndex$iterator.this$01.size_1();) {
    candidateIndex = (checkCriticalElement(candidateIndex$iterator.i < candidateIndex$iterator.this$01.size_1()) , candidateIndex$iterator.this$01.get_1(candidateIndex$iterator.last = candidateIndex$iterator.i++)).value_0;
    if (this$static.level.baseIndexes.array.length >= 3)
      return;
    for (existingBaseIndex$iterator = new AbstractList$IteratorImpl(this$static.level.baseIndexes); existingBaseIndex$iterator.i < existingBaseIndex$iterator.this$01.size_1();) {
      existingBaseIndex = (checkCriticalElement(existingBaseIndex$iterator.i < existingBaseIndex$iterator.this$01.size_1()) , existingBaseIndex$iterator.this$01.get_1(existingBaseIndex$iterator.last = existingBaseIndex$iterator.i++)).value_0;
      dist = orthogonalDistance(this$static.dim, candidateIndex, existingBaseIndex);
      if (dist < minDist || dist > maxDist)
        continue canidateLoop;
    }
    $add_4(this$static.level.baseIndexes, valueOf(candidateIndex));
  }
}

function $addDust(this$static){
  var candidateIndex, candidateIndex$iterator, minDustAmount, neighbor, neighbor$iterator;
  minDustAmount = round_int(0.5 * this$static.dim.width_0 * this$static.dim.height_0);
  for (candidateIndex$iterator = new AbstractList$IteratorImpl(shuffledRange(this$static.dim.width_0 * this$static.dim.height_0, random_0)); candidateIndex$iterator.i < candidateIndex$iterator.this$01.size_1();) {
    candidateIndex = (checkCriticalElement(candidateIndex$iterator.i < candidateIndex$iterator.this$01.size_1()) , candidateIndex$iterator.this$01.get_1(candidateIndex$iterator.last = candidateIndex$iterator.i++));
    if (saturatedCast(this$static.level.dustAmount.size_0) >= minDustAmount)
      return;
    if ($indexOf_1(this$static.level.baseIndexes, candidateIndex, 0) != -1)
      continue;
    $setCount(this$static.level.dustAmount, candidateIndex, 4);
    for (neighbor$iterator = neighborsList(this$static.dim, candidateIndex.value_0).iterator_0(); neighbor$iterator.hasNext();) {
      neighbor = neighbor$iterator.next_0().value_0;
      $setCount(this$static.level.dustAmount, valueOf(neighbor), max_1(2, $count(this$static.level.dustAmount, valueOf(neighbor))));
    }
  }
}

function LevelGenerator(dim){
  $clinit_LevelGenerator();
  this.dim = dim;
  this.level = new LevelGenerator$Level(dim);
  $add_4(this.level.baseIndexes, valueOf(this.level.vacuumIndex));
  $addAdditionalBases(this);
  $addDust(this);
}

defineClass(184, 1, {}, LevelGenerator);
var random_0;
var Lde_cdietze_ld37_core_LevelGenerator_2_classLit = createForClass('de.cdietze.ld37.core', 'LevelGenerator', 184, Ljava_lang_Object_2_classLit);
function LevelGenerator$Level(dim){
  this.baseIndexes = new ArrayList;
  this.dustAmount = new HashMultiset;
  this.dim = dim;
  this.vacuumIndex = toIndex_0(dim, dim.height_0 - 1);
  $add(this.dustAmount, valueOf(48));
}

defineClass(312, 1, {}, LevelGenerator$Level);
_.toString$ = function toString_19(){
  return $toString_1($addHolder($addHolder($addHolder($addHolder(new MoreObjects$ToStringHelper(($ensureNamesAreInitialized(Lde_cdietze_ld37_core_LevelGenerator$Level_2_classLit) , Lde_cdietze_ld37_core_LevelGenerator$Level_2_classLit.simpleName)), 'dim', this.dim), 'vacuumIndex', '' + this.vacuumIndex), 'baseIndexes', this.baseIndexes), 'dustAmount', this.dustAmount));
}
;
_.vacuumIndex = 0;
var Lde_cdietze_ld37_core_LevelGenerator$Level_2_classLit = createForClass('de.cdietze.ld37.core', 'LevelGenerator/Level', 312, Ljava_lang_Object_2_classLit);
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    this$static.updateClock.dt = updateDt;
    $update(this$static, this$static.updateClock);
  }
  paintTick = $tick(this$static.plat);
  this$static.paintClock.dt = paintTick - this$static.paintClock.tick;
  this$static.paintClock.tick = paintTick;
  1 - (nextUpdate - paintTick) / this$static.updateRate;
  $notifyEmit(this$static.paint, this$static.paintClock);
}

function $update(this$static, clock){
  $notifyEmit(this$static.update, clock);
}

defineClass(246, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass('playn.core', 'Game', 246, Ljava_lang_Object_2_classLit);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    if (maxVecs = usableMaxUniformVectors(gl) , maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (!instanceOf($e0, 14))
      throw unwrap($e0);
  }
  return new TriangleBatch(gl);
}

function $paintScene(this$static){
  $saveTx(this$static.viewSurf);
  $begin_0(this$static.viewSurf);
  $clear_0(this$static.viewSurf, this$static.cred, this$static.cgreen, this$static.cblue, this$static.calpha);
  try {
    $paint(this$static.rootLayer, this$static.viewSurf);
  }
   finally {
    $end_0(this$static.viewSurf);
    $restoreTx(this$static.viewSurf);
  }
}

defineClass(247, 246, {});
_.calpha = 0;
_.cblue = 0;
_.cgreen = 0;
_.cred = 0;
var Lplayn_scene_SceneGame_2_classLit = createForClass('playn.scene', 'SceneGame', 247, Lplayn_core_Game_2_classLit);
function MainGame(plat){
  var bgLayer, boardState, level, gl;
  this.update = ($clinit_AbstractSignal() , new Signal);
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  $disable(gl.glc, 2884);
  $enable(gl.glc, 3042);
  gl.glc.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  this.rootLayer = new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
  this.screens = new MainGame$1(this, this.rootLayer);
  this.images = new ImageLoader$Images(new ImageLoader(plat));
  bgLayer = new Layers$2($screenSize(plat.graphics).width_0, $screenSize(plat.graphics).height_0);
  $add_6(this.rootLayer, bgLayer);
  new Pointer(plat, this.rootLayer);
  level = ($clinit_LevelGenerator() , (new LevelGenerator(new Dimension_2)).level);
  boardState = new BoardState(level);
  $push_1(this.screens, new BoardScreen(this, boardState));
}

defineClass(248, 247, {}, MainGame);
var Lde_cdietze_ld37_core_MainGame_2_classLit = createForClass('de.cdietze.ld37.core', 'MainGame', 248, Lplayn_scene_SceneGame_2_classLit);
function $clinit_ScreenStack(){
  $clinit_ScreenStack = emptyMethod;
  NOOP = new ScreenStack$1;
}

function $add_1(this$static, screen_0){
  var e;
  if ($indexOf_1(this$static._screens, screen_0, 0) != -1) {
    throw new IllegalArgumentException_0('Cannot add screen to stack twice.');
  }
  $add_3(this$static._screens, 0, screen_0);
  try {
    $wasAdded(screen_0);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_1), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [e]));
    }
     else 
      throw unwrap($e0);
  }
}

function $addAndShow(this$static, screen_0){
  $add_1(this$static, screen_0);
  $justShow(this$static, screen_0);
}

function $hide(this$static, screen_0){
  var e;
  $remove_8(this$static._rootLayer, screen_0.layer);
  try {
    $close_5(screen_0._closeOnHide);
    $clear_2(screen_0.iface.anim);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_1), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [e]));
    }
     else 
      throw unwrap($e0);
  }
}

function $justShow(this$static, screen_0){
  var e;
  $add_6(this$static._rootLayer, $setTranslation(screen_0.layer, this$static.originX, this$static.originY));
  try {
    $closeOnHide(screen_0, $addConnection(screen_0.game_0.update, new Signal$1(screen_0.update)));
    $closeOnHide(screen_0, $addConnection(screen_0.game_0.paint, new Signal$1(screen_0.paint)));
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_1), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [e]));
    }
     else 
      throw unwrap($e0);
  }
}

function $push_1(this$static, screen_0){
  $push_2(this$static, screen_0, $dir(new SlideTransition(this$static)));
}

function $push_2(this$static, screen_0, trans){
  var otop;
  if (this$static._screens.array.length == 0) {
    $add_1(this$static, screen_0);
    $justShow(this$static, screen_0);
  }
   else {
    otop = this$static._screens.array.length == 0?null:$get_7(this$static._screens, 0);
    $transition(this$static, new ScreenStack$2(this$static, this$static, otop, screen_0, trans, otop));
  }
}

function $replace(this$static, screen_0){
  $replace_0(this$static, screen_0, $dir(new SlideTransition(this$static)));
}

function $replace_0(this$static, screen_0, trans){
  var otop;
  if (this$static._screens.array.length == 0) {
    $add_1(this$static, screen_0);
    $justShow(this$static, screen_0);
  }
   else {
    otop = this$static._screens.remove_1(0);
    $transition(this$static, new ScreenStack$4(this$static, this$static, otop, screen_0, trans, otop));
  }
}

function $transition(this$static, transitor){
  !!this$static._transitor && $complete(this$static._transitor);
  this$static._transitor = transitor;
  $init_0(this$static._transitor);
}

defineClass(249, 1, {});
_.originX = 0;
_.originY = 0;
var NOOP;
var Ltripleplay_game_ScreenStack_2_classLit = createForClass('tripleplay.game', 'ScreenStack', 249, Ljava_lang_Object_2_classLit);
function MainGame$1($anonymous0, $anonymous1){
  $clinit_ScreenStack();
  this._screens = new ArrayList;
  this._game = $anonymous0;
  this._rootLayer = $anonymous1;
}

defineClass(250, 249, {}, MainGame$1);
var Lde_cdietze_ld37_core_MainGame$1_2_classLit = createForClass('de.cdietze.ld37.core', 'MainGame/1', 250, Ltripleplay_game_ScreenStack_2_classLit);
function shuffle(list, random){
  var index_0;
  for (index_0 = 0; index_0 < list.array.length; index_0 += 1) {
    $clinit_Collections();
    swapImpl(list, index_0, index_0 + $nextInt(random, list.array.length - index_0));
  }
}

function shuffledRange(size_0, random){
  var i, list;
  list = new ArrayList_0(size_0);
  for (i = 0; i < size_0; ++i)
    $add_4(list, valueOf(i));
  shuffle(list, random);
  return list;
}

function isNeighbor(dim, a, b){
  var aX, aY, bX, bY, offX, offY;
  aX = a % dim.width_0;
  aY = ~~(a / dim.width_0);
  bX = b % dim.width_0;
  bY = ~~(b / dim.width_0);
  offX = aX - bX < 0?-(aX - bX):aX - bX;
  offY = aY - bY < 0?-(aY - bY):aY - bY;
  return offX == 0 && offY == 1 || offX == 1 && offY == 0;
}

function neighbors(dim, index_0, result){
  var x_0, y_0;
  x_0 = index_0 % dim.width_0;
  y_0 = ~~(index_0 / dim.width_0);
  x_0 > 0 && $set_2(result, x_0 - 1 + y_0 * dim.width_0);
  y_0 > 0 && $set_2(result, x_0 + (y_0 - 1) * dim.width_0);
  x_0 < dim.width_0 - 1 && $set_2(result, x_0 + 1 + y_0 * dim.width_0);
  y_0 < dim.height_0 - 1 && $set_2(result, x_0 + (y_0 + 1) * dim.width_0);
  return result;
}

function neighborsList(dim, index_0){
  var builder, x_0, y_0;
  x_0 = index_0 % dim.width_0;
  y_0 = ~~(index_0 / dim.width_0);
  builder = ($clinit_ImmutableList() , new ImmutableList$Builder);
  x_0 > 0 && $add_0(builder, valueOf(x_0 - 1 + y_0 * dim.width_0));
  y_0 > 0 && $add_0(builder, valueOf(x_0 + (y_0 - 1) * dim.width_0));
  x_0 < dim.width_0 - 1 && $add_0(builder, valueOf(x_0 + 1 + y_0 * dim.width_0));
  y_0 < dim.height_0 - 1 && $add_0(builder, valueOf(x_0 + (y_0 + 1) * dim.width_0));
  return copyOf(builder.contents);
}

function orthogonalDistance(dim, a, b){
  return abs_1(a % dim.width_0 - b % dim.width_0) + abs_1(~~(a / dim.width_0) - ~~(b / dim.width_0));
}

function toIndex_0(dim, y_0){
  return y_0 * dim.width_0;
}

function toX(dim, index_0){
  return index_0 % dim.width_0;
}

function toY(dim, index_0){
  return ~~(index_0 / dim.width_0);
}

function createDialogGroup(plat){
  return $setStyles_0(new Group(($clinit_AxisLayout() , new AxisLayout$Vertical)), initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , BACKGROUND), $inset(new RoundRectBackground(plat.graphics, -1844529, -10329502), 20))]));
}

function UiUtils$1(val$layer){
  this.val$layer1 = val$layer;
}

defineClass(108, 547, {}, UiUtils$1);
_.onEmit = function onEmit_8(event_0){
  $setVisible(this.val$layer1, event_0.value_0);
}
;
var Lde_cdietze_ld37_core_UiUtils$1_2_classLit = createForClass('de.cdietze.ld37.core', 'UiUtils/1', 108, Lreact_Slot_2_classLit);
function DialogKeeper(screen_0){
  this.dialogs = new ArrayList;
  this.screen_0 = screen_0;
}

defineClass(415, 1, {}, DialogKeeper);
_.dialogDepth = 100;
var Lde_cdietze_playn_1util_DialogKeeper_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper', 415, Ljava_lang_Object_2_classLit);
function $add_2(this$static, element){
  $add_12(this$static.root, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 21, 0, [element]));
  return this$static;
}

function $display(this$static){
  return $display_0(this$static, this$static.screen_0.game_0.plat.graphics.viewSize.width_0 - 20);
}

function $display_0(this$static, packWidth){
  var height;
  checkState_0(!this$static._showing._value.value_0, 'Dialog is already displayed.');
  $setDepth(this$static.root.layer, this$static.this$01.dialogDepth);
  $pack(this$static.root, packWidth);
  $add_4(this$static.this$01.dialogs, this$static);
  $add_10($then($add_10($then(this$static._anim.show(this$static.screen_0, this$static.root, this$static._duration, (height = this$static.root._size.height_0 , (this$static.screen_0.game_0.plat.graphics.viewSize.height_0 - height) / 2))), new Animation$Delay(this$static._duration))), new Animation$Action(new AnimBuilder$16(this$static.shown, ($clinit_Boolean() , $clinit_Boolean() , TRUE))));
  !!this$static._shade && $in($to($from($add_10($then($add_11(this$static.screen_0.iface.anim, new Animation$Action(new AnimBuilder$4(this$static.screen_0.layer, this$static._shade)))), new Animation$One(new DialogKeeper$ShaderLayer$1(this$static._shade)))), 0.375), this$static._duration);
  this$static.this$01.dialogDepth += 2;
  this$static._showing.updateAndNotify((null , TRUE), false);
  return this$static;
}

function $slideTopDown(this$static){
  this$static._anim = ($clinit_DialogKeeper$DialogAnim() , SLIDE_TOP_DOWN);
  return this$static;
}

function $useShade(this$static){
  checkState_0(!this$static._shade, 'Already called useShade on this dialog.');
  this$static._shade = new DialogKeeper$ShaderLayer(this$static.this$01);
  $setHitTester(this$static._shade, new DialogKeeper$Dialog$2(this$static));
  $setInteractive(this$static._shade, true);
  $setDepth(this$static._shade, this$static.this$01.dialogDepth - 1);
  return this$static;
}

function DialogKeeper$Dialog(this$0, screen_0, root){
  this.this$01 = this$0;
  this.shown = ($clinit_AbstractSignal() , new Signal);
  this._showing = ($clinit_AbstractValue() , new Value(($clinit_Boolean() , $clinit_Boolean() , FALSE)));
  this._anim = ($clinit_DialogKeeper$DialogAnim() , GROW_SHRINK);
  this.screen_0 = screen_0;
  this.root = root;
}

defineClass(416, 1, $intern_23, DialogKeeper$Dialog);
_.close_0 = function close_0(){
  if ($disposeRoot(this.screen_0.iface, this.root)) {
    this.this$01.dialogDepth -= 2;
    !!this._shade && $close(this._shade);
  }
}
;
_._duration = 500;
var Lde_cdietze_playn_1util_DialogKeeper$Dialog_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/Dialog', 416, Ljava_lang_Object_2_classLit);
function DialogKeeper$Dialog$2(this$1){
  this.this$11 = this$1;
}

defineClass(418, 1, {}, DialogKeeper$Dialog$2);
_.hitTest = function hitTest(layer, p){
  return this.this$11._shade;
}
;
var Lde_cdietze_playn_1util_DialogKeeper$Dialog$2_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/Dialog/2', 418, Ljava_lang_Object_2_classLit);
function $clinit_DialogKeeper$DialogAnim(){
  $clinit_DialogKeeper$DialogAnim = emptyMethod;
  NONE = new DialogKeeper$DialogAnim$1;
  SLIDE_LEFT_RIGHT = new DialogKeeper$DialogAnim$2;
  SLIDE_TOP_DOWN = new DialogKeeper$DialogAnim$3;
  FADE_INOUT = new DialogKeeper$DialogAnim$4;
  GROW_SHRINK = new DialogKeeper$DialogAnim$5;
}

function DialogKeeper$DialogAnim(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_DialogKeeper$DialogAnim();
  return initValues(getClassLiteralForArray(Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, 1), $intern_1, 36, 0, [NONE, SLIDE_LEFT_RIGHT, SLIDE_TOP_DOWN, FADE_INOUT, GROW_SHRINK]);
}

defineClass(36, 6, $intern_24);
var FADE_INOUT, GROW_SHRINK, NONE, SLIDE_LEFT_RIGHT, SLIDE_TOP_DOWN;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim', 36, Ljava_lang_Enum_2_classLit, values_13);
function DialogKeeper$DialogAnim$1(){
  DialogKeeper$DialogAnim.call(this, 'NONE', 0);
}

defineClass(419, 36, $intern_24, DialogKeeper$DialogAnim$1);
_.show = function show(screen_0, root, duration, y_0){
  $setTranslation(root.layer, (screen_0.game_0.plat.graphics.viewSize.width_0 - root._size.width_0) / 2, y_0);
  return $add_11(screen_0.iface.anim, new Animation$Delay(0));
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$1_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/1', 419, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$2(){
  DialogKeeper$DialogAnim.call(this, 'SLIDE_LEFT_RIGHT', 1);
}

defineClass(420, 36, $intern_24, DialogKeeper$DialogAnim$2);
_.show = function show_0(screen_0, root, duration, y_0){
  var dwidth, tx;
  dwidth = root._size.width_0;
  tx = (screen_0.game_0.plat.graphics.viewSize.width_0 - dwidth) / 2;
  $setTranslation(root.layer, -dwidth, y_0);
  return $in($to($using($add_11(screen_0.iface.anim, new Animation$One(new AnimBuilder$19(root.layer))), ($clinit_Interpolator() , EASE_IN)), tx), duration);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$2_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/2', 420, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$3(){
  DialogKeeper$DialogAnim.call(this, 'SLIDE_TOP_DOWN', 2);
}

defineClass(421, 36, $intern_24, DialogKeeper$DialogAnim$3);
_.show = function show_1(screen_0, root, duration, y_0){
  var dheight;
  dheight = root._size.height_0;
  $setTranslation(root.layer, (screen_0.game_0.plat.graphics.viewSize.width_0 - root._size.width_0) / 2, -dheight);
  return $in($to($using($add_11(screen_0.iface.anim, new Animation$One(new AnimBuilder$20(root.layer))), ($clinit_Interpolator() , EASE_OUT)), y_0), duration);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$3_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/3', 421, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$4(){
  DialogKeeper$DialogAnim.call(this, 'FADE_INOUT', 3);
}

defineClass(422, 36, $intern_24, DialogKeeper$DialogAnim$4);
_.show = function show_2(screen_0, root, duration, y_0){
  $setTranslation(root.layer, (screen_0.game_0.plat.graphics.viewSize.width_0 - root._size.width_0) / 2, y_0);
  $setAlpha(root.layer, 0);
  return $in($to($using($add_11(screen_0.iface.anim, new Animation$One(new AnimBuilder$3(root.layer))), ($clinit_Interpolator() , EASE_IN)), 1), duration);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$4_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/4', 422, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$5(){
  DialogKeeper$DialogAnim.call(this, 'GROW_SHRINK', 4);
}

defineClass(423, 36, $intern_24, DialogKeeper$DialogAnim$5);
_.show = function show_3(screen_0, root, duration, y_0){
  var dsize;
  dsize = root._size;
  $setOrigin(root.layer, dsize.width_0 / 2, dsize.height_0 / 2);
  $setTranslation(root.layer, screen_0.game_0.plat.graphics.viewSize.width_0 / 2, y_0 + dsize.height_0 / 2);
  $setScale(root.layer, 0.009999999776482582);
  return $add_10($then($in($to($using($add_11(screen_0.iface.anim, new Animation$One(new AnimBuilder$2(root.layer))), ($clinit_Interpolator() , EASE_INOUT)), 1), duration)), new Animation$Action(new DialogKeeper$DialogAnim$5$1(root, screen_0, dsize, y_0)));
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$5_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/5', 423, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$5$1(val$root, val$screen, val$dsize, val$y){
  this.val$root2 = val$root;
  this.val$screen3 = val$screen;
  this.val$dsize4 = val$dsize;
  this.val$y5 = val$y;
}

defineClass(424, 1, {}, DialogKeeper$DialogAnim$5$1);
_.run = function run_1(){
  $setOrigin(this.val$root2.layer, 0, 0);
  $setTranslation(this.val$root2.layer, (this.val$screen3.game_0.plat.graphics.viewSize.width_0 - this.val$dsize4.width_0) / 2, this.val$y5);
}
;
_.val$y5 = 0;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$5$1_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/5/1', 424, Ljava_lang_Object_2_classLit);
function $close(this$static){
  !!this$static.parent_0 && $remove_8(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
}

function $events(this$static){
  !this$static.events && (this$static.events = new Layer$1(this$static));
  return this$static.events;
}

function $isSet(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $onAdd_0(this$static){
  if (maskUndefined(this$static.state._value) === maskUndefined(($clinit_Layer$State() , DISPOSED)))
    throw new IllegalStateException_0('Illegal to use disposed layer: ' + this$static);
  $setState(this$static, ADDED);
}

function $originX(this$static){
  var width_0;
  if ($isSet(this$static, ($clinit_Layer$Flag() , ODIRTY))) {
    width_0 = this$static.width_1();
    if (width_0 > 0) {
      this$static.originX = this$static.origin.ox(width_0);
      this$static.originY = this$static.origin.oy(this$static.height_1());
      $setFlag(this$static, ODIRTY, false);
    }
  }
  return this$static.originX;
}

function $originY(this$static){
  var height;
  if ($isSet(this$static, ($clinit_Layer$Flag() , ODIRTY))) {
    height = this$static.height_1();
    if (height > 0) {
      this$static.originX = this$static.origin.ox(this$static.width_1());
      this$static.originY = this$static.origin.oy(height);
      $setFlag(this$static, ODIRTY, false);
    }
  }
  return this$static.originY;
}

function $paint(this$static, surf){
  var otint;
  if (!$isSet(this$static, ($clinit_Layer$Flag() , VISIBLE_1)))
    return;
  otint = $combineTint(surf, this$static.tint);
  $concatenate(surf, $transform(this$static), $originX(this$static), $originY(this$static));
  try {
    this$static.paintImpl(surf);
  }
   finally {
    surf.tint = otint;
  }
}

function $setAlpha(this$static, alpha_0){
  var ialpha;
  this$static.alpha_1 = alpha_0;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  this$static.tint = ialpha << 24 | this$static.tint & $intern_25;
  return this$static;
}

function $setDepth(this$static, depth){
  var oldDepth;
  oldDepth = this$static.depth;
  if (depth != oldDepth) {
    this$static.depth = depth;
    !!this$static.parent_0 && $depthChanged(this$static.parent_0, this$static, oldDepth);
  }
  return this$static;
}

function $setFlag(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setHitTester(this$static, tester){
  this$static.hitTester = tester;
  return this$static;
}

function $setInteractive(this$static, interactive){
  if ($isSet(this$static, ($clinit_Layer$Flag() , INTERACTIVE)) != interactive) {
    interactive && !!this$static.parent_0 && $setInteractive(this$static.parent_0, true);
    $setFlag(this$static, INTERACTIVE, interactive);
  }
  return this$static;
}

function $setOrigin(this$static, x_0, y_0){
  this$static.originX = x_0;
  this$static.originY = y_0;
  this$static.origin = ($clinit_Layer$Origin() , FIXED_0);
  $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), false);
  return this$static;
}

function $setOrigin_0(this$static, origin){
  this$static.origin = origin;
  $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function $setRotation(this$static, angle){
  if (this$static.rotation != angle) {
    this$static.rotation = angle;
    $setFlag(this$static, ($clinit_Layer$Flag() , XFDIRTY), true);
  }
  return this$static;
}

function $setScale(this$static, scale){
  return $setScale_0(this$static, scale, scale);
}

function $setScale_0(this$static, sx, sy){
  if (sx != this$static.scaleX || sy != this$static.scaleY) {
    this$static.scaleX = sx;
    this$static.scaleY = sy;
    $setFlag(this$static, ($clinit_Layer$Flag() , XFDIRTY), true);
  }
  return this$static;
}

function $setState(this$static, state){
  this$static.state.updateAndNotify(state, false);
}

function $setTint(this$static, tint){
  this$static.tint = tint;
  this$static.alpha_1 = (tint >> 24 & 255) / 255;
  return this$static;
}

function $setTranslation(this$static, x_0, y_0){
  $setTranslation_0(this$static.transform, x_0, y_0);
  return this$static;
}

function $setTx(this$static, x_0){
  $setTx_0(this$static.transform, x_0);
  return this$static;
}

function $setTy(this$static, y_0){
  $setTy_0(this$static.transform, y_0);
  return this$static;
}

function $setVisible(this$static, visible){
  $setFlag(this$static, ($clinit_Layer$Flag() , VISIBLE_1), visible);
  return this$static;
}

function $transform(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = sin_0(this$static.rotation);
    cosa = cos_0(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleY;
    m10 = -sina * this$static.scaleX;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

function Layer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  this.origin = ($clinit_Layer$Origin() , FIXED_0);
  $setFlag(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
}

defineClass(17, 1, $intern_26);
_.close_0 = function close_1(){
  $close(this);
}
;
_.deactivateOnNoListeners = function deactivateOnNoListeners(){
  return true;
}
;
_.height_1 = function height_0(){
  return 0;
}
;
_.hitTestDefault = function hitTestDefault(p){
  return p.x_0 >= 0 && p.y_0 >= 0 && p.x_0 < this.width_1() && p.y_0 < this.height_1()?this:null;
}
;
_.name_1 = function name_2(){
  if (this.name_0 == null) {
    this.name_0 = $getName(this.___clazz$);
    this.name_0 = $substring(this.name_0, this.name_0.lastIndexOf('.') + 1);
  }
  return this.name_0;
}
;
_.onAdd_0 = function onAdd_1(){
  $onAdd_0(this);
}
;
_.onRemove_0 = function onRemove_1(){
  $setState(this, ($clinit_Layer$State() , REMOVED));
}
;
_.toString$ = function toString_20(){
  var buf;
  buf = new StringBuilder_1(this.name_1());
  $append_7($append_4((buf.string += ' @ ' , buf), getHashCode(this)), ' [');
  this.toString_1(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_1 = function toString_21(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
  !!this.hitTester && $append_6((buf.string += ', hitTester=' , buf), this.hitTester);
}
;
_.width_1 = function width_1(){
  return 0;
}
;
_.alpha_1 = 1;
_.depth = 0;
_.flags = 0;
_.originX = 0;
_.originY = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
_.tint = -1;
var Lplayn_scene_Layer_2_classLit = createForClass('playn.scene', 'Layer', 17, Ljava_lang_Object_2_classLit);
function DialogKeeper$ShaderLayer(this$0){
  this.this$01 = this$0;
  Layer.call(this);
  this.alpha_0 = 0;
}

defineClass(417, 17, $intern_26, DialogKeeper$ShaderLayer);
_.paintImpl = function paintImpl(surf){
  $setAlpha_0(surf, this.alpha_0);
  $fillRect_0((surf.fillColor = $intern_27 , surf), 0, 0, this.this$01.screen_0.game_0.plat.graphics.viewSize.width_0, this.this$01.screen_0.game_0.plat.graphics.viewSize.height_0);
}
;
_.alpha_0 = 0;
var Lde_cdietze_playn_1util_DialogKeeper$ShaderLayer_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/ShaderLayer', 417, Lplayn_scene_Layer_2_classLit);
function DialogKeeper$ShaderLayer$1(this$1){
  this.this$11 = this$1;
}

defineClass(425, 1, {}, DialogKeeper$ShaderLayer$1);
_.initial = function initial(){
  return this.this$11.alpha_0;
}
;
_.set_0 = function set_1(value_0){
  this.this$11.alpha_0 = value_0;
}
;
var Lde_cdietze_playn_1util_DialogKeeper$ShaderLayer$1_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/ShaderLayer/1', 425, Ljava_lang_Object_2_classLit);
defineClass(565, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 565, Ljava_lang_Object_2_classLit);
defineClass(566, 565, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 566, Ljava_io_OutputStream_2_classLit);
function PrintStream(){
}

defineClass(407, 566, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 407, Ljava_io_FilterOutputStream_2_classLit);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = $substring_0(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_2(initDim(C_classLit, {592:1, 3:1}, 0, newLength - oldLength, 7, 1)));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(116, 1, {});
_.toString$ = function toString_22(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 116, Ljava_lang_Object_2_classLit);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(238, 8, $intern_8, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 238, Ljava_lang_RuntimeException_2_classLit);
function ArrayStoreException(message){
  RuntimeException_0.call(this, message);
}

defineClass(91, 8, $intern_8, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 91, Ljava_lang_RuntimeException_2_classLit);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function compare(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

defineClass(114, 1, {3:1, 114:1, 7:1}, Boolean_0);
_.compareTo = function compareTo_0(b){
  return compare(this.value_0, b.value_0);
}
;
_.equals$ = function equals_11(o){
  return instanceOf(o, 114) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_12(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_23(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 114, Ljava_lang_Object_2_classLit);
defineClass(115, 1, {3:1, 115:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 115, Ljava_lang_Object_2_classLit);
function compare_0(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(92, 115, {3:1, 7:1, 92:1, 115:1}, Float);
_.compareTo = function compareTo_1(b){
  return compare_0(this.value_0, b.value_0);
}
;
_.equals$ = function equals_12(o){
  return instanceOf(o, 92) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_25(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 92, Ljava_lang_Number_2_classLit);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(24, 8, $intern_8, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 24, Ljava_lang_RuntimeException_2_classLit);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(20, 8, $intern_8, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 20, Ljava_lang_RuntimeException_2_classLit);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(74, 8, $intern_8, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 74, Ljava_lang_RuntimeException_2_classLit);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare_1(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(93, 115, {3:1, 7:1, 93:1, 115:1}, Integer);
_.compareTo = function compareTo_2(b){
  return compare_1(this.value_0, b.value_0);
}
;
_.equals$ = function equals_13(o){
  return instanceOf(o, 93) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_14(){
  return this.value_0;
}
;
_.toString$ = function toString_26(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 93, Ljava_lang_Number_2_classLit);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_1, 93, 256, 0, 1);
}

var boxedValues_0;
function Long(value_0){
  this.value_0 = value_0;
}

function compare_2(x_0, y_0){
  return lt(x_0, y_0)?-1:gt(x_0, y_0)?1:0;
}

function valueOf_0(i){
  var rebase, result;
  if (gt(i, {l:4194175, m:$intern_3, h:$intern_7}) && lt(i, {l:128, m:0, h:0})) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(94, 115, {3:1, 7:1, 94:1, 115:1}, Long);
_.compareTo = function compareTo_3(b){
  return compare_2(this.value_0, b.value_0);
}
;
_.equals$ = function equals_14(o){
  return instanceOf(o, 94) && eq(o.value_0, this.value_0);
}
;
_.hashCode$ = function hashCode_15(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_27(){
  return '' + toString_16(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 94, Ljava_lang_Number_2_classLit);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Long_2_classLit, $intern_1, 94, 256, 0, 1);
}

var boxedValues_1;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function abs_1(x_0){
  return x_0 < 0?-x_0:x_0;
}

function ceil_0(x_0){
  return Math.ceil(x_0);
}

function cos_0(x_0){
  return Math.cos(x_0);
}

function floor_0(x_0){
  return Math.floor(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function max_1(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function min_1(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function round_0(x_0){
  return Math.round(x_0);
}

function sin_0(x_0){
  return Math.sin(x_0);
}

function sqrt_0(x_0){
  return Math.sqrt(x_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 8, {3:1, 14:1, 39:1, 8:1, 10:1}, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 39, Ljava_lang_RuntimeException_2_classLit);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(71, 1, {3:1, 71:1}, StackTraceElement);
_.equals$ = function equals_15(other){
  var st;
  if (instanceOf(other, 71)) {
    st = other;
    return this.lineNumber == st.lineNumber && equals_28(this.methodName, st.methodName) && equals_28(this.className, st.className) && equals_28(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_16(){
  return hashCode_23(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_28(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 71, Ljava_lang_Object_2_classLit);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace_1(this$static, from, to){
  var hex = toUnsignedRadixString(from, 16);
  var regex = '\\u' + '0000'.substring(hex.length) + hex;
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}

function $replace_2(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_1, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function compareTo_4(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_28;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_28;
    return valueOf_1(hiSurrogate) + valueOf_1(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_28);
  }
}

function valueOf_1(x_0){
  return String.fromCharCode(x_0);
}

function valueOf_2(x_0){
  return __valueOf(x_0, 0, x_0.length);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, Ljava_lang_Object_2_classLit);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(129, 116, {230:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 129, Ljava_lang_AbstractStringBuilder_2_classLit);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  return this$static.string += x_0 , this$static;
}

function $append_6(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_8(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $insert(this$static, x_0){
  this$static.string = $substring_0(this$static.string, 0, 0) + x_0 + $substring(this$static.string, 0);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(15, 116, {230:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 15, Ljava_lang_AbstractStringBuilder_2_classLit);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkNotNull_1(src_0, 'src');
  checkNotNull_1(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = src_0;
    destArray = dest;
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        destArray[destEnd] = srcArray[--srcOfs];
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        destArray[destOfs++] = srcArray[srcOfs++];
      }
    }
  }
   else 
    len > 0 && nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(25, 8, $intern_8, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 25, Ljava_lang_RuntimeException_2_classLit);
function $clear(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw new IllegalArgumentException;
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw new IllegalArgumentException;
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw new IllegalArgumentException;
  }
  this.capacity = this.limit = capacity;
}

defineClass(106, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass('java.nio', 'Buffer', 106, Ljava_lang_Object_2_classLit);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(215, 8, $intern_8, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass('java.nio', 'BufferOverflowException', 215, Ljava_lang_RuntimeException_2_classLit);
function $$init(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw new RuntimeException_0('Native order supported only.');
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw new RuntimeException_0('Native order supported only.');
  }
  return new ShortBuffer($slice(this$static));
}

function $compareTo(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.byteArray[thisPos];
    otherByte = otherBuffer.byteArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_2(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw new IllegalArgumentException;
  }
  return new ByteBuffer(capacity);
}

defineClass(107, 106, {7:1, 107:1, 173:1}, ByteBuffer, ByteBuffer_1);
_.compareTo = function compareTo_5(otherBuffer){
  return $compareTo(this, otherBuffer);
}
;
_.equals$ = function equals_16(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 107)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode$ = function hashCode_17(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_2(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_29(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass('java.nio', 'ByteBuffer', 107, Ljava_nio_Buffer_2_classLit);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(214, 1, {}, ByteOrder);
_.toString$ = function toString_30(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass('java.nio', 'ByteOrder', 214, Ljava_lang_Object_2_classLit);
function $compareTo_0(this$static, otherBuffer){
  var compareRemaining, otherFloat, otherPos, thisFloat, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisFloat = this$static.floatArray[thisPos];
    otherFloat = otherBuffer.floatArray[otherPos];
    if (thisFloat != otherFloat && (thisFloat == thisFloat || otherFloat == otherFloat)) {
      return thisFloat < otherFloat?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_3(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
    throw new IndexOutOfBoundsException;
  }
  if (len > this$static.limit - this$static.position_0) {
    throw new BufferOverflowException;
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.floatArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(123, 106, {7:1, 123:1, 173:1}, FloatBuffer);
_.compareTo = function compareTo_6(otherBuffer){
  return $compareTo_0(this, otherBuffer);
}
;
_.equals$ = function equals_17(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 123)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString$ = function toString_31(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass('java.nio', 'FloatBuffer', 123, Ljava_nio_Buffer_2_classLit);
function $compareTo_1(this$static, otherBuffer){
  var compareRemaining, otherInt, otherPos, thisInt, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisInt = this$static.intArray[thisPos];
    otherInt = otherBuffer.intArray[otherPos];
    if (thisInt != otherInt) {
      return thisInt < otherInt?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_4(this$static, index_0){
  return this$static.intArray[index_0];
}

function $put_1(this$static, c){
  $set_0(this$static.intArray, this$static.position_0++, c);
  return this$static;
}

function $put_2(this$static, index_0, c){
  $set_0(this$static.intArray, index_0, c);
  return this$static;
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.intArray = create_3(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(158, 106, {7:1, 158:1, 173:1}, IntBuffer);
_.compareTo = function compareTo_7(otherBuffer){
  return $compareTo_1(this, otherBuffer);
}
;
_.equals$ = function equals_18(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 158)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode$ = function hashCode_18(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_32(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass('java.nio', 'IntBuffer', 158, Ljava_nio_Buffer_2_classLit);
function $compareTo_2(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.shortArray[thisPos];
    otherByte = otherBuffer.shortArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_5(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_3(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
    throw new IndexOutOfBoundsException;
  }
  if (len > this$static.limit - this$static.position_0) {
    throw new BufferOverflowException;
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.shortArray = create_2(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(154, 106, {7:1, 154:1, 173:1}, ShortBuffer);
_.compareTo = function compareTo_8(otherBuffer){
  return $compareTo_2(this, otherBuffer);
}
;
_.equals$ = function equals_19(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 154)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_5(this, myPosition++) == $get_5(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode$ = function hashCode_19(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_5(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_33(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass('java.nio', 'ShortBuffer', 154, Ljava_nio_Buffer_2_classLit);
function $containsKey(this$static, key){
  return isJavaString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_3(key) === undefined):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_6(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_3(key);
}

function $put_4(this$static, key, value_0){
  return isJavaString(key)?key == null?$put_5(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0):$put_5(this$static.hashCodeMap, key, value_0);
}

function $remove_1(this$static, key){
  return isJavaString(key)?key == null?$remove_5(this$static.hashCodeMap, null):this$static.stringMap.remove_2(key):$remove_5(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate_0.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate_0.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(135, 543, $intern_17);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_2 = function get_6(key){
  return $get_6(this, key);
}
;
_.put = function put_1(key, value_0){
  return $put_4(this, key, value_0);
}
;
_.remove_0 = function remove_7(key){
  return $remove_1(this, key);
}
;
_.size_1 = function size_10(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 135, Ljava_util_AbstractMap_2_classLit);
function $contains_0(this$static, o){
  if (instanceOf(o, 53)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(136, 545, $intern_5, AbstractHashMap$EntrySet);
_.contains = function contains_7(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_10(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_11(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 136, Ljava_util_AbstractSet_2_classLit);
function $hasNext_0(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_1(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext_0(this$static)) , this$static.last = this$static.current , this$static.current.next_0();
}

function $remove_2(this$static){
  checkState_1(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(137, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_6(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_7(){
  return $next_1(this);
}
;
_.remove = function remove_8(){
  $remove_2(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 137, Ljava_lang_Object_2_classLit);
function $equals_0(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 23)) {
    return false;
  }
  other = o;
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_28(toFind, (checkElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(552, 544, {23:1});
_.add_1 = function add_2(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_0 = function add_3(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_20(o){
  return $equals_0(this, o);
}
;
_.hashCode$ = function hashCode_20(){
  return hashCode_26(this);
}
;
_.iterator = function iterator_11(){
  return new AbstractList$IteratorImpl(this);
}
;
_.remove_1 = function remove_9(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 552, Ljava_util_AbstractCollection_2_classLit);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.size_1());
  return this$static.this$01.get_1(this$static.last = this$static.i++);
}

function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(44, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_7(){
  return this.i < this.this$01.size_1();
}
;
_.next_0 = function next_8(){
  return $next_2(this);
}
;
_.remove = function remove_10(){
  checkState_1(this.last != -1);
  this.this$01.remove_1(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 44, Ljava_lang_Object_2_classLit);
function AbstractList$ListIteratorImpl(this$0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex_0(0, this$0.array.length);
  this.i = 0;
}

defineClass(270, 44, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 270, Ljava_util_AbstractList$IteratorImpl_2_classLit);
function $iterator_0(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(117, 545, $intern_5, AbstractMap$1);
_.contains = function contains_8(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_12(){
  return $iterator_0(this);
}
;
_.size_1 = function size_12(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 117, Ljava_util_AbstractSet_2_classLit);
function $next_3(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(237, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_8(){
  return $hasNext_0(this.val$outerIter2);
}
;
_.next_0 = function next_9(){
  return $next_3(this);
}
;
_.remove = function remove_11(){
  $remove_2(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 237, Ljava_lang_Object_2_classLit);
defineClass(236, 1, $intern_18);
_.equals$ = function equals_21(other){
  var entry;
  if (!instanceOf(other, 53)) {
    return false;
  }
  entry = other;
  return equals_28(this.key_0, entry.getKey()) && equals_28(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_21(){
  return hashCode_31(this.key_0) ^ hashCode_31(this.value_0);
}
;
_.setValue = function setValue_0(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_34(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 236, Ljava_lang_Object_2_classLit);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(176, 236, $intern_18, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 176, Ljava_util_AbstractMap$AbstractEntry_2_classLit);
defineClass(553, 1, $intern_18);
_.equals$ = function equals_22(other){
  var entry;
  if (!instanceOf(other, 53)) {
    return false;
  }
  entry = other;
  return equals_28(this.getKey(), entry.getKey()) && equals_28(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_22(){
  return hashCode_31(this.getKey()) ^ hashCode_31(this.getValue());
}
;
_.toString$ = function toString_35(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 553, Ljava_lang_Object_2_classLit);
function $$init_0(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
}

function $add_3(this$static, index_0, o){
  checkPositionIndex_0(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_4(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get_7(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_28(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove_3(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_4(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_1(i);
  return true;
}

function $set_1(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray_1(this$static){
  return cloneSubrange(this$static.array, this$static.array.length);
}

function $toArray_2(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    out[i] = this$static.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}

function ArrayList(){
  $$init_0(this);
}

function ArrayList_0(initialCapacity){
  $$init_0(this);
  checkCriticalArgument_0(initialCapacity >= 0, 'Initial capacity must not be negative');
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(16, 552, $intern_29, ArrayList, ArrayList_0);
_.add_1 = function add_4(index_0, o){
  $add_3(this, index_0, o);
}
;
_.add_0 = function add_5(o){
  return $add_4(this, o);
}
;
_.contains = function contains_9(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_7(index_0){
  return $get_7(this, index_0);
}
;
_.remove_1 = function remove_12(index_0){
  return $remove_3(this, index_0);
}
;
_.size_1 = function size_13(){
  return this.array.length;
}
;
_.toArray = function toArray_5(){
  return $toArray_1(this);
}
;
_.toArray_0 = function toArray_6(out){
  return $toArray_2(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 16, Ljava_util_AbstractList_2_classLit);
function binarySearch(sortedArray, key, comparator){
  var compareResult, high, low, mid, midVal;
  !comparator && ($clinit_Comparators() , $clinit_Comparators() , NATURAL);
  low = 0;
  high = sortedArray.length - 1;
  while (low <= high) {
    mid = low + (high - low >> 1);
    midVal = sortedArray[mid];
    compareResult = $compare(midVal, key);
    if (compareResult < 0) {
      low = mid + 1;
    }
     else if (compareResult > 0) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

function deepToString(a, arraysIveSeen){
  var b, i, obj, objArray, tempSet;
  if (a == null) {
    return 'null';
  }
  if ($containsKey(arraysIveSeen.map_0, a)) {
    return '[...]';
  }
  $add_5(arraysIveSeen, a);
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    obj = a[i];
    if (obj == null) {
      b.string += 'null';
    }
     else if ((getClass__Ljava_lang_Class___devirtual$(obj).modifiers & 4) != 0) {
      if (instanceOf(obj, 5)) {
        if ($containsKey(arraysIveSeen.map_0, obj)) {
          b.string += '[...]';
        }
         else {
          objArray = obj;
          tempSet = new HashSet_0(arraysIveSeen);
          $append_7(b, deepToString(objArray, tempSet));
        }
      }
       else 
        instanceOf(obj, 592)?$append_7(b, toString_36(obj)):instanceOf(obj, 174)?$append_7(b, toString_40(obj)):instanceOf(obj, 31)?$append_7(b, toString_39(obj)):instanceOf(obj, 90)?$append_7(b, toString_38(obj)):instanceOf(obj, 529) && $append_7(b, toString_37(obj));
    }
     else {
      b.string += '' + obj;
    }
  }
  b.string += ']';
  return b.string;
}

function hashCode_23(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function insertionSort(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && $compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && $compare(src_0[srcLow], src_0[topIdx]) <= 0?(dest[destLow++] = src_0[srcLow++]):(dest[destLow++] = src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, newLength, length_0, copy;
  !comp && ($clinit_Comparators() , $clinit_Comparators() , NATURAL);
  temp = (newLength = (length_0 = toIndex - fromIndex , checkCriticalArgument_1(length_0 >= 0, initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf(fromIndex), valueOf(toIndex)])) , length_0) , copy = createFrom(x_0, newLength) , arraycopy(x_0, fromIndex, copy, 0, min_1(x_0.length - fromIndex, newLength)) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex);
}

function mergeSort_0(temp, array, low, high, ofs){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs);
  if ($compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      array[low++] = temp[tempLow++];
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function toString_36(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_7(b, String.fromCharCode(a[i]));
  }
  b.string += ']';
  return b.string;
}

function toString_37(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_7(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function toString_38(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_7(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function toString_39(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_7(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function toString_40(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_7(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(157, 552, $intern_29, Arrays$ArrayList);
_.contains = function contains_10(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_1 = function get_8(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_14(){
  return this.array.length;
}
;
_.toArray = function toArray_7(){
  return clone(this.array);
}
;
_.toArray_0 = function toArray_8(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    out[i] = this.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 157, Ljava_util_AbstractList_2_classLit);
function $get_8(this$static, bitIndex){
  checkIndex(bitIndex);
  return get_9(this$static.array, bitIndex);
}

function $length(this$static){
  var bitMasks, i, last, offsets, position, word;
  last = trimToSize(this$static.array);
  if (last == -1) {
    return 0;
  }
  offsets = initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [16, 8, 4, 2, 1]);
  bitMasks = initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [-65536, 65280, 240, 12, 2]);
  position = (last << 5) + 1;
  word = this$static.array[last] | 0;
  for (i = 0; i < offsets.length; i++) {
    if ((word & bitMasks[i]) != 0) {
      word >>>= offsets[i];
      position += offsets[i];
    }
  }
  return position;
}

function $nextSetBit(this$static, fromIndex){
  var i, index_0, word;
  checkIndex(fromIndex);
  index_0 = fromIndex >>> 5;
  word = this$static.array[index_0] | 0;
  if (word != 0) {
    for (i = fromIndex & 31; i < 32; i++) {
      if ((word & 1 << i) != 0) {
        return (index_0 << 5) + i;
      }
    }
  }
  ++index_0;
  trimToSize(this$static.array);
  index_0 = nextSetWord(this$static.array, index_0);
  if (index_0 == -1) {
    return -1;
  }
  return (index_0 << 5) + numberOfTrailingZeros(this$static.array[index_0]);
}

function $or(this$static, set_0){
  var index_0;
  if (this$static == set_0) {
    return;
  }
  index_0 = 0;
  while ((index_0 = nextSetWord(set_0.array, index_0)) != -1) {
    setWord(this$static.array, index_0, this$static.array[index_0] | 0 | set_0.array[index_0]);
    ++index_0;
  }
}

function $set_2(this$static, bitIndex){
  checkIndex(bitIndex);
  set_2(this$static.array, bitIndex);
}

function BitSet(){
  this.array = [];
}

function checkIndex(bitIndex){
  if (bitIndex < 0) {
    throw new IndexOutOfBoundsException_0('bitIndex < 0: ' + bitIndex);
  }
}

function get_9(array, bitIndex){
  var word;
  word = array[bitIndex >>> 5] | 0;
  return (word >>> (bitIndex & 31) & 1) == 1;
}

function nextSetWord(array, index_0){
  var length_0 = array.length;
  var localMinimum = $intern_0;
  for (var property in array) {
    if (array[index_0] !== undefined) {
      return index_0;
    }
    if (++index_0 >= length_0) {
      return -1;
    }
    var number = property >>> 0;
    String(number) == property && number !== 4294967295 && number >= index_0 && number < localMinimum && (localMinimum = number);
  }
  if (localMinimum === $intern_0) {
    return -1;
  }
  return localMinimum;
}

function set_2(array, bitIndex){
  var index_0;
  index_0 = bitIndex >>> 5;
  array[index_0] = array[index_0] | 0 | 1 << (bitIndex & 31);
}

function setWord(array, index_0, value_0){
  value_0 == 0?(delete array[index_0] , undefined):$set(array, index_0, value_0);
}

function trimToSize(array){
  var length_0 = array.length;
  if (length_0 === 0) {
    return -1;
  }
  var last = length_0 - 1;
  if (array[last] !== undefined) {
    return last;
  }
  var biggestSeen = -1;
  for (var property in array) {
    if (--last === -1) {
      return -1;
    }
    if (array[last] !== undefined) {
      return last;
    }
    var number = property >>> 0;
    String(number) == property && number !== 4294967295 && number > biggestSeen && (biggestSeen = number);
  }
  array.length = biggestSeen + 1;
  return biggestSeen;
}

defineClass(84, 1, {84:1}, BitSet);
_.equals$ = function equals_23(obj){
  var index_0, last, other;
  if (this !== obj) {
    if (!instanceOf(obj, 84)) {
      return false;
    }
    other = obj;
    last = trimToSize(this.array);
    if (last != trimToSize(other.array)) {
      return false;
    }
    index_0 = 0;
    while ((index_0 = nextSetWord(this.array, index_0)) != -1) {
      if ((this.array[index_0] | 0) != (other.array[index_0] | 0)) {
        return false;
      }
      ++index_0;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_24(){
  var hash, i, last, value_0;
  last = trimToSize(this.array);
  hash = -2128831035 ^ last;
  for (i = 0; i <= last; i++) {
    value_0 = this.array[i] | 0;
    hash = hash * $intern_31 ^ value_0 & 255;
    hash = hash * $intern_31 ^ value_0 >>> 8 & 255;
    hash = hash * $intern_31 ^ value_0 >>> 16 & 255;
    hash = hash * $intern_31 ^ value_0 >>> 24;
  }
  return hash;
}
;
_.toString$ = function toString_41(){
  var length_0, next, sb;
  length_0 = $length(this);
  if (length_0 == 0) {
    return '{}';
  }
  sb = new StringBuilder_1('{');
  next = $nextSetBit(this, 0);
  sb.string += next;
  while ((next = $nextSetBit(this, next + 1)) != -1) {
    sb.string += ', ';
    sb.string += next;
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_BitSet_2_classLit = createForClass('java.util', 'BitSet', 84, Ljava_lang_Object_2_classLit);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_25(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_26(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function swapImpl(list, i, j){
  $clinit_Collections();
  var t;
  t = (checkElementIndex(i, list.array.length) , list.array[i]);
  $set_1(list, i, (checkElementIndex(j, list.array.length) , list.array[j]));
  $set_1(list, j, t);
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 32)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(262, 552, $intern_29, Collections$EmptyList);
_.contains = function contains_11(object){
  return false;
}
;
_.get_1 = function get_10(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_13(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_1;
}
;
_.size_1 = function size_15(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 262, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_1 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(263, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_9(){
  return false;
}
;
_.next_0 = function next_10(){
  throw new NoSuchElementException;
}
;
_.remove = function remove_13(){
  throw new IllegalStateException;
}
;
var INSTANCE_1;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 263, Ljava_lang_Object_2_classLit);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(264, 552, {3:1, 23:1}, Collections$SingletonList);
_.contains = function contains_12(item_0){
  return equals_28(this.element, item_0);
}
;
_.get_1 = function get_11(index_0){
  checkElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_16(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 264, Ljava_util_AbstractList_2_classLit);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(178, 1, {});
_.add_0 = function add_6(o){
  throw new UnsupportedOperationException;
}
;
_.contains = function contains_13(o){
  return this.coll.contains(o);
}
;
_.iterator = function iterator_14(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_17(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_9(){
  return this.coll.toArray();
}
;
_.toArray_0 = function toArray_10(a){
  return this.coll.toArray_0(a);
}
;
_.toString$ = function toString_42(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 178, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(268, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_10(){
  return this.it.hasNext();
}
;
_.next_0 = function next_11(){
  return this.it.next_0();
}
;
_.remove = function remove_14(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 268, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(139, 178, {23:1}, Collections$UnmodifiableList);
_.equals$ = function equals_24(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_12(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_27(){
  return this.list.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 139, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(265, 1, $intern_17, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_25(o){
  return this.map_0.equals$(o);
}
;
_.get_2 = function get_13(key){
  return this.map_0.get_2(key);
}
;
_.hashCode$ = function hashCode_28(){
  return this.map_0.hashCode$();
}
;
_.put = function put_2(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.remove_0 = function remove_15(key){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_18(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_43(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 265, Ljava_lang_Object_2_classLit);
defineClass(266, 178, $intern_5);
_.equals$ = function equals_26(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_29(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 266, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    array[i] = new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(array[i]);
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(267, 266, $intern_5, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.contains = function contains_14(o){
  return this.coll.contains(o);
}
;
_.iterator = function iterator_15(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray = function toArray_11(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
_.toArray_0 = function toArray_12(a){
  var result;
  result = this.coll.toArray_0(a);
  $wrap(result, this.coll.size_1());
  return result;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 267, Ljava_util_Collections$UnmodifiableSet_2_classLit);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(269, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_11(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_12(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_0());
}
;
_.remove = function remove_16(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 269, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(179, 1, $intern_18, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_27(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_1(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_1(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_30(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_1(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_44(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 179, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(180, 139, {23:1, 32:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 180, Ljava_util_Collections$UnmodifiableList_2_classLit);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function $compare(o1, o2){
  checkNotNull_0(o1);
  checkNotNull_0(o2);
  return isJavaString(o1)?compareTo_4(o1, o2):o1.compareTo(o2);
}

function Comparators$1(){
}

defineClass(519, 1, {}, Comparators$1);
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 519, Ljava_lang_Object_2_classLit);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(213, 8, $intern_8, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 213, Ljava_lang_RuntimeException_2_classLit);
function $equals_1(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

function HashMap_0(ignored){
  checkCriticalArgument_0(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument_0(true, 'Non-positive load factor');
  $reset(this);
}

defineClass(28, 135, {3:1, 133:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 28, Ljava_util_AbstractHashMap_2_classLit);
function $add_5(this$static, o){
  var old;
  old = $put_4(this$static.map_0, o, this$static);
  return old == null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(c){
  this.map_0 = new HashMap_0(c.map_0.size_0);
  $addAll(this, c);
}

defineClass(125, 545, {3:1, 57:1}, HashSet, HashSet_0);
_.contains = function contains_15(o){
  return $containsKey(this.map_0, o);
}
;
_.iterator = function iterator_16(){
  return $iterator_0(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_19(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_45(){
  return $toString_2(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 125, Ljava_util_AbstractSet_2_classLit);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_5(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_1(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  chain[chain.length] = new AbstractMap$SimpleEntry(key, value_0);
  $elementAdded(this$static.host);
  return null;
}

function $remove_5(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_1(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(189, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 189, Ljava_lang_Object_2_classLit);
function $hasNext_1(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_1, 53, 0, 0, 1);
}

defineClass(345, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_12(){
  return $hasNext_1(this);
}
;
_.next_0 = function next_13(){
  return checkCriticalElement($hasNext_1(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove = function remove_17(){
  checkState_1(!!this.lastEntry);
  $remove_5(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 345, Ljava_lang_Object_2_classLit);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(343, 189, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_0(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 343, Ljava_util_InternalJsHashCodeMap_2_classLit);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(344, 16, $intern_29, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_1 = function remove_18(index_0){
  var removed;
  return removed = $remove_3(this, index_0) , $remove_5(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 344, Ljava_util_ArrayList_2_classLit);
function InternalJsMapFactory(){
}

defineClass(340, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 340, Ljava_lang_Object_2_classLit);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate_0 = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate_0;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(342, 340, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 342, Ljava_util_InternalJsMapFactory_2_classLit);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(341, 340, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 341, Ljava_util_InternalJsMapFactory_2_classLit);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_6(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_3(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_6(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_3(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(140, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_3 = function get_14(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_3(key, value_0){
  return $put_6(this, key, value_0);
}
;
_.remove_2 = function remove_19(key){
  return $remove_6(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 140, Ljava_lang_Object_2_classLit);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(274, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_13(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_14(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove = function remove_20(){
  checkState_1(this.last != -1);
  this.this$01.remove_2(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 274, Ljava_lang_Object_2_classLit);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(181, 553, $intern_18, InternalJsStringMap$2);
_.getKey = function getKey_2(){
  return this.val$key2;
}
;
_.getValue = function getValue_2(){
  return this.this$01.get_3(this.val$key2);
}
;
_.setValue = function setValue_2(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 181, Ljava_util_AbstractMapEntry_2_classLit);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(271, 140, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_0(entry);
    }
  }
  return list.iterator();
}
;
_.get_3 = function get_15(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_4(key, value_0){
  return $put_6(this, ':' + key, value_0);
}
;
_.remove_2 = function remove_21(key){
  return $remove_6(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 271, Ljava_util_InternalJsStringMap_2_classLit);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(273, 16, $intern_29, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_1 = function remove_22(index_0){
  var removed;
  return removed = $remove_3(this, index_0) , $remove_6(this.this$11, ':' + removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 273, Ljava_util_ArrayList_2_classLit);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(272, 140, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 272, Ljava_util_InternalJsStringMap_2_classLit);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(86, 8, $intern_8, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 86, Ljava_lang_RuntimeException_2_classLit);
function equals_28(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_31(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initDim(D_classLit, $intern_32, 0, 25, 7, 1);
  twoToTheXMinus48 = initDim(D_classLit, $intern_32, 0, 33, 7, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i0 = 32; i0 >= 0; i0--) {
    twoToTheXMinus48[i0] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; i--) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

function $nextInt(this$static, n){
  var bits, val;
  checkCriticalArgument(n > 0);
  if ((n & -n) == n) {
    return round_int(n * $nextInternal(this$static) * 4.6566128730773926E-10);
  }
  do {
    bits = $nextInternal(this$static);
    val = bits % n;
  }
   while (bits - val + (n - 1) < 0);
  return round_int(val);
}

function $nextInternal(this$static){
  var carry, dval, h, hi, l, lo;
  hi = this$static.seedhi * $intern_33 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_33 + 11;
  carry = Math.floor(lo * $intern_34);
  hi += carry;
  lo -= carry * $intern_35;
  hi %= $intern_35;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h = this$static.seedhi * 128;
  l = floor_0(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h + l;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + now_1();
  hi = round_int(Math.floor(seed * $intern_34)) & $intern_25;
  lo = round_int(seed - hi * $intern_35);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_33;
}

defineClass(148, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 148, Ljava_lang_Object_2_classLit);
defineClass(546, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass('playn.core', 'Assets', 546, Ljava_lang_Object_2_classLit);
defineClass(555, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass('playn.core', 'Audio', 555, Ljava_lang_Object_2_classLit);
function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_0(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0);
}

defineClass(436, 1, $intern_23);
_.close_0 = function close_2(){
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass('playn.core', 'Canvas', 436, Ljava_lang_Object_2_classLit);
function $clinit_Canvas$LineCap(){
  $clinit_Canvas$LineCap = emptyMethod;
  BUTT_0 = new Canvas$LineCap('BUTT', 0);
  ROUND_1 = new Canvas$LineCap('ROUND', 1);
  SQUARE_0 = new Canvas$LineCap('SQUARE', 2);
}

function Canvas$LineCap(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_Canvas$LineCap();
  return initValues(getClassLiteralForArray(Lplayn_core_Canvas$LineCap_2_classLit, 1), $intern_1, 103, 0, [BUTT_0, ROUND_1, SQUARE_0]);
}

defineClass(103, 6, {3:1, 7:1, 6:1, 103:1}, Canvas$LineCap);
var BUTT_0, ROUND_1, SQUARE_0;
var Lplayn_core_Canvas$LineCap_2_classLit = createForEnum('playn.core', 'Canvas/LineCap', 103, Ljava_lang_Enum_2_classLit, values_14);
function $clinit_Canvas$LineJoin(){
  $clinit_Canvas$LineJoin = emptyMethod;
  BEVEL_0 = new Canvas$LineJoin('BEVEL', 0);
  MITER_0 = new Canvas$LineJoin('MITER', 1);
  ROUND_2 = new Canvas$LineJoin('ROUND', 2);
}

function Canvas$LineJoin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Canvas$LineJoin();
  return initValues(getClassLiteralForArray(Lplayn_core_Canvas$LineJoin_2_classLit, 1), $intern_1, 104, 0, [BEVEL_0, MITER_0, ROUND_2]);
}

defineClass(104, 6, {3:1, 7:1, 6:1, 104:1}, Canvas$LineJoin);
var BEVEL_0, MITER_0, ROUND_2;
var Lplayn_core_Canvas$LineJoin_2_classLit = createForEnum('playn.core', 'Canvas/LineJoin', 104, Ljava_lang_Enum_2_classLit, values_15);
function Clock(){
}

defineClass(198, 1, {}, Clock);
_.dt = 0;
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass('playn.core', 'Clock', 198, Ljava_lang_Object_2_classLit);
defineClass(33, 1, {33:1});
var Lplayn_core_Event_2_classLit = createForClass('playn.core', 'Event', 33, Ljava_lang_Object_2_classLit);
function $setFlag_0(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(flags, time){
  this.flags = flags;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(30, 33, $intern_36);
_.addFields = function addFields(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_3(){
  return 'Input';
}
;
_.toString$ = function toString_46(){
  var builder;
  builder = $append_1(new StringBuilder_1(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass('playn.core', 'Event/Input', 30, Lplayn_core_Event_2_classLit);
function Event$XY(flags, time, x_0, y_0){
  Event$Input.call(this, flags, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(45, 30, $intern_37);
_.addFields = function addFields_0(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_4(){
  return 'XY';
}
;
_.x_1 = function x_1(){
  return this.x_0;
}
;
_.y_1 = function y_1(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass('playn.core', 'Event/XY', 45, Lplayn_core_Event$Input_2_classLit);
defineClass(560, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass('playn.core', 'Exec', 560, Ljava_lang_Object_2_classLit);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll_0(this$static.running, this$static.pending);
  this$static.pending.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get_7(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  this$static.running.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(347, 560, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass('playn.core', 'Exec/Default', 347, Lplayn_core_Exec_2_classLit);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(348, 547, {}, Exec$Default$1);
_.onEmit = function onEmit_9(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass('playn.core', 'Exec/Default/1', 348, Lreact_Slot_2_classLit);
function $derive(this$static, size_0){
  return new Font_0(this$static.name_0, this$static.style_0, size_0);
}

function $equals_2(this$static, other){
  var ofont;
  if (!instanceOf(other, 67))
    return false;
  ofont = other;
  return $equals(this$static.name_0, ofont.name_0) && this$static.style_0 == ofont.style_0 && this$static.size_0 == ofont.size_0;
}

function $hashCode_0(this$static){
  return getHashCode_0(this$static.name_0) ^ getHashCode(this$static.style_0) ^ round_int(this$static.size_0);
}

function Font(size_0){
  Font_0.call(this, 'Helvetica', ($clinit_Font$Style() , PLAIN), size_0);
}

function Font_0(name_0, style, size_0){
  this.name_0 = name_0;
  this.style_0 = style;
  this.size_0 = size_0;
}

defineClass(67, 1, {67:1}, Font, Font_0);
_.equals$ = function equals_29(other){
  return $equals_2(this, other);
}
;
_.hashCode$ = function hashCode_32(){
  return $hashCode_0(this);
}
;
_.toString$ = function toString_47(){
  return this.name_0 + ' ' + this.style_0 + ' ' + this.size_0 + 'pt';
}
;
_.size_0 = 0;
var Lplayn_core_Font_2_classLit = createForClass('playn.core', 'Font', 67, Ljava_lang_Object_2_classLit);
function $clinit_Font$Style(){
  $clinit_Font$Style = emptyMethod;
  PLAIN = new Font$Style('PLAIN', 0);
  BOLD_0 = new Font$Style('BOLD', 1);
  ITALIC_0 = new Font$Style('ITALIC', 2);
  BOLD_ITALIC = new Font$Style('BOLD_ITALIC', 3);
}

function Font$Style(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_Font$Style();
  return initValues(getClassLiteralForArray(Lplayn_core_Font$Style_2_classLit, 1), $intern_1, 88, 0, [PLAIN, BOLD_0, ITALIC_0, BOLD_ITALIC]);
}

defineClass(88, 6, {3:1, 7:1, 6:1, 88:1}, Font$Style);
var BOLD_0, BOLD_ITALIC, ITALIC_0, PLAIN;
var Lplayn_core_Font$Style_2_classLit = createForEnum('playn.core', 'Font/Style', 88, Ljava_lang_Enum_2_classLit, values_16);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.glc.getError() != 0) {
      reported += 1;
      $clinit_System();
    }
  }
  return reported > 0;
}

function $glDeleteFramebuffer(this$static){
  $setIntBuffer(this$static.bufs, 0);
  $deleteObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , FRAME_BUFFER));
}

function $glDeleteTexture(this$static, id_0){
  $setIntBuffer(this$static.bufs, id_0);
  $deleteObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , TEXTURE));
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $genObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , TEXTURE));
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(356, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass('playn.core', 'GL20', 356, Ljava_lang_Object_2_classLit);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setIntBuffer(this$static, n){
  $position(this$static.intBuffer);
  $put_1(this$static.intBuffer, n);
  $rewind(this$static.intBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_3(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(358, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass('playn.core', 'GL20/Buffers', 358, Ljava_lang_Object_2_classLit);
function $begin(this$static){
  if (this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' mismatched begin()');
  this$static.begun = true;
}

function $close_0(this$static){
  if (this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' close() without end()');
}

function $end(this$static){
  if (!this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' mismatched end()');
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' flush() without begin()');
}

defineClass(563, 1, $intern_23);
_.begin = function begin(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.close_0 = function close_3(){
  $close_0(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass('playn.core', 'GLBatch', 563, Ljava_lang_Object_2_classLit);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $close_1(this$static){
  $deleteObject(this$static.gl, this$static.vertexShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
  $deleteObject(this$static.gl, this$static.fragmentShader, SHADER);
  $deleteObject(this$static.gl, this$static.id_0, PROGRAM);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.glc.getError());
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initDim(I_classLit, $intern_30, 0, 1, 7, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $deleteObject(this$static.gl, shader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
    throw new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0);
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = $createObject(gl, gl.glc.createProgram(), ($clinit_HtmlGL20$WebGLObjectType() , PROGRAM));
    if (id_0 == 0)
      throw new RuntimeException_0('Failed to create program: ' + gl.glc.getError());
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $attachShader(gl.glc, gl.webGLObjects[id_0], gl.webGLObjects[vertexShader]);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $attachShader(gl.glc, gl.webGLObjects[id_0], gl.webGLObjects[fragmentShader]);
    $checkError(gl);
    $linkProgram(gl.glc, gl.webGLObjects[id_0]);
    linkStatus = initDim(I_classLit, $intern_30, 0, 1, 7, 1);
    linkStatus[0] = $getProgramParameterb(gl.glc, gl.webGLObjects[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.glc, gl.webGLObjects[id_0]);
      $deleteObject(gl, id_0, PROGRAM);
      throw new RuntimeException_0('Failed to link program: ' + log_0);
    }
    this.id_0 = id_0;
    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && $deleteObject(gl, id_0, ($clinit_HtmlGL20$WebGLObjectType() , PROGRAM));
    vertexShader != 0 && $deleteObject(gl, vertexShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
    fragmentShader != 0 && $deleteObject(gl, fragmentShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
  }
}

defineClass(203, 1, $intern_23, GLProgram);
_.close_0 = function close_4(){
  $close_1(this);
}
;
_.fragmentShader = 0;
_.id_0 = 0;
_.vertexShader = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass('playn.core', 'GLProgram', 203, Ljava_lang_Object_2_classLit);
function $onEmit_4(this$static){
  $onFrame(this$static.this$01);
}

function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(252, 547, {}, Game$1);
_.onEmit = function onEmit_10(plat){
  $onEmit_4(this, plat);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass('playn.core', 'Game/1', 252, Lreact_Slot_2_classLit);
defineClass(591, 1, {});
var Lplayn_core_Gradient_2_classLit = createForClass('playn.core', 'Gradient', 591, Ljava_lang_Object_2_classLit);
defineClass(526, 1, {});
var Lplayn_core_Gradient$Config_2_classLit = createForClass('playn.core', 'Gradient/Config', 526, Ljava_lang_Object_2_classLit);
function Gradient$Linear(y1, colors, positions){
  this.colors = colors;
  this.positions = positions;
  this.x0 = 0;
  this.y0 = 0;
  this.x1 = 0;
  this.y1 = y1;
}

defineClass(527, 526, {}, Gradient$Linear);
_.x0 = 0;
_.x1 = 0;
_.y0 = 0;
_.y1 = 0;
var Lplayn_core_Gradient$Linear_2_classLit = createForClass('playn.core', 'Gradient/Linear', 527, Lplayn_core_Gradient$Config_2_classLit);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, iceil(this$static.scale_0.factor * 1), iceil(this$static.scale_0.factor * 1));
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(-1)) , canvas), 0, 0, canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, iceil($scaled(this$static.scale_0, width_0)), iceil($scaled(this$static.scale_0, height)));
}

function $createCanvas_0(this$static, size_0){
  return $createCanvas(this$static, size_0.width_0, size_0.height_0);
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.viewSize = this.viewSizeM;
  this.defaultRenderTarget = new Graphics$1(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(277, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass('playn.core', 'Graphics', 277, Ljava_lang_Object_2_classLit);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(279, 1, $intern_23);
_.close_0 = function close_5(){
  if (!this.disposed) {
    this.disposed = true;
    $glDeleteFramebuffer(this.gfx.gl);
  }
}
;
_.toString$ = function toString_48(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
_.disposed = false;
var Lplayn_core_RenderTarget_2_classLit = createForClass('playn.core', 'RenderTarget', 279, Ljava_lang_Object_2_classLit);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(280, 279, $intern_23, Graphics$1);
_.close_0 = function close_6(){
}
;
var Lplayn_core_Graphics$1_2_classLit = createForClass('playn.core', 'Graphics/1', 280, Lplayn_core_RenderTarget_2_classLit);
defineClass(568, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass('playn.core', 'TileSource', 568, Ljava_lang_Object_2_classLit);
function $$init_1(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (this$static.state._result_0.get_0() == null)
    throw new IllegalStateException_0('Cannot create texture from unready image: ' + this$static);
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static);
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update_0(tex, this$static);
  return tex;
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(200, 568, {});
_.isLoaded = function isLoaded(){
  return this.state._result_0.get_0() != null;
}
;
_.tile_0 = function tile_0(){
  return (!this.texture || this.texture.disposed) && (this.texture = $createTexture_0(this, this.texconf)) , this.texture;
}
;
_.tileAsync = function tileAsync(){
  return $map_0(this.state, new Image$3(this));
}
;
var Lplayn_core_Image_2_classLit = createForClass('playn.core', 'Image', 200, Lplayn_core_TileSource_2_classLit);
function $apply_0(this$static){
  return $texture(this$static.this$01);
}

function Image$3(this$0){
  this.this$01 = this$0;
}

defineClass(438, 1, {}, Image$3);
var Lplayn_core_Image$3_2_classLit = createForClass('playn.core', 'Image/3', 438, Ljava_lang_Object_2_classLit);
function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_1(this);
  this.gfx = gfx;
  this.state = new RFuture(($clinit_AbstractValue() , new Value(new Try$Success(this))));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap);
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_1(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(204, 200, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass('playn.core', 'ImageImpl', 204, Lplayn_core_Image_2_classLit);
defineClass(285, 1, {});
var Lplayn_core_Input_2_classLit = createForClass('playn.core', 'Input', 285, Ljava_lang_Object_2_classLit);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN_0 = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT_0 = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT_0 = new Key('RIGHT', 114);
  UP_0 = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE = new Key('BLUE', 137);
  GREEN = new Key('GREEN', 138);
  RED = new Key('RED', 139);
  YELLOW = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_Key();
  return initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN_0, END, HOME, LEFT_0, PAGE_UP, PAGE_DOWN, RIGHT_0, UP_0, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(4, 6, {3:1, 7:1, 6:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN_0, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT_0, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT_0, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP_0, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW, WINDOWS, X, Y, YELLOW, Z, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum('playn.core', 'Key', 4, Ljava_lang_Enum_2_classLit, values_17);
function Keyboard$Event(time){
  Event$Input.call(this, 0, time);
}

defineClass(206, 30, $intern_36);
var Lplayn_core_Keyboard$Event_2_classLit = createForClass('playn.core', 'Keyboard/Event', 206, Lplayn_core_Event$Input_2_classLit);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(207, 206, $intern_36, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_8($append_7($append_6((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_5(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass('playn.core', 'Keyboard/KeyEvent', 207, Lplayn_core_Keyboard$Event_2_classLit);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(453, 206, $intern_36, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_6(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass('playn.core', 'Keyboard/TypedEvent', 453, Lplayn_core_Keyboard$Event_2_classLit);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $error(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $info_0(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , $clinit_System() , !!e && e.printStackTrace(out_0) , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

defineClass(275, 1, {});
var Lplayn_core_Log_2_classLit = createForClass('playn.core', 'Log', 275, Ljava_lang_Object_2_classLit);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_18(){
  $clinit_Log$Level();
  return initValues(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 79, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(79, 6, {3:1, 7:1, 6:1, 79:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum('playn.core', 'Log/Level', 79, Ljava_lang_Enum_2_classLit, values_18);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, 0, time, x_0, y_0);
}

defineClass(159, 45, $intern_37);
var Lplayn_core_Mouse$Event_2_classLit = createForClass('playn.core', 'Mouse/Event', 159, Lplayn_core_Event$XY_2_classLit);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(124, 159, {33:1, 30:1, 45:1, 124:1, 43:1}, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_8($append_7($append_6((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_7(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass('playn.core', 'Mouse/ButtonEvent', 124, Lplayn_core_Mouse$Event_2_classLit);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_1 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_1 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE_0 = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_19(){
  $clinit_Mouse$ButtonEvent$Id();
  return initValues(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 75, 0, [LEFT_1, RIGHT_1, MIDDLE_0, X1, X2]);
}

defineClass(75, 6, {3:1, 7:1, 6:1, 75:1}, Mouse$ButtonEvent$Id);
var LEFT_1, MIDDLE_0, RIGHT_1, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum('playn.core', 'Mouse/ButtonEvent/Id', 75, Ljava_lang_Enum_2_classLit, values_19);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(160, 159, {33:1, 30:1, 45:1, 160:1, 43:1}, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_8(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass('playn.core', 'Mouse/MotionEvent', 160, Lplayn_core_Mouse$Event_2_classLit);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(454, 159, $intern_37, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_9(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass('playn.core', 'Mouse/WheelEvent', 454, Lplayn_core_Mouse$Event_2_classLit);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      cause = $e0;
      $notifyEmit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw unwrap($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $notifyEmit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $notifyEmit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw unwrap($e0);
  }
}

function $reportError(this$static, message, cause){
  $notifyEmit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(239, 1, {});
var Lplayn_core_Platform_2_classLit = createForClass('playn.core', 'Platform', 239, Ljava_lang_Object_2_classLit);
function Platform$Error(){
}

defineClass(138, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass('playn.core', 'Platform/Error', 138, Ljava_lang_Object_2_classLit);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_Platform$Lifecycle();
  return initValues(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 95, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(95, 6, {3:1, 7:1, 6:1, 95:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum('playn.core', 'Platform/Lifecycle', 95, Ljava_lang_Enum_2_classLit, values_20);
function $forward(this$static, kind, isTouch, source){
  var event_0;
  if (!this$static.enabled || !this$static.events._listeners)
    return;
  event_0 = new Pointer$Event(source.flags, source.time, source.x_0, source.y_0, kind, isTouch);
  $dispatchEvent(this$static.plat, this$static.events, event_0);
}

defineClass(316, 1, {});
_.enabled = true;
var Lplayn_core_Pointer_2_classLit = createForClass('playn.core', 'Pointer', 316, Ljava_lang_Object_2_classLit);
function $onEmit_5(this$static, event_0){
  var bevent;
  if (instanceOf(event_0, 160)) {
    this$static.dragging && $forward(this$static.this$01, ($clinit_Pointer$Event$Kind() , DRAG), false, event_0);
  }
   else if (instanceOf(event_0, 124)) {
    bevent = event_0;
    if (bevent.button_0 == ($clinit_Mouse$ButtonEvent$Id() , LEFT_1)) {
      this$static.dragging = bevent.down;
      $forward(this$static.this$01, bevent.down?($clinit_Pointer$Event$Kind() , START):($clinit_Pointer$Event$Kind() , END_0), false, bevent);
    }
  }
}

function Pointer$1(this$0){
  this.this$01 = this$0;
}

defineClass(321, 547, {}, Pointer$1);
_.onEmit = function onEmit_11(event_0){
  $onEmit_5(this, event_0);
}
;
_.dragging = false;
var Lplayn_core_Pointer$1_2_classLit = createForClass('playn.core', 'Pointer/1', 321, Lreact_Slot_2_classLit);
function $onEmit_6(this$static, events){
  var event_0, event$index, event$max;
  for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
    event_0 = events[event$index];
    this$static.active == -1 && event_0.kind.isStart && (this$static.active = event_0.id_0);
    if (event_0.id_0 == this$static.active) {
      $forward(this$static.this$01, ($clinit_Pointer$Event$Kind() , initValues(getClassLiteralForArray(Lplayn_core_Pointer$Event$Kind_2_classLit, 1), $intern_1, 72, 0, [START, DRAG, END_0, CANCEL]))[event_0.kind.ordinal], true, event_0);
      event_0.kind.isEnd && (this$static.active = -1);
    }
  }
}

function Pointer$2(this$0){
  this.this$01 = this$0;
}

defineClass(322, 547, {}, Pointer$2);
_.onEmit = function onEmit_12(events){
  $onEmit_6(this, events);
}
;
_.active = -1;
var Lplayn_core_Pointer$2_2_classLit = createForClass('playn.core', 'Pointer/2', 322, Lreact_Slot_2_classLit);
function Pointer$Event(flags, time, x_0, y_0, kind, isTouch){
  Event$XY.call(this, flags, time, x_0, y_0);
  this.kind = kind;
  this.isTouch = isTouch;
}

defineClass(320, 45, $intern_37, Pointer$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_6((builder.string += ', kind=' , builder), this.kind);
  $append_8((builder.string += ', touch=' , builder), this.isTouch);
}
;
_.name_1 = function name_10(){
  return 'Pointer';
}
;
_.isTouch = false;
var Lplayn_core_Pointer$Event_2_classLit = createForClass('playn.core', 'Pointer/Event', 320, Lplayn_core_Event$XY_2_classLit);
function $clinit_Pointer$Event$Kind(){
  $clinit_Pointer$Event$Kind = emptyMethod;
  START = new Pointer$Event$Kind('START', 0, true, false);
  DRAG = new Pointer$Event$Kind('DRAG', 1, false, false);
  END_0 = new Pointer$Event$Kind('END', 2, false, true);
  CANCEL = new Pointer$Event$Kind('CANCEL', 3, false, true);
}

function Pointer$Event$Kind(enum$name, enum$ordinal, isStart, isEnd){
  Enum.call(this, enum$name, enum$ordinal);
  this.isStart = isStart;
  this.isEnd = isEnd;
}

function values_21(){
  $clinit_Pointer$Event$Kind();
  return initValues(getClassLiteralForArray(Lplayn_core_Pointer$Event$Kind_2_classLit, 1), $intern_1, 72, 0, [START, DRAG, END_0, CANCEL]);
}

defineClass(72, 6, {3:1, 7:1, 6:1, 72:1}, Pointer$Event$Kind);
_.isEnd = false;
_.isStart = false;
var CANCEL, DRAG, END_0, START;
var Lplayn_core_Pointer$Event$Kind_2_classLit = createForEnum('playn.core', 'Pointer/Event/Kind', 72, Ljava_lang_Enum_2_classLit, values_21);
defineClass(397, 563, $intern_23);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass('playn.core', 'TexturedBatch', 397, Lplayn_core_GLBatch_2_classLit);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, sr, sb);
}

function QuadBatch(gl){
  this.gl = gl;
}

defineClass(191, 397, $intern_23);
var Lplayn_core_QuadBatch_2_classLit = createForClass('playn.core', 'QuadBatch', 191, Lplayn_core_TexturedBatch_2_classLit);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE_0 = new Scale(1);
}

function $computePath(path, scale){
  var didx, scaleFactor;
  if (scale <= 1)
    return path;
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = ~~(scaleFactor / 10));
  didx = path.lastIndexOf('.');
  return didx == -1?path:path.substr(0, didx) + '@' + scaleFactor + 'x' + __substr(path, didx, path.length - didx);
}

function $getScaledResources(this$static, path){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add_4(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add_4(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add_4(rsrcs, new Scale$ScaledResource(ONE_0, path));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaled(this$static, length_0){
  return this$static.factor * length_0;
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(120, 1, {}, Scale);
_.toString$ = function toString_49(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE_0;
var Lplayn_core_Scale_2_classLit = createForClass('playn.core', 'Scale', 120, Ljava_lang_Object_2_classLit);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(147, 1, {}, Scale$ScaledResource);
_.toString$ = function toString_50(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass('playn.core', 'Scale/ScaledResource', 147, Ljava_lang_Object_2_classLit);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_0(this$static, red, green, blue, alpha_0){
  $glClearColor(this$static.batch.gl, red, green, blue, alpha_0);
  this$static.batch.gl.glc.clear(16384);
  return this$static;
}

function $combineTint(this$static, tint){
  var otint;
  otint = this$static.tint;
  tint != -1 && (this$static.tint = combine(tint, otint));
  return otint;
}

function $concatenate(this$static, xf, originX, originY){
  var txf;
  txf = this$static.lastTrans;
  multiply_0(txf, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, txf);
  (originX != 0 || originY != 0) && (txf.tx += txf.m00 * -originX + txf.m10 * -originY , txf.ty += txf.m11 * -originY + txf.m01 * -originX , txf);
  return this$static;
}

function $draw(this$static, tile, w, h){
  $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, w, h);
  return this$static;
}

function $drawLine(this$static, x0, y0, x1, y1, width_0){
  var dx, dy, length_0, temp, wx, wy, xf;
  if (x1 < x0) {
    temp = x0;
    x0 = x1;
    x1 = temp;
    temp = y0;
    y0 = y1;
    y1 = temp;
  }
  dx = x1 - x0;
  dy = y1 - y0;
  length_0 = Math.sqrt(dx * dx + dy * dy);
  wx = dx * (width_0 / 2) / length_0;
  wy = dy * (width_0 / 2) / length_0;
  xf = new AffineTransform;
  $setRotation_0(xf, Math.atan2(dy, dx));
  $setTranslation_0(xf, x0 + wy, y0 - wx);
  multiply_1(this$static.lastTrans, xf, xf);
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), xf, 0, 0, length_0, width_0);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $fillRect_0(this$static, x_0, y_0, width_0, height){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, x_0, y_0, width_0, height);
  return this$static;
}

function $pushScissorState(this$static, x_0, y_0, width_0, height){
  var pr, r;
  this$static.scissorDepth == this$static.scissors.array.length && $add_4(this$static.scissors, new Rectangle_1);
  r = $get_7(this$static.scissors, this$static.scissorDepth);
  if (this$static.scissorDepth == 0) {
    r.x_0 = x_0;
    r.y_0 = y_0;
    r.height_0 = height;
    r.width_0 = width_0;
  }
   else {
    pr = $get_7(this$static.scissors, this$static.scissorDepth - 1);
    $setLocation(r, max_1(pr.x_0, x_0), max_1(pr.y_0, y_0));
    $setSize_3(r, max_1(min_1(pr.x_0 + pr.width_0 - 1, x_0 + width_0 - 1) - r.x_0, 0), max_1(min_1(pr.y_0 + pr.height_0 - 1, y_0 + height - 1) - r.y_0, 0));
  }
  ++this$static.scissorDepth;
  return r;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  this$static.transformStack.remove_1(--tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get_7(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add_4(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_1(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setAlpha_0(this$static, alpha_0){
  var ialpha;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  this$static.tint = ialpha << 24 | this$static.tint & $intern_25;
  return this$static;
}

function $setFillColor(this$static, color_0){
  this$static.fillColor = color_0;
  return this$static;
}

function $startClipped(this$static, x_0, y_0, width_0, height){
  var r;
  this$static.batch.flush();
  r = $pushScissorState(this$static, x_0, this$static.target.this$01.viewPixelHeight - y_0 - height, width_0, height);
  $glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  this$static.scissorDepth == 1 && $enable(this$static.batch.gl.glc, 3089);
  $checkError(this$static.batch.gl);
  return !(r.width_0 <= 0 || r.height_0 <= 0);
}

function Surface(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.target = target;
  this.batch = defaultBatch;
  $add_4(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(398, 1, $intern_23, Surface);
_.close_0 = function close_7(){
}
;
_.fillColor = 0;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass('playn.core', 'Surface', 398, Ljava_lang_Object_2_classLit);
function getBounds(lines, into){
  var bounds, layout, layout$index, layout$max, theight, twidth, xAdjust;
  xAdjust = 0;
  twidth = 0;
  theight = 0;
  for (layout$index = 0 , layout$max = lines.length; layout$index < layout$max; ++layout$index) {
    layout = lines[layout$index];
    bounds = layout.bounds;
    xAdjust = max_0(xAdjust, -min_0(0, bounds.x_0));
    twidth = max_0(twidth, layout.size_0.width_0);
    layout != lines[0] && (theight += $intern_38 * layout.metrics.height_0);
    theight += $intern_39 * layout.metrics.height_0 + $descent(layout.metrics);
  }
  $setBounds(into, xAdjust, 0, xAdjust + twidth, theight);
  return into;
}

function $clinit_TextBlock$Align(){
  $clinit_TextBlock$Align = emptyMethod;
  LEFT_2 = new TextBlock$Align$1;
  CENTER = new TextBlock$Align$2;
  RIGHT_2 = new TextBlock$Align$3;
}

function TextBlock$Align(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_22(){
  $clinit_TextBlock$Align();
  return initValues(getClassLiteralForArray(Lplayn_core_TextBlock$Align_2_classLit, 1), $intern_1, 69, 0, [LEFT_2, CENTER, RIGHT_2]);
}

defineClass(69, 6, $intern_40);
var CENTER, LEFT_2, RIGHT_2;
var Lplayn_core_TextBlock$Align_2_classLit = createForEnum('playn.core', 'TextBlock/Align', 69, Ljava_lang_Enum_2_classLit, values_22);
function TextBlock$Align$1(){
  TextBlock$Align.call(this, 'LEFT', 0);
}

defineClass(522, 69, $intern_40, TextBlock$Align$1);
_.getX = function getX(lineWidth, blockWidth){
  return 0;
}
;
var Lplayn_core_TextBlock$Align$1_2_classLit = createForEnum('playn.core', 'TextBlock/Align/1', 522, Lplayn_core_TextBlock$Align_2_classLit, null);
function TextBlock$Align$2(){
  TextBlock$Align.call(this, 'CENTER', 1);
}

defineClass(523, 69, $intern_40, TextBlock$Align$2);
_.getX = function getX_0(lineWidth, blockWidth){
  return (blockWidth - lineWidth) / 2;
}
;
var Lplayn_core_TextBlock$Align$2_2_classLit = createForEnum('playn.core', 'TextBlock/Align/2', 523, Lplayn_core_TextBlock$Align_2_classLit, null);
function TextBlock$Align$3(){
  TextBlock$Align.call(this, 'RIGHT', 2);
}

defineClass(524, 69, $intern_40, TextBlock$Align$3);
_.getX = function getX_1(lineWidth, blockWidth){
  return blockWidth - lineWidth;
}
;
var Lplayn_core_TextBlock$Align$3_2_classLit = createForEnum('playn.core', 'TextBlock/Align/3', 524, Lplayn_core_TextBlock$Align_2_classLit, null);
function $equals_3(this$static, other){
  var ofmt;
  if (instanceOf(other, 130)) {
    ofmt = other;
    return (this$static.font_0 == ofmt.font_0 || !!this$static.font_0 && $equals_2(this$static.font_0, ofmt.font_0)) && this$static.antialias_0 == ofmt.antialias_0;
  }
   else {
    return false;
  }
}

function $hashCode_1(this$static){
  var hash;
  hash = this$static.antialias_0?1:0;
  !!this$static.font_0 && (hash ^= $hashCode_0(this$static.font_0));
  return hash;
}

defineClass(130, 1, {130:1});
_.equals$ = function equals_30(other){
  return $equals_3(this, other);
}
;
_.hashCode$ = function hashCode_33(){
  return $hashCode_1(this);
}
;
_.toString$ = function toString_51(){
  return '[font=' + this.font_0 + ', antialias=' + this.antialias_0 + ']';
}
;
_.antialias_0 = false;
var Lplayn_core_TextFormat_2_classLit = createForClass('playn.core', 'TextFormat', 130, Ljava_lang_Object_2_classLit);
function TextLayout(text_0, format, bounds, height){
  this.text_0 = text_0;
  this.format = format;
  this.bounds = bounds;
  this.size_0 = new Dimension_0(max_0(bounds.x_0, 0) + bounds.width_0, height);
}

defineClass(132, 1, {132:1});
var Lplayn_core_TextLayout_2_classLit = createForClass('playn.core', 'TextLayout', 132, Ljava_lang_Object_2_classLit);
function $clinit_TextWrap(){
  $clinit_TextWrap = emptyMethod;
  new TextWrap($intern_41);
}

function $hashCode_2(this$static){
  return round_int(this$static.width_0) ^ round_int(this$static.indent);
}

function TextWrap(width_0){
  $clinit_TextWrap();
  this.width_0 = width_0;
  this.indent = 0;
}

defineClass(113, 1, {113:1}, TextWrap);
_.equals$ = function equals_31(other){
  var ow;
  if (instanceOf(other, 113)) {
    ow = other;
    return this.width_0 == ow.width_0 && this.indent == ow.indent;
  }
   else {
    return false;
  }
}
;
_.hashCode$ = function hashCode_34(){
  return $hashCode_2(this);
}
;
_.indent = 0;
_.width_0 = 0;
var Lplayn_core_TextWrap_2_classLit = createForClass('playn.core', 'TextWrap', 113, Ljava_lang_Object_2_classLit);
defineClass(569, 568, {});
_.isLoaded = function isLoaded_0(){
  return true;
}
;
_.tile_0 = function tile_1(){
  return this;
}
;
_.tileAsync = function tileAsync_0(){
  return new RFuture(($clinit_AbstractValue() , new Value(new Try$Success(this))));
}
;
_.toString$ = function toString_52(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_65(0, TO_STRING_DECIMAL_PLACES) + toString_65(0, TO_STRING_DECIMAL_PLACES)) + '/' + (toString_65(1, TO_STRING_DECIMAL_PLACES) + toString_65(1, TO_STRING_DECIMAL_PLACES)) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass('playn.core', 'Tile', 569, Lplayn_core_TileSource_2_classLit);
function $addToBatch(this$static, batch, tint, tx, width_0, height){
  $addQuad_0(batch, this$static, tint, tx, 0, 0, width_0, height);
}

function $close_2(this$static){
  if (!this$static.disposed) {
    this$static.disposed = true;
    $glDeleteTexture(this$static.gfx.gl, this$static.id_0);
  }
}

function $release(this$static){
  this$static.config.managed && --this$static.refs == 0 && $close_2(this$static);
}

function $update_0(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE_0), potWidth, potHeight);
      $draw_0(image, scaled.ctx, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.glc.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(408, 569, $intern_23, Texture);
_.close_0 = function close_8(){
  $close_2(this);
}
;
_.toString$ = function toString_53(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
_.refs = 0;
var Lplayn_core_Texture_2_classLit = createForClass('playn.core', 'Texture', 408, Lplayn_core_Tile_2_classLit);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(194, 1, {}, Texture$Config);
_.toString$ = function toString_54(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass('playn.core', 'Texture/Config', 194, Ljava_lang_Object_2_classLit);
function $fragment(){
  var str;
  str = new StringBuilder_1('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & 65280) << 16;
  if ((tint & $intern_25) == $intern_25) {
    return newA | curTint & $intern_25;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & 65280) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & 65280;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, 0, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(118, 45, {33:1, 30:1, 45:1, 118:1, 43:1}, Touch$Event);
_.addFields = function addFields_7(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3($append_7($append_4($append_7($append_6((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_11(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass('playn.core', 'Touch/Event', 118, Lplayn_core_Event$XY_2_classLit);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START_0 = new Touch$Event$Kind('START', 0, true, false);
  MOVE = new Touch$Event$Kind('MOVE', 1, false, false);
  END_1 = new Touch$Event$Kind('END', 2, false, true);
  CANCEL_0 = new Touch$Event$Kind('CANCEL', 3, false, true);
}

function Touch$Event$Kind(enum$name, enum$ordinal, isStart, isEnd){
  Enum.call(this, enum$name, enum$ordinal);
  this.isStart = isStart;
  this.isEnd = isEnd;
}

function values_23(){
  $clinit_Touch$Event$Kind();
  return initValues(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 85, 0, [START_0, MOVE, END_1, CANCEL_0]);
}

defineClass(85, 6, {3:1, 7:1, 6:1, 85:1}, Touch$Event$Kind);
_.isEnd = false;
_.isStart = false;
var CANCEL_0, END_1, MOVE, START_0;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum('playn.core', 'Touch/Event/Kind', 85, Ljava_lang_Enum_2_classLit, values_23);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = narrow_short(vertIdx + indices[ii]);
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = ~~(this$static.vertPos / 12);
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = ~~(this$static.vertices.length / 12);
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initDim(S_classLit, $intern_42, 0, newElems, 7, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = ~~(this$static.vertices.length / 12);
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initDim(F_classLit, $intern_43, 0, newVerts * 12, 7, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $glBindBuffer(this$static.gl, $intern_44, this$static.verticesId);
      $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
      $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
      $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
      $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
      $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
      $glBindBuffer(this$static.gl, $intern_45, this$static.elementsId);
      $activeTexture(this$static.gl.glc, 33984);
      $glUniform1i(this$static.gl, this$static.uTexture);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_44, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_45, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  QuadBatch.call(this, gl);
  this.delayedBinding = $equals('Intel', gl.glc.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initDim(F_classLit, $intern_43, 0, 8, 7, 1);
  this.vertices = initDim(F_classLit, $intern_43, 0, 768, 7, 1);
  this.elements = initDim(S_classLit, $intern_42, 0, 96, 7, 1);
  ids = initDim(I_classLit, $intern_30, 0, 2, 7, 1);
  $genObjects_0(gl, ids, ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_7(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(193, 191, $intern_23, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_28;
  stables_0[7] = tint & $intern_28;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_7(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_7(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_7(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_7(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || ($glBindBuffer(this.gl, $intern_44, this.verticesId) , $glBindVertAttrib(this, this.aMatrix, 4, 0) , $glBindVertAttrib(this, this.aTranslation, 2, 16) , $glBindVertAttrib(this, this.aColor, 2, 24) , $glBindVertAttrib(this, this.aPosition, 2, 32) , $glBindVertAttrib(this, this.aTexCoord, 2, 40) , $glBindBuffer(this.gl, $intern_45, this.elementsId) , $activeTexture(this.gl.glc, 33984) , $glUniform1i(this.gl, this.uTexture));
  $checkError(this.gl);
}
;
_.close_0 = function close_9(){
  $close_0(this);
  $close_1(this.program);
  $deleteObjects_0(this.gl, initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [this.verticesId, this.elementsId]), ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_0(){
  $flush_0(this);
}
;
_.toString$ = function toString_55(){
  return 'tris/' + ~~(this.elements.length / QUAD_INDICES.length);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass('playn.core', 'TriangleBatch', 193, Lplayn_core_QuadBatch_2_classLit);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  QuadBatch.call(this, gl);
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3);
  this.maxQuads = ~~(maxVecs / 3);
  this.program = new GLProgram(gl, $replace_2($replace_2('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initDim(S_classLit, $intern_42, 0, this.maxQuads * 4 * 3, 7, 1);
  elems = initDim(S_classLit, $intern_42, 0, this.maxQuads * 6, 7, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = narrow_short(ii * 4);
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initDim(F_classLit, $intern_43, 0, this.maxQuads * 3 * 4, 7, 1);
  ids = initDim(I_classLit, $intern_30, 0, 2, 7, 1);
  $genObjects_0(gl, ids, ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_44, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_44, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_45, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_45, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.glc.getParameter(36347) - 3;
  glErr = gl.glc.getError();
  if (glErr != 0)
    throw new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr);
  return maxVecs;
}

defineClass(192, 191, $intern_23, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_28;
  this.data_0[pos++] = tint & $intern_28;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_44, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_45, this.elementsId);
  $activeTexture(this.gl.glc, 33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.close_0 = function close_10(){
  $close_0(this);
  $close_1(this.program);
  $deleteObjects_0(this.gl, initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [this.verticesId, this.elementsId]), ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_1(){
  $flush_1(this);
}
;
_.toString$ = function toString_56(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass('playn.core', 'UniformQuadBatch', 192, Lplayn_core_QuadBatch_2_classLit);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); $hasNext_0(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext_0(entry$iterator)) , entry$iterator.last = entry$iterator.current , entry$iterator.current.next_0());
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static, path){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE_0);
  rsrcs = $getScaledResources(assetScale, path);
  return $getImage_0(this$static, (checkElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + path;
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = $moduleBase;
  this.plat = plat;
}

defineClass(245, 546, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass('playn.html', 'HtmlAssets', 245, Lplayn_core_Assets_2_classLit);
function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(299, 555, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass('playn.html', 'HtmlAudio', 299, Lplayn_core_Audio_2_classLit);
function $clear_1(this$static){
  return $clearRect_0(this$static, this$static.width_0, this$static.height_0);
}

function $clearRect_0(this$static, width_0, height){
  $clearRect(this$static.ctx, 0, 0, width_0, height);
  return this$static;
}

function $convertLineCap(cap){
  switch (cap.ordinal) {
    case 0:
      return $clinit_Context2d$LineCap() , BUTT;
    case 1:
      return $clinit_Context2d$LineCap() , ROUND;
    case 2:
      return $clinit_Context2d$LineCap() , SQUARE;
  }
  return $clinit_Context2d$LineCap() , SQUARE;
}

function $convertLineJoin(join_0){
  switch (join_0.ordinal) {
    case 0:
      return $clinit_Context2d$LineJoin() , BEVEL;
    case 1:
      return $clinit_Context2d$LineJoin() , MITER;
    case 2:
      return $clinit_Context2d$LineJoin() , ROUND_0;
  }
  return $clinit_Context2d$LineJoin() , ROUND_0;
}

function $createGradient(this$static, config){
  return new HtmlGradient(this$static.ctx, config);
}

function $fillRect_1(this$static, x_0, y_0, w, h){
  $fillRect(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $fillRoundRect(this$static, x_0, y_0, w, h, radius){
  var midx, midy, maxx, maxy;
  midx = x_0 + w / 2;
  midy = y_0 + h / 2;
  maxx = x_0 + w;
  maxy = y_0 + h;
  this$static.ctx.beginPath();
  $moveTo(this$static.ctx, x_0, midy);
  $arcTo(this$static.ctx, x_0, y_0, midx, y_0, radius);
  $arcTo(this$static.ctx, maxx, y_0, maxx, midy, radius);
  $arcTo(this$static.ctx, maxx, maxy, midx, maxy, radius);
  $arcTo(this$static.ctx, x_0, maxy, x_0, midy, radius);
  this$static.ctx.closePath();
  this$static.ctx.fill();
  return this$static;
}

function $fillText_0(this$static, layout, x_0, y_0){
  $fill(layout, this$static.ctx, x_0, y_0);
  return this$static;
}

function $setFillColor_0(this$static, color_0){
  $setFillStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function $setFillGradient(this$static, gradient){
  $setFillStyleWeb(this$static.ctx, gradient.gradient);
  return this$static;
}

function $setLineCap_0(this$static, cap){
  $setLineCap(this$static.ctx, $convertLineCap(cap).value_0);
  return this$static;
}

function $setLineJoin_0(this$static, join_0){
  $setLineJoin(this$static.ctx, $convertLineJoin(join_0).value_0);
  return this$static;
}

function $setStrokeColor(this$static, color_0){
  $setStrokeStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function $setStrokeWidth(this$static, w){
  $setLineWidth(this$static.ctx, w);
  return this$static;
}

function $strokeText_0(this$static, layout, x_0, y_0){
  $stroke(layout, this$static.ctx, x_0, y_0);
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_0.call(this, image);
  this.ctx = $getContext2d(image.canvas);
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(455, 436, $intern_23, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass('playn.html', 'HtmlCanvas', 455, Lplayn_core_Canvas_2_classLit);
function $clinit_HtmlFont(){
  $clinit_HtmlFont = emptyMethod;
  DEFAULT_0 = new Font_0('sans-serif', ($clinit_Font$Style() , PLAIN), 12);
}

function toCSS(font){
  $clinit_HtmlFont();
  var name_0, style;
  name_0 = font.name_0;
  !$equals(name_0.substr(0, 1), '"') && name_0.indexOf(' ') != -1 && (name_0 = '"' + name_0 + '"');
  style = '';
  switch (font.style_0.ordinal) {
    case 1:
      style = 'bold';
      break;
    case 2:
      style = 'italic';
      break;
    case 3:
      style = 'bold italic';
  }
  return style + ' ' + font.size_0 + 'px ' + name_0;
}

var DEFAULT_0;
function $adjustWidth(this$static, width_0){
  switch (this$static.font_0.style_0.ordinal) {
    case 2:
      return width_0 + this$static.emwidth / 8;
    case 3:
      return width_0 + this$static.emwidth / 6;
    default:return width_0;
  }
}

function $descent(this$static){
  return this$static.height_0 - $intern_39 * this$static.height_0;
}

function HtmlFontMetrics(font, height, emwidth){
  this.font_0 = font;
  this.height_0 = height;
  this.emwidth = emwidth;
}

defineClass(525, 1, {}, HtmlFontMetrics);
_.emwidth = 0;
_.height_0 = 0;
var Lplayn_html_HtmlFontMetrics_2_classLit = createForClass('playn.html', 'HtmlFontMetrics', 525, Ljava_lang_Object_2_classLit);
function $createObject(this$static, object, type_0){
  $push(this$static.webGLObjects, object);
  $push_0(this$static.webGLObjectTypes, type_0.ordinal);
  return this$static.webGLObjects.length - 1;
}

function $deleteObject(this$static, index_0, type_0){
  var object;
  object = this$static.webGLObjects[index_0];
  this$static.webGLObjects[index_0] = null;
  $set(this$static.webGLObjectTypes, index_0, 0);
  switch (type_0.ordinal) {
    case 1:
      $deleteBuffer(this$static.glc, object);
      break;
    case 2:
      $deleteFramebuffer(this$static.glc, object);
      break;
    case 3:
      $deleteProgram(this$static.glc, object);
      break;
    case 4:
      $deleteRenderbuffer(this$static.glc, object);
      break;
    case 5:
      $deleteShader(this$static.glc, object);
      break;
    case 6:
      $deleteTexture(this$static.glc, object);
  }
}

function $deleteObjects(this$static, indices, type_0){
  var i, index_0;
  for (i = 0; i < 1; i++) {
    index_0 = $get_4(indices, indices.position_0 + i);
    $deleteObject(this$static, index_0, type_0);
  }
}

function $deleteObjects_0(this$static, indices, type_0){
  var i;
  for (i = 0; i < 2; i++) {
    $deleteObject(this$static, indices[i], type_0);
  }
}

function $genObject(this$static, type_0){
  switch (type_0.ordinal) {
    case 1:
      return this$static.glc.createBuffer();
    case 2:
      return this$static.glc.createFramebuffer();
    case 3:
      return this$static.glc.createProgram();
    case 4:
      return this$static.glc.createRenderbuffer();
    case 6:
      return this$static.glc.createTexture();
    default:throw new RuntimeException_0('genObject(s) not supported for type ' + type_0);
  }
}

function $genObjects(this$static, names, type_0){
  var i, object;
  for (i = 0; i < 1; i++) {
    object = $genObject(this$static, type_0);
    $put_2(names, i + names.position_0, $createObject(this$static, object, type_0));
  }
}

function $genObjects_0(this$static, names, type_0){
  var i, object;
  for (i = 0; i < 2; i++) {
    object = $genObject(this$static, type_0);
    names[i] = $createObject(this$static, object, type_0);
  }
}

function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 173)) {
    throw new RuntimeException_0('Native buffer required ' + buffer);
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create_1(webGLArray.buffer, byteOffset, ~~(byteSize / 4));
    case 5121:
      return create_6(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_5(webGLArray.buffer, byteOffset, ~~(byteSize / 2));
    case 5124:
      return create_3(webGLArray.buffer, byteOffset, ~~(byteSize / 4));
    case 5122:
      return create_2(webGLArray.buffer, byteOffset, ~~(byteSize / 2));
    case 5120:
      return create_4(webGLArray.buffer, byteOffset, byteSize);
    default:throw new IllegalArgumentException_0('Type: ' + type_0);
  }
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.webGLObjects[buffer];
  target == $intern_44?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_45?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.glc, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.glc, 36160, this$static.webGLObjects[0]);
}

function $glBindTexture(this$static, textureId){
  $bindTexture(this$static.glc, 3553, this$static.webGLObjects[textureId]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_44) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.glc, $intern_44, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_45) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.glc, $intern_45, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.glc, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glClearColor(this$static, f, g, h, i){
  $clearColor(this$static.glc, f, g, h, i);
}

function $glCompileShader(this$static, shader){
  $compileShader(this$static.glc, this$static.webGLObjects[shader]);
}

function $glCreateShader(this$static, type_0){
  return $createObject(this$static, $createShader(this$static.glc, type_0), ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.glc, $intern_45, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.glc, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGetAttribLocation(this$static, program, name_0){
  return $getAttribLocation(this$static.glc, this$static.webGLObjects[program], name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.glc, this$static.webGLObjects[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.glc, this$static.webGLObjects[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  return $createObject(this$static, $getUniformLocation(this$static.glc, this$static.webGLObjects[program], name_0), ($clinit_HtmlGL20$WebGLObjectType() , UNIFORM_LOCATION));
}

function $glScissor(this$static, i, j, width_0, height){
  $scissor(this$static.glc, i, j, width_0, height);
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.glc, this$static.webGLObjects[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.glc, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.glc, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.glc, this$static.webGLObjects[location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.glc, this$static.webGLObjects[location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.glc, this$static.webGLObjects[location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.glc, this$static.webGLObjects[location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  $useProgram(this$static.glc, this$static.webGLObjects[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.glc, $intern_44, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.glc, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.glc, 0, 0, w, h);
}

function $init(this$static, glc){
  var data_0, ii;
  glc.pixelStorei(37441, 1);
  this$static.glc = glc;
  $push(this$static.webGLObjects, null);
  $push_0(this$static.webGLObjectTypes, 0);
  glc.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = glc.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.glc, i):$disableVertexAttribArray(this$static.glc, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.glc, $intern_44, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.glc, $intern_44, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.nullMethod();
          $bufferData(this$static.glc, $intern_44, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.nullMethod();
          $bufferData(this$static.glc, $intern_44, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.vertexAttribArrayState = initDim(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_1, 146, 5, 0, 1);
  this.webGLObjects = [];
  this.webGLObjectTypes = [];
}

function getElementSize_3(){
  throw new RuntimeException_0('Unrecognized buffer type: ' + null.nullMethod());
}

defineClass(357, 356, {}, HtmlGL20);
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass('playn.html', 'HtmlGL20', 357, Lplayn_core_GL20_2_classLit);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(359, 358, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass('playn.html', 'HtmlGL20/1', 359, Lplayn_core_GL20$Buffers_2_classLit);
function HtmlGL20$VertexAttribArrayState(){
}

defineClass(146, 1, {146:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass('playn.html', 'HtmlGL20/VertexAttribArrayState', 146, Ljava_lang_Object_2_classLit);
function $clinit_HtmlGL20$WebGLObjectType(){
  $clinit_HtmlGL20$WebGLObjectType = emptyMethod;
  NULL = new HtmlGL20$WebGLObjectType('NULL', 0);
  BUFFER = new HtmlGL20$WebGLObjectType('BUFFER', 1);
  FRAME_BUFFER = new HtmlGL20$WebGLObjectType('FRAME_BUFFER', 2);
  PROGRAM = new HtmlGL20$WebGLObjectType('PROGRAM', 3);
  RENDER_BUFFER = new HtmlGL20$WebGLObjectType('RENDER_BUFFER', 4);
  SHADER = new HtmlGL20$WebGLObjectType('SHADER', 5);
  TEXTURE = new HtmlGL20$WebGLObjectType('TEXTURE', 6);
  UNIFORM_LOCATION = new HtmlGL20$WebGLObjectType('UNIFORM_LOCATION', 7);
}

function HtmlGL20$WebGLObjectType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_24(){
  $clinit_HtmlGL20$WebGLObjectType();
  return initValues(getClassLiteralForArray(Lplayn_html_HtmlGL20$WebGLObjectType_2_classLit, 1), $intern_1, 47, 0, [NULL, BUFFER, FRAME_BUFFER, PROGRAM, RENDER_BUFFER, SHADER, TEXTURE, UNIFORM_LOCATION]);
}

defineClass(47, 6, {3:1, 7:1, 6:1, 47:1}, HtmlGL20$WebGLObjectType);
var BUFFER, FRAME_BUFFER, NULL, PROGRAM, RENDER_BUFFER, SHADER, TEXTURE, UNIFORM_LOCATION;
var Lplayn_html_HtmlGL20$WebGLObjectType_2_classLit = createForEnum('playn.html', 'HtmlGL20/WebGLObjectType', 47, Ljava_lang_Enum_2_classLit, values_24);
function HtmlGradient(ctx, config){
  var ii;
  this.gradient = $createLinearGradient(ctx, config.x0, config.y0, config.x1, config.y1);
  for (ii = 0; ii < config.colors.length; ++ii) {
    $addColorStop(this.gradient, config.positions[ii], cssColorString(config.colors[ii]));
  }
}

defineClass(528, 591, {}, HtmlGradient);
var Lplayn_html_HtmlGradient_2_classLit = createForClass('playn.html', 'HtmlGradient', 528, Lplayn_core_Gradient_2_classLit);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  $setWidth(elem, pixelWidth);
  $setHeight(elem, pixelHeight);
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $getFontMetrics(this$static, font){
  var emwidth, height, metrics;
  metrics = $get_6(this$static.fontMetrics, font);
  if (!metrics) {
    this$static.measureElement.style['fontSize'] = font.size_0 + ($clinit_Style$Unit() , 'px');
    this$static.measureElement.style['fontWeight'] = ($clinit_Style$FontWeight() , 'normal');
    this$static.measureElement.style['fontStyle'] = ($clinit_Style$FontStyle() , 'normal');
    $setPropertyImpl(this$static.measureElement.style, 'fontFamily', font.name_0);
    $setInnerText(this$static.measureElement, 'THEQUICKBROWNFOXJUMPEDOVERTHELAZYDOGthequickbrownfoxjumpedoverthelazydog_-+!.,[]0123456789');
    switch (font.style_0.ordinal) {
      case 1:
        this$static.measureElement.style['fontWeight'] = 'bold';
        break;
      case 2:
        this$static.measureElement.style['fontStyle'] = 'italic';
        break;
      case 3:
        this$static.measureElement.style['fontWeight'] = 'bold';
        this$static.measureElement.style['fontStyle'] = 'italic';
    }
    height = $getSubPixelOffsetHeight(this$static.measureElement) | 0;
    $setInnerText(this$static.measureElement, 'm');
    emwidth = $getSubPixelOffsetWidth(this$static.measureElement) | 0;
    metrics = new HtmlFontMetrics(font, height, emwidth);
    $put_4(this$static.fontMetrics, font, metrics);
  }
  return metrics;
}

function $screenSize(this$static){
  this$static.screenSize.width_0 = $doc.documentElement.clientWidth | 0;
  this$static.screenSize.height_0 = $doc.documentElement.clientHeight | 0;
  return this$static.screenSize;
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set_5(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  this.fontMetrics = new HashMap;
  this.mousePoint = new Point;
  this.screenSize = new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  this.dummyCtx = $getContext2d(this.dummyCanvas);
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, $getSubPixelOffsetWidth(root) | 0, $getSubPixelOffsetHeight(root) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw new RuntimeException_0('Unable to create GL context');
  $init(this.gl, glc);
}

function cssColorString(color_0){
  var a, b, g, r;
  a = (color_0 >> 24 & 255) / 255;
  r = color_0 >> 16 & 255;
  g = color_0 >> 8 & 255;
  b = color_0 & 255;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

defineClass(278, 277, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass('playn.html', 'HtmlGraphics', 278, Lplayn_core_Graphics_2_classLit);
function $draw_0(this$static, ctx, width_0, height){
  $drawImage(ctx, this$static.img, 0, 0, width_0, height);
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, new RPromise, scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    $updateAndNotify_0(pstate._result, new Try$Success(this), false);
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, pstate), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this, pstate), false);
  }
}

defineClass(205, 204, {}, HtmlImage, HtmlImage_0);
_.toString$ = function toString_57(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass('playn.html', 'HtmlImage', 205, Lplayn_core_ImageImpl_2_classLit);
function HtmlImage$1(this$0, val$pstate){
  this.this$01 = this$0;
  this.val$pstate2 = val$pstate;
}

defineClass(443, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  this.this$01.pixelWidth = this.this$01.img.width;
  this.this$01.pixelHeight = this.this$01.img.height;
  $succeed(this.val$pstate2, this.this$01);
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass('playn.html', 'HtmlImage/1', 443, Ljava_lang_Object_2_classLit);
function HtmlImage$2(this$0, val$pstate){
  this.this$01 = this$0;
  this.val$pstate2 = val$pstate;
}

defineClass(444, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail(this.val$pstate2, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass('playn.html', 'HtmlImage/2', 444, Ljava_lang_Object_2_classLit);
function $dispatch_0(this$static, event_0, nevent){
  try {
    $setFlag_0(event_0, modifierFlags($eventGetAltKey(nevent), $eventGetCtrlKey(nevent), $eventGetMetaKey(nevent), $eventGetShiftKey(nevent)));
    $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
  }
}

function $dispatch_1(this$static, event_0, nevent){
  try {
    $setFlag_0(event_0, modifierFlags($eventGetAltKey(nevent), $eventGetCtrlKey(nevent), $eventGetMetaKey(nevent), $eventGetShiftKey(nevent)));
    $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  try {
    $dispatchEvent(this$static.plat, this$static.touchEvents, events);
  }
   finally {
    for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
      event_0 = events[event$index];
      (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initDim(Lplayn_core_Touch$Event_2_classLit, $intern_1, 118, nativeTouchesLen, 0, 1);
  time = now_2();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_1;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE_0;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_1;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ($getSubPixelScrollTop(target) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN_0;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT_0;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT_0;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP_0;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN;
  }
}

defineClass(286, 285, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass('playn.html', 'HtmlInput', 286, Lplayn_core_Input_2_classLit);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(287, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode($eventGetKeyCode(nevent));
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass('playn.html', 'HtmlInput/1', 287, Ljava_lang_Object_2_classLit);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(296, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START_0), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass('playn.html', 'HtmlInput/10', 296, Ljava_lang_Object_2_classLit);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(297, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass('playn.html', 'HtmlInput/11', 297, Ljava_lang_Object_2_classLit);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(298, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_1), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass('playn.html', 'HtmlInput/12', 298, Ljava_lang_Object_2_classLit);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(141, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass('playn.html', 'HtmlInput/1XYEventHandler', 141, Ljava_lang_Object_2_classLit);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(182, 141, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_2(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set_5(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass('playn.html', 'HtmlInput/1MoveEventHandler', 182, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(288, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_28), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass('playn.html', 'HtmlInput/2', 288, Ljava_lang_Object_2_classLit);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(289, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode($eventGetKeyCode(nevent));
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass('playn.html', 'HtmlInput/3', 289, Ljava_lang_Object_2_classLit);
function HtmlInput$4(){
}

defineClass(290, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  $eventPreventDefault(evt);
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass('playn.html', 'HtmlInput/4', 290, Ljava_lang_Object_2_classLit);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(291, 141, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass('playn.html', 'HtmlInput/5', 291, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(292, 141, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass('playn.html', 'HtmlInput/6', 292, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(293, 182, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass('playn.html', 'HtmlInput/7', 293, Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(294, 182, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass('playn.html', 'HtmlInput/8', 294, Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(295, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass('playn.html', 'HtmlInput/9', 295, Ljava_lang_Object_2_classLit);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(59, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass('playn.html', 'HtmlInput/EventCloseHandler', 59, Ljava_lang_Object_2_classLit);
defineClass(276, 275, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass('playn.html', 'HtmlLog', 276, Lplayn_core_Log_2_classLit);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(346, 276, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass('playn.html', 'HtmlLogSimple', 346, Lplayn_html_HtmlLog_2_classLit);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick(this$static){
  return round_int(now_2() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info_0(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw new RuntimeException_1(e);
    }
     else 
      throw unwrap($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_2(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(240, 239, {}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$3(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass('playn.html', 'HtmlPlatform', 240, Lplayn_core_Platform_2_classLit);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(242, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass('playn.html', 'HtmlPlatform/1', 242, Ljava_lang_Object_2_classLit);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(243, 1, {}, HtmlPlatform$2);
_.run = function run_2(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass('playn.html', 'HtmlPlatform/2', 243, Ljava_lang_Object_2_classLit);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(244, 1, {}, HtmlPlatform$3);
_.run = function run_3(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass('playn.html', 'HtmlPlatform/3', 244, Ljava_lang_Object_2_classLit);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(241, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass('playn.html', 'HtmlPlatform/Config', 241, Ljava_lang_Object_2_classLit);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(300, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass('playn.html', 'HtmlStorage', 300, Ljava_lang_Object_2_classLit);
function $fill(this$static, ctx, x_0, y_0){
  configContext(ctx, this$static.format);
  $fillText(ctx, this$static.text_0, x_0, y_0);
}

function $stroke(this$static, ctx, x_0, y_0){
  configContext(ctx, this$static.format);
  $strokeText(ctx, this$static.text_0, x_0, y_0);
}

function HtmlTextLayout(text_0, format, metrics, width_0){
  TextLayout.call(this, text_0, format, new Rectangle_0(0, 0, $adjustWidth(metrics, width_0), metrics.height_0), $intern_39 * metrics.height_0 + (metrics.height_0 - $intern_39 * metrics.height_0));
  this.metrics = metrics;
}

function configContext(ctx, format){
  var font;
  font = !format.font_0?($clinit_HtmlFont() , DEFAULT_0):format.font_0;
  $setFont(ctx, toCSS(font));
  $setTextBaseline(ctx, ($clinit_Context2d$TextBaseline() , TOP).value_0);
}

function layoutText(gfx, ctx, text_0, format){
  var metrics, width_0;
  metrics = $getFontMetrics(gfx, !format.font_0?($clinit_HtmlFont() , DEFAULT_0):format.font_0);
  configContext(ctx, format);
  width_0 = ctx.measureText(text_0).width;
  return new HtmlTextLayout(text_0, format, metrics, width_0);
}

function layoutText_0(gfx, ctx, text_0, format, wrap){
  var idx, layouts, line, line$array, line$index, line$max, metrics, words;
  metrics = $getFontMetrics(gfx, !format.font_0?($clinit_HtmlFont() , DEFAULT_0):format.font_0);
  configContext(ctx, format);
  layouts = new ArrayList;
  text_0 = $replace_1($replace_2(text_0, '\r\n', '\n'), 13, 10);
  for (line$array = $split(text_0, '\\n', 0) , line$index = 0 , line$max = line$array.length; line$index < line$max; ++line$index) {
    line = line$array[line$index];
    words = $split(line, '\\s', 0);
    for (idx = 0; idx < words.length;) {
      idx = measureLine(ctx, format, wrap, metrics, words, idx, layouts);
    }
  }
  return $toArray_2(layouts, initDim(Lplayn_core_TextLayout_2_classLit, $intern_1, 132, layouts.array.length, 0, 1));
}

function measureLine(ctx, format, wrap, metrics, words, idx, layouts){
  var lastIdx, line, lineWidth, nline, nlineWidth, remainder, startIdx;
  line = words[idx++];
  startIdx = idx;
  for (; idx < words.length; idx++) {
    nline = line + ' ' + words[idx];
    if (nline.length * metrics.emwidth > wrap.width_0)
      break;
    line = nline;
  }
  lineWidth = ctx.measureText(line).width;
  if (lineWidth < wrap.width_0) {
    for (; idx < words.length; idx++) {
      nline = line + ' ' + words[idx];
      nlineWidth = ctx.measureText(nline).width;
      if (nlineWidth > wrap.width_0)
        break;
      line = nline;
      lineWidth = nlineWidth;
    }
  }
  while (lineWidth > wrap.width_0 && idx > startIdx + 1) {
    line = $substring_0(line, 0, line.length - words[--idx].length - 1);
    lineWidth = ctx.measureText(line).width;
  }
  if (lineWidth > wrap.width_0) {
    remainder = new StringBuilder;
    while (lineWidth > wrap.width_0 && line.length > 1) {
      lastIdx = line.length - 1;
      $insert(remainder, valueOf_1(line.charCodeAt(lastIdx)));
      line = line.substr(0, lastIdx);
      lineWidth = ctx.measureText(line).width;
    }
    words[--idx] = remainder.string;
  }
  $add_4(layouts, new HtmlTextLayout(line, format, metrics, lineWidth));
  return idx;
}

defineClass(229, 132, {132:1}, HtmlTextLayout);
var Lplayn_html_HtmlTextLayout_2_classLit = createForClass('playn.html', 'HtmlTextLayout', 229, Lplayn_core_TextLayout_2_classLit);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals('check', getParameter('glerrors'));
  $equals('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals('canvas', renderer)) {
    return 1;
  }
   else if ($equals('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $$init_2(this$static){
  this$static.forceWidth = -1;
  this$static.forceHeight = -1;
}

function $setSize_0(this$static, width_0, height){
  this$static.forceWidth = width_0;
  this$static.forceHeight = height;
  this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function $setTile(this$static, tile){
  if (this$static.tile != tile) {
    !!this$static.tile && $release(this$static.tile);
    this$static.tile = tile;
    this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
    !!tile && tile.config.managed && ++tile.refs;
  }
  return this$static;
}

function ImageLayer(tile){
  Layer.call(this);
  $$init_2(this);
  this.setTile(tile);
}

function ImageLayer_0(source){
  Layer.call(this);
  $$init_2(this);
  source.isLoaded()?this.setTile(source.tile_0()):$onSuccess(source.tileAsync(), new ImageLayer$1(this));
}

defineClass(37, 17, $intern_26, ImageLayer, ImageLayer_0);
_.close_0 = function close_11(){
  !!this.parent_0 && $remove_8(this.parent_0, this);
  $setState(this, ($clinit_Layer$State() , DISPOSED));
  this.setTile(null);
}
;
_.height_1 = function height_1(){
  if (this.forceHeight >= 0)
    return this.forceHeight;
  return !this.tile?0:this.tile.displayHeight;
}
;
_.paintImpl = function paintImpl_0(surf){
  var dheight, dwidth;
  if (this.tile) {
    dwidth = this.width_1();
    dheight = this.height_1();
    $draw(surf, this.tile, dwidth, dheight);
  }
}
;
_.setTile = function setTile(tile){
  return $setTile(this, tile);
}
;
_.width_1 = function width_2(){
  if (this.forceWidth >= 0)
    return this.forceWidth;
  return !this.tile?0:this.tile.displayWidth;
}
;
_.forceHeight = 0;
_.forceWidth = 0;
var Lplayn_scene_ImageLayer_2_classLit = createForClass('playn.scene', 'ImageLayer', 37, Lplayn_scene_Layer_2_classLit);
function $close_3(this$static){
  !!this$static.parent_0 && $remove_8(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
  $setTile_0(this$static, null);
  !!this$static.canvas && (this$static.canvas = null);
}

function $end_1(this$static){
  var image, tex;
  tex = this$static.tile;
  image = this$static.canvas.image;
  !!tex && tex.pixelWidth == image.pixelWidth && tex.pixelHeight == image.pixelHeight?$update_0(tex, image):$setTile(this$static, $createTexture_0(this$static.canvas.image, ($clinit_Texture$Config() , DEFAULT)));
}

function $setTile_0(this$static, tile){
  if (!tile || !!tile)
    return $setTile(this$static, tile);
  else 
    throw new UnsupportedOperationException;
}

function CanvasLayer(gfx, width_0, height){
  Layer.call(this);
  $$init_2(this);
  this.gfx = gfx;
  this.canvas = $createCanvas(this.gfx, width_0, height);
}

defineClass(520, 37, $intern_26, CanvasLayer);
_.close_0 = function close_12(){
  $close_3(this);
}
;
_.height_1 = function height_2(){
  return this.forceHeight < 0?this.canvas.height_0:this.forceHeight;
}
;
_.setTile = function setTile_0(tile){
  return $setTile_0(this, tile);
}
;
_.width_1 = function width_3(){
  return this.forceWidth < 0?this.canvas.width_0:this.forceWidth;
}
;
var Lplayn_scene_CanvasLayer_2_classLit = createForClass('playn.scene', 'CanvasLayer', 520, Lplayn_scene_ImageLayer_2_classLit);
function $setSize_1(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
  this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

defineClass(323, 17, $intern_26);
_.disableClip_0 = function disableClip(){
  return false;
}
;
_.height_1 = function height_3(){
  return this.height_0;
}
;
_.paintImpl = function paintImpl_1(surf){
  var nonEmpty, originX, originY, tx, r;
  if (this.disableClip_0())
    this.paintClipped(surf);
  else {
    tx = surf.lastTrans;
    originX = $originX(this);
    originY = $originY(this);
    tx.tx += tx.m00 * originX + tx.m10 * originY;
    tx.ty += tx.m11 * originY + tx.m01 * originX;
    $transform_0(tx, $set_5(this.pos, -originX, -originY), this.pos);
    $transform_1(tx, $set_6(this.size_0, this.width_0, this.height_0), this.size_0);
    tx.tx += tx.m00 * -originX + tx.m10 * -originY;
    tx.ty += tx.m11 * -originY + tx.m01 * -originX;
    nonEmpty = $startClipped(surf, round_int(this.pos.x_0), round_int(this.pos.y_0), round_0(abs_0(this.size_0.x_0)), round_0(abs_0(this.size_0.y_0)));
    try {
      nonEmpty && this.paintClipped(surf);
    }
     finally {
      surf.batch.flush();
      r = (--surf.scissorDepth , surf.scissorDepth == 0?null:$get_7(surf.scissors, surf.scissorDepth - 1));
      !r?$disable(surf.batch.gl.glc, 3089):$glScissor(surf.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
      $checkError(surf.batch.gl);
    }
  }
}
;
_.width_1 = function width_4(){
  return this.width_0;
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_scene_ClippedLayer_2_classLit = createForClass('playn.scene', 'ClippedLayer', 323, Lplayn_scene_Layer_2_classLit);
function $add_6(this$static, child){
  var count, index_0, parent_0;
  parent_0 = child.parent_0;
  if (parent_0 == this$static)
    return;
  count = this$static.children.array.length;
  count == 0 || $get_7(this$static.children, count - 1).depth <= child.depth?(index_0 = count):(index_0 = $findInsertion(this$static, child.depth));
  !!parent_0 && $remove_8(parent_0, child);
  $add_3(this$static.children, index_0, child);
  child.parent_0 = this$static;
  maskUndefined(this$static.state._value) === maskUndefined(($clinit_Layer$State() , ADDED)) && child.onAdd_0();
  $isSet(child, ($clinit_Layer$Flag() , INTERACTIVE)) && $setInteractive(this$static, true);
}

function $addAt(this$static, child, tx, ty){
  $add_6(this$static, ($setTranslation_0(child.transform, tx, ty) , child));
}

function $childAt(this$static, index_0){
  return $get_7(this$static.children, index_0);
}

function $close_4(this$static){
  !!this$static.parent_0 && $remove_8(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
  $disposeAll(this$static);
}

function $depthChanged(this$static, child, oldDepth){
  var leftCorrect, newDepth, newIndex, oldIndex, rightCorrect;
  oldIndex = $findChild(this$static, child, oldDepth);
  newDepth = child.depth;
  leftCorrect = oldIndex == 0 || $get_7(this$static.children, oldIndex - 1).depth <= newDepth;
  rightCorrect = oldIndex == this$static.children.array.length - 1 || $get_7(this$static.children, oldIndex + 1).depth >= newDepth;
  if (leftCorrect && rightCorrect) {
    return oldIndex;
  }
  this$static.children.remove_1(oldIndex);
  newIndex = $findInsertion(this$static, newDepth);
  $add_3(this$static.children, newIndex, child);
  return newIndex;
}

function $disposeAll(this$static){
  var child, child$index, child$max, toDispose;
  toDispose = $toArray_2(this$static.children, initDim(Lplayn_scene_Layer_2_classLit, $intern_1, 17, this$static.children.array.length, 0, 1));
  $removeAll(this$static);
  for (child$index = 0 , child$max = toDispose.length; child$index < child$max; ++child$index) {
    child = toDispose[child$index];
    child.close_0();
  }
}

function $findChild(this$static, child, depth){
  var c, ii, ii0, ll, startIdx;
  startIdx = $findInsertion(this$static, depth);
  for (ii0 = startIdx - 1; ii0 >= 0; ii0--) {
    c = $get_7(this$static.children, ii0);
    if (c == child) {
      return ii0;
    }
    if (c.depth != depth) {
      break;
    }
  }
  for (ii = startIdx , ll = this$static.children.array.length; ii < ll; ii++) {
    c = $get_7(this$static.children, ii);
    if (c == child) {
      return ii;
    }
    if (c.depth != depth) {
      break;
    }
  }
  return -1;
}

function $findInsertion(this$static, depth){
  var high, low, mid, midDepth;
  low = 0;
  high = this$static.children.array.length - 1;
  while (low <= high) {
    mid = low + high >>> 1;
    midDepth = $get_7(this$static.children, mid).depth;
    if (depth > midDepth) {
      low = mid + 1;
    }
     else if (depth < midDepth) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return low;
}

function $hitTestDefault(this$static, point){
  var child, ii, l, sawInteractiveChild, x_0, y_0;
  x_0 = point.x_0;
  y_0 = point.y_0;
  sawInteractiveChild = false;
  for (ii = this$static.children.array.length - 1; ii >= 0; ii--) {
    child = $get_7(this$static.children, ii);
    if (!$isSet(child, ($clinit_Layer$Flag() , INTERACTIVE)))
      continue;
    sawInteractiveChild = true;
    if (!$isSet(child, VISIBLE_1))
      continue;
    try {
      $inverseTransform($transform(child), $set_5(point, x_0, y_0), point);
      point.x_0 += $originX(child);
      point.y_0 += $originY(child);
      l = !child.hitTester?child.hitTestDefault(point):child.hitTester.hitTest(child, point);
      if (l)
        return l;
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (instanceOf($e0, 165)) {
        continue;
      }
       else 
        throw unwrap($e0);
    }
  }
  !sawInteractiveChild && !(!!this$static.events && !!this$static.events._listeners) && $setInteractive(this$static, false);
  return point.x_0 >= 0 && point.y_0 >= 0 && point.x_0 < this$static.width_0 && point.y_0 < this$static.height_0?this$static:null;
}

function $remove_7(this$static, index_0){
  var child;
  child = this$static.children.remove_1(index_0);
  child.onRemove_0();
  child.parent_0 = null;
}

function $remove_8(this$static, child){
  var index_0;
  index_0 = $findChild(this$static, child, child.depth);
  if (index_0 < 0) {
    throw new UnsupportedOperationException_0('Could not remove Layer because it is not a child of the GroupLayer [group=' + this$static + ', layer=' + child + ']');
  }
  $remove_7(this$static, index_0);
}

function $removeAll(this$static){
  while (this$static.children.array.length != 0)
    $remove_7(this$static, this$static.children.array.length - 1);
}

function GroupLayer(){
  Layer.call(this);
  this.pos = new Point;
  this.size_0 = new Vector;
  this.width_0 = 0;
  this.height_0 = 0;
  this.children = new ArrayList;
  this.paintTx = new AffineTransform;
  this.disableClip = true;
}

defineClass(46, 323, $intern_26, GroupLayer);
_.close_0 = function close_13(){
  $close_4(this);
}
;
_.deactivateOnNoListeners = function deactivateOnNoListeners_0(){
  return false;
}
;
_.disableClip_0 = function disableClip_0(){
  return this.disableClip;
}
;
_.hitTestDefault = function hitTestDefault_0(point){
  return $hitTestDefault(this, point);
}
;
_.iterator = function iterator_17(){
  return new AbstractList$IteratorImpl(this.children);
}
;
_.onAdd_0 = function onAdd_2(){
  var ii, ll;
  $onAdd_0(this);
  for (ii = 0 , ll = this.children.array.length; ii < ll; ii++)
    $get_7(this.children, ii).onAdd_0();
}
;
_.onRemove_0 = function onRemove_2(){
  var ii, ll;
  $setState(this, ($clinit_Layer$State() , REMOVED));
  for (ii = 0 , ll = this.children.array.length; ii < ll; ii++)
    $get_7(this.children, ii).onRemove_0();
}
;
_.paintClipped = function paintClipped(surf){
  var children, ii, ll;
  $set_4(this.paintTx, surf.lastTrans);
  children = this.children;
  for (ii = 0 , ll = children.array.length; ii < ll; ii++) {
    $set_4(surf.lastTrans, this.paintTx);
    $paint((checkElementIndex(ii, children.array.length) , children.array[ii]), surf);
  }
}
;
_.toString_1 = function toString_58(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
  !!this.hitTester && $append_6((buf.string += ', hitTester=' , buf), this.hitTester);
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
_.disableClip = false;
var Lplayn_scene_GroupLayer_2_classLit = createForClass('playn.scene', 'GroupLayer', 46, Lplayn_scene_ClippedLayer_2_classLit);
function $onEmit_7(this$static, tile){
  this$static.this$01.setTile(tile);
}

function ImageLayer$1(this$0){
  this.this$01 = this$0;
}

defineClass(442, 547, {}, ImageLayer$1);
_.onEmit = function onEmit_13(tile){
  $onEmit_7(this, tile);
}
;
var Lplayn_scene_ImageLayer$1_2_classLit = createForClass('playn.scene', 'ImageLayer/1', 442, Lreact_Slot_2_classLit);
function $dispatch_3(this$static, event_0){
  var depth, target;
  if (this$static.canceled)
    return;
  screenToLayer(this$static.hitLayer, $set_5(this$static.local, event_0.x_0, event_0.y_0), this$static.local);
  this$static.event_0 = event_0;
  try {
    if (this$static.bubble) {
      depth = ($clinit_Interaction$Depth() , BELOW);
      for (target = this$static.hitLayer; target; target = target.parent_0) {
        target == this$static.capturingLayer?(depth = AT_0):depth == AT_0 && (depth = ABOVE);
        $dispatch_4(this$static, target);
        target == this$static.capturingLayer && (depth = AT_0);
      }
    }
     else {
      $dispatch_4(this$static, this$static.hitLayer);
    }
  }
   finally {
    this$static.event_0 = null;
  }
  $set_5(this$static.local, 0, 0);
}

function $dispatch_4(this$static, layer){
  var odispatchLayer;
  if (!(!!layer.events && !!layer.events._listeners))
    return;
  odispatchLayer = this$static.dispatchLayer;
  this$static.dispatchLayer = layer;
  try {
    $emit((!layer.events && (layer.events = new Layer$1(layer)) , layer.events), this$static);
  }
   finally {
    this$static.dispatchLayer = odispatchLayer;
  }
}

defineClass(318, 1, {43:1});
_.toString$ = function toString_59(){
  return 'Interaction[bubble=' + this.bubble + ', canceled=' + this.canceled + ', capmode=' + this.captureMode + ']' + '\n event=' + this.event_0 + '\n hit=' + this.hitLayer;
}
;
_.x_1 = function x_2(){
  return this.event_0.x_0;
}
;
_.y_1 = function y_2(){
  return this.event_0.y_0;
}
;
_.bubble = false;
_.canceled = false;
var Lplayn_scene_Interaction_2_classLit = createForClass('playn.scene', 'Interaction', 318, Ljava_lang_Object_2_classLit);
function $clinit_Interaction$Depth(){
  $clinit_Interaction$Depth = emptyMethod;
  BELOW = new Interaction$Depth('BELOW', 0);
  AT_0 = new Interaction$Depth('AT', 1);
  ABOVE = new Interaction$Depth('ABOVE', 2);
}

function Interaction$Depth(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_25(){
  $clinit_Interaction$Depth();
  return initValues(getClassLiteralForArray(Lplayn_scene_Interaction$Depth_2_classLit, 1), $intern_1, 97, 0, [BELOW, AT_0, ABOVE]);
}

defineClass(97, 6, {3:1, 7:1, 6:1, 97:1}, Interaction$Depth);
var ABOVE, AT_0, BELOW;
var Lplayn_scene_Interaction$Depth_2_classLit = createForEnum('playn.scene', 'Interaction/Depth', 97, Ljava_lang_Enum_2_classLit, values_25);
function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  if (!listener)
    throw new NullPointerException_0('Null listener');
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons));
  }
   else {
    this$static._listeners = insert(this$static._listeners, cons);
    this$static.connectionAdded();
  }
  return cons;
}

function $disconnect(this$static, cons){
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons));
  }
   else {
    this$static._listeners = remove_23(this$static._listeners, cons);
    this$static.connectionRemoved();
  }
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next) {
      try {
        notifier.notify_0(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (instanceOf($e0, 8)) {
          ex = $e0;
          exn = ex;
        }
         else 
          throw unwrap($e0);
      }
      cons._oneShot && $close_7(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = wrap_0($e1);
        if (instanceOf($e1, 8)) {
          ex = $e1;
          exn = ex;
        }
         else 
          throw unwrap($e1);
      }
    }
  }
  if (exn)
    throw unwrap(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next = append(head.next, action);
  return head;
}

defineClass(548, 1, {});
_.connectionAdded = function connectionAdded(){
}
;
_.connectionRemoved = function connectionRemoved(){
}
;
_.notify = function notify(notifier, a1, a2, a3){
  $notify(this, notifier, a1, a2, a3);
}
;
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass('react', 'Reactor', 548, Ljava_lang_Object_2_classLit);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

function $notifyEmit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

defineClass(556, 548, {});
_.placeholderListener = function placeholderListener(){
  return $clinit_Slots() , NOOP_2;
}
;
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass('react', 'AbstractSignal', 556, Lreact_Reactor_2_classLit);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(22, 556, {}, Signal);
var Lreact_Signal_2_classLit = createForClass('react', 'Signal', 22, Lreact_AbstractSignal_2_classLit);
function Layer$1(this$0){
  $clinit_AbstractSignal();
  this.this$01 = this$0;
}

defineClass(142, 22, {}, Layer$1);
_.connectionAdded = function connectionAdded_0(){
  $setInteractive(this.this$01, true);
}
;
_.connectionRemoved = function connectionRemoved_0(){
  !this._listeners && this.this$01.deactivateOnNoListeners() && $setInteractive(this.this$01, false);
}
;
var Lplayn_scene_Layer$1_2_classLit = createForClass('playn.scene', 'Layer/1', 142, Lreact_Signal_2_classLit);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_26(){
  $clinit_Layer$Flag();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 80, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(80, 6, {3:1, 7:1, 6:1, 80:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum('playn.scene', 'Layer/Flag', 80, Ljava_lang_Enum_2_classLit, values_26);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER_0 = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_27(){
  $clinit_Layer$Origin();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 18, 0, [FIXED_0, CENTER_0, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(18, 6, $intern_46);
var BC, CENTER_0, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum('playn.scene', 'Layer/Origin', 18, Ljava_lang_Enum_2_classLit, values_27);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(301, 18, $intern_46, Layer$Origin$1);
_.ox = function ox_0(width_0){
  return 0;
}
;
_.oy = function oy_0(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum('playn.scene', 'Layer/Origin/1', 301, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(310, 18, $intern_46, Layer$Origin$10);
_.ox = function ox_1(width_0){
  return width_0;
}
;
_.oy = function oy_1(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum('playn.scene', 'Layer/Origin/10', 310, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(302, 18, $intern_46, Layer$Origin$2);
_.ox = function ox_2(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_2(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum('playn.scene', 'Layer/Origin/2', 302, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(303, 18, $intern_46, Layer$Origin$3);
_.ox = function ox_3(width_0){
  return 0;
}
;
_.oy = function oy_3(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum('playn.scene', 'Layer/Origin/3', 303, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(304, 18, $intern_46, Layer$Origin$4);
_.ox = function ox_4(width_0){
  return width_0;
}
;
_.oy = function oy_4(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum('playn.scene', 'Layer/Origin/4', 304, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(305, 18, $intern_46, Layer$Origin$5);
_.ox = function ox_5(width_0){
  return 0;
}
;
_.oy = function oy_5(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum('playn.scene', 'Layer/Origin/5', 305, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(306, 18, $intern_46, Layer$Origin$6);
_.ox = function ox_6(width_0){
  return width_0;
}
;
_.oy = function oy_6(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum('playn.scene', 'Layer/Origin/6', 306, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(307, 18, $intern_46, Layer$Origin$7);
_.ox = function ox_7(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_7(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum('playn.scene', 'Layer/Origin/7', 307, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(308, 18, $intern_46, Layer$Origin$8);
_.ox = function ox_8(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_8(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum('playn.scene', 'Layer/Origin/8', 308, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(309, 18, $intern_46, Layer$Origin$9);
_.ox = function ox_9(width_0){
  return 0;
}
;
_.oy = function oy_9(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum('playn.scene', 'Layer/Origin/9', 309, Lplayn_scene_Layer$Origin_2_classLit, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_28(){
  $clinit_Layer$State();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 96, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(96, 6, {3:1, 7:1, 6:1, 96:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum('playn.scene', 'Layer/State', 96, Ljava_lang_Enum_2_classLit, values_28);
function getHitLayer(root, p){
  $inverseTransform($transform(root), p, p);
  p.x_0 += $originX(root);
  p.y_0 += $originY(root);
  return !root.hitTester?$hitTestDefault(root, p):root.hitTester.hitTest(root, p);
}

function screenToLayer(layer, point, into){
  var cur, parent_0;
  parent_0 = layer.parent_0;
  cur = !parent_0?point:screenToLayer(parent_0, point, into);
  return $inverseTransform($transform(layer), $set_5(into, cur.x_1(), cur.y_1()), into) , into.x_0 += $originX(layer) , into.y_0 += $originY(layer) , into;
}

function Pointer(plat, root){
  this.events = ($clinit_AbstractSignal() , new Signal);
  this.plat = plat;
  $addConnection(plat.input_0.mouseEvents, new Pointer$1(this));
  $addConnection(plat.input_0.touchEvents, new Pointer$2(this));
  $addConnection(this.events, new Pointer$Dispatcher(root));
}

defineClass(317, 316, {}, Pointer);
var Lplayn_scene_Pointer_2_classLit = createForClass('playn.scene', 'Pointer', 317, Lplayn_core_Pointer_2_classLit);
function $onEmit_8(this$static, event_0){
  var hitLayer;
  if (!this$static.currentIact && event_0.kind.isStart) {
    hitLayer = getHitLayer(this$static.root, $set_5(this$static.scratch, event_0.x_0, event_0.y_0));
    !!hitLayer && (this$static.currentIact = new Pointer$Interaction(hitLayer, this$static.bubble));
  }
  !!this$static.currentIact && $dispatch_3(this$static.currentIact, event_0);
  event_0.kind.isEnd && (this$static.currentIact = null);
}

function Pointer$Dispatcher(root){
  this.scratch = new Point;
  this.root = root;
  this.bubble = true;
}

defineClass(319, 547, {}, Pointer$Dispatcher);
_.onEmit = function onEmit_14(event_0){
  $onEmit_8(this, event_0);
}
;
_.bubble = false;
var Lplayn_scene_Pointer$Dispatcher_2_classLit = createForClass('playn.scene', 'Pointer/Dispatcher', 319, Lreact_Slot_2_classLit);
function Pointer$Interaction(hitLayer, bubble){
  this.local = new Point;
  this.hitLayer = hitLayer;
  this.bubble = bubble;
}

defineClass(144, 318, {144:1, 43:1}, Pointer$Interaction);
var Lplayn_scene_Pointer$Interaction_2_classLit = createForClass('playn.scene', 'Pointer/Interaction', 144, Lplayn_scene_Interaction_2_classLit);
function RootLayer(){
  GroupLayer.call(this);
  $setState(this, ($clinit_Layer$State() , ADDED));
}

defineClass(324, 46, $intern_26, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass('playn.scene', 'RootLayer', 324, Lplayn_scene_GroupLayer_2_classLit);
function $onEmit_9(this$static){
  $paintScene(this$static.this$01);
}

function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(251, 547, {}, SceneGame$1);
_.onEmit = function onEmit_15(clock){
  $onEmit_9(this, clock);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass('playn.scene', 'SceneGame/1', 251, Lreact_Slot_2_classLit);
function $equals_4(this$static, obj){
  var d;
  if (obj === this$static) {
    return true;
  }
  if (instanceOf(obj, 150)) {
    d = obj;
    return d.width_0 == this$static.width_0 && d.height_0 == this$static.height_0;
  }
  return false;
}

defineClass(150, 1, {150:1});
_.equals$ = function equals_32(obj){
  return $equals_4(this, obj);
}
;
_.hashCode$ = function hashCode_35(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString$ = function toString_60(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass('pythagoras.f', 'AbstractDimension', 150, Ljava_lang_Object_2_classLit);
defineClass(149, 1, {149:1, 43:1});
_.equals$ = function equals_33(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 149)) {
    p = obj;
    return this.x_1() == p.x_0 && this.y_1() == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_36(){
  return round_int(this.x_1()) ^ round_int(this.y_1());
}
;
_.toString$ = function toString_61(){
  return pointToString(this.x_1(), this.y_1());
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass('pythagoras.f', 'AbstractPoint', 149, Ljava_lang_Object_2_classLit);
defineClass(581, 1, {});
var Lpythagoras_f_RectangularShape_2_classLit = createForClass('pythagoras.f', 'RectangularShape', 581, Ljava_lang_Object_2_classLit);
defineClass(162, 581, {162:1});
_.equals$ = function equals_34(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 162)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_37(){
  return round_int(this.x_0) ^ round_int(this.y_0) ^ round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString$ = function toString_62(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0 + pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractRectangle_2_classLit = createForClass('pythagoras.f', 'AbstractRectangle', 162, Lpythagoras_f_RectangularShape_2_classLit);
defineClass(567, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass('pythagoras.f', 'AbstractTransform', 567, Ljava_lang_Object_2_classLit);
defineClass(155, 1, $intern_47);
_.equals$ = function equals_35(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 155)) {
    p = obj;
    return this.x_1() == p.x_0 && this.y_1() == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_38(){
  return round_int(this.x_1()) ^ round_int(this.y_1());
}
;
_.toString$ = function toString_63(){
  return vectorToString(this.x_1(), this.y_1());
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass('pythagoras.f', 'AbstractVector', 155, Ljava_lang_Object_2_classLit);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $inverseTransform(this$static, p, into){
  var det, rdet, x_0, y_0;
  x_0 = p.x_0 - this$static.tx;
  y_0 = p.y_0 - this$static.ty;
  det = this$static.m00 * this$static.m11 - this$static.m01 * this$static.m10;
  if (abs_0(det) == 0) {
    throw new NoninvertibleTransformException('affine [' + toString_65(this$static.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_65(this$static.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_65(this$static.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_65(this$static.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this$static.tx, this$static.ty) + ']');
  }
  rdet = 1 / det;
  return $set_5(into, (x_0 * this$static.m11 - y_0 * this$static.m10) * rdet, (y_0 * this$static.m00 - x_0 * this$static.m01) * rdet);
}

function $scale_1(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $set_4(this$static, other){
  return $setTransform(this$static, other.m00, other.m01, other.m10, other.m11, other.tx, other.ty);
}

function $setRotation_0(this$static, angle){
  var cosa, sina, sx, sy;
  sx = sqrt_0(this$static.m00 * this$static.m00 + this$static.m01 * this$static.m01);
  sy = sqrt_0(this$static.m10 * this$static.m10 + this$static.m11 * this$static.m11);
  sina = sin_0(angle);
  cosa = cos_0(angle);
  this$static.m00 = cosa * sx;
  this$static.m01 = sina * sx;
  this$static.m10 = -sina * sy;
  this$static.m11 = cosa * sy;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $setTranslation_0(this$static, tx, ty){
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $setTx_0(this$static, tx){
  this$static.tx = tx;
  return this$static;
}

function $setTy_0(this$static, ty){
  this$static.ty = ty;
  return this$static;
}

function $transform_0(this$static, p, into){
  var x_0, y_0;
  x_0 = p.x_0;
  y_0 = p.y_0;
  return $set_5(into, this$static.m00 * x_0 + this$static.m10 * y_0 + this$static.tx, this$static.m01 * x_0 + this$static.m11 * y_0 + this$static.ty);
}

function $transform_1(this$static, v, into){
  var x_0, y_0;
  x_0 = v.x_0;
  y_0 = v.y_0;
  return $set_6(into, this$static.m00 * x_0 + this$static.m10 * y_0, this$static.m01 * x_0 + this$static.m11 * y_0);
}

function $translate(this$static, tx, ty){
  this$static.tx += this$static.m00 * tx + this$static.m10 * ty;
  this$static.ty += this$static.m11 * ty + this$static.m01 * tx;
  return this$static;
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(83, 567, {}, AffineTransform, AffineTransform_0);
_.toString$ = function toString_64(){
  return 'affine [' + toString_65(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_65(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_65(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_65(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass('pythagoras.f', 'AffineTransform', 83, Lpythagoras_f_AbstractTransform_2_classLit);
function $setSize_2(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Dimension(){
  Dimension_0.call(this, 0, 0);
}

function Dimension_0(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function Dimension_1(d){
  Dimension_0.call(this, d.width_0, d.height_0);
}

defineClass(26, 150, {3:1, 150:1}, Dimension, Dimension_0, Dimension_1);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass('pythagoras.f', 'Dimension', 26, Lpythagoras_f_AbstractDimension_2_classLit);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0(0, 0);
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == -2147483648?iv:iv - 1;
}

function toString_65(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set_5(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  $set_5(this, 0, 0);
}

defineClass(82, 149, {3:1, 149:1, 43:1}, Point, Point_0);
_.x_1 = function x_3(){
  return this.x_0;
}
;
_.y_1 = function y_3(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass('pythagoras.f', 'Point', 82, Lpythagoras_f_AbstractPoint_2_classLit);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_65(x_0, TO_STRING_DECIMAL_PLACES) + toString_65(y_0, TO_STRING_DECIMAL_PLACES);
}

function $setBounds(this$static, x_0, y_0, width_0, height){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.height_0 = height;
  this$static.width_0 = width_0;
}

function Rectangle(){
}

function Rectangle_0(x_0, y_0, width_0, height){
  $setBounds(this, x_0, y_0, width_0, height);
}

defineClass(163, 162, {3:1, 162:1}, Rectangle, Rectangle_0);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Rectangle_2_classLit = createForClass('pythagoras.f', 'Rectangle', 163, Lpythagoras_f_AbstractRectangle_2_classLit);
function multiply(am00, am01, am10, am11, atx, aty, bm00, bm01, bm10, bm11, btx, bty, into){
  $setTransform(into, am00 * bm00 + am10 * bm01, am01 * bm00 + am11 * bm01, am00 * bm10 + am10 * bm11, am01 * bm10 + am11 * bm11, am00 * btx + am10 * bty + atx, am01 * btx + am11 * bty + aty);
  return into;
}

function multiply_0(a, m00, m01, m10, m11, tx, ty, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, m00, m01, m10, m11, tx, ty, into);
}

function multiply_1(a, b, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, b.m00, b.m01, b.m10, b.m11, b.tx, b.ty, into);
}

function $set_6(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Vector(){
}

function Vector_0(x_0, y_0){
  $set_6(this, x_0, y_0);
}

defineClass(64, 155, $intern_47, Vector, Vector_0);
_.x_1 = function x_4(){
  return this.x_0;
}
;
_.y_1 = function y_4(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass('pythagoras.f', 'Vector', 64, Lpythagoras_f_AbstractVector_2_classLit);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_48, $intern_48);
  new Vector_0($intern_41, $intern_41);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_65(x_0, TO_STRING_DECIMAL_PLACES) + toString_65(y_0, TO_STRING_DECIMAL_PLACES);
}

defineClass(145, 1, {145:1});
_.equals$ = function equals_36(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 145)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_39(){
  return this.width_0 ^ this.height_0;
}
;
_.toString$ = function toString_66(){
  return this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_i_AbstractDimension_2_classLit = createForClass('pythagoras.i', 'AbstractDimension', 145, Ljava_lang_Object_2_classLit);
defineClass(156, 1, {156:1});
_.equals$ = function equals_37(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 156)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_40(){
  return this.x_0 ^ this.y_0;
}
;
_.toString$ = function toString_67(){
  return pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractPoint_2_classLit = createForClass('pythagoras.i', 'AbstractPoint', 156, Ljava_lang_Object_2_classLit);
defineClass(168, 1, {168:1});
_.equals$ = function equals_38(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 168)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_41(){
  return this.x_0 ^ this.y_0 ^ this.width_0 ^ this.height_0;
}
;
_.toString$ = function toString_68(){
  return this.width_0 + 'x' + this.height_0 + pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractRectangle_2_classLit = createForClass('pythagoras.i', 'AbstractRectangle', 168, Ljava_lang_Object_2_classLit);
function Dimension_2(){
  this.width_0 = 8;
  this.height_0 = 8;
}

defineClass(186, 145, {3:1, 145:1}, Dimension_2);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_i_Dimension_2_classLit = createForClass('pythagoras.i', 'Dimension', 186, Lpythagoras_i_AbstractDimension_2_classLit);
function Point_1(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(122, 156, {3:1, 156:1}, Point_1);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Point_2_classLit = createForClass('pythagoras.i', 'Point', 122, Lpythagoras_i_AbstractPoint_2_classLit);
function pointToString_0(x_0, y_0){
  var buf;
  buf = new StringBuilder;
  x_0 >= 0 && (buf.string += '+' , buf);
  buf.string += x_0;
  y_0 >= 0 && (buf.string += '+' , buf);
  buf.string += y_0;
  return buf.string;
}

function $setLocation(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
}

function $setSize_3(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Rectangle_1(){
}

defineClass(515, 168, {3:1, 168:1}, Rectangle_1);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Rectangle_2_classLit = createForClass('pythagoras.i', 'Rectangle', 515, Lpythagoras_i_AbstractRectangle_2_classLit);
function NoninvertibleTransformException(s){
  RuntimeException_0.call(this, s);
}

defineClass(165, 8, {3:1, 14:1, 8:1, 10:1, 165:1}, NoninvertibleTransformException);
var Lpythagoras_util_NoninvertibleTransformException_2_classLit = createForClass('pythagoras.util', 'NoninvertibleTransformException', 165, Ljava_lang_RuntimeException_2_classLit);
defineClass(550, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass('react', 'Reactor/Notifier', 550, Ljava_lang_Object_2_classLit);
function AbstractSignal$1(){
}

defineClass(311, 550, {}, AbstractSignal$1);
_.notify_0 = function notify_0(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass('react', 'AbstractSignal/1', 311, Lreact_Reactor$Notifier_2_classLit);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $connectNotify(this$static, listener){
  var conn, e, re;
  conn = $addConnection(this$static, listener);
  try {
    listener.onChange(this$static._value, null);
    return conn;
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      re = $e0;
      $close_7(conn);
      throw unwrap(re);
    }
     else if (instanceOf($e0, 70)) {
      e = $e0;
      $close_7(conn);
      throw e;
    }
     else 
      throw unwrap($e0);
  }
}

function $map(this$static, func){
  return new AbstractValue$2(func, this$static);
}

function $notifyChange(this$static, value_0, oldValue){
  $notify(this$static, CHANGE, value_0, oldValue, null);
}

function $updateAndNotify(this$static, value_0, force){
  var ovalue;
  ovalue = this$static.updateLocal(value_0);
  (force || ($clinit_Reactor() , !(maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue)))) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(561, 548, {});
_.equals$ = function equals_39(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != this.___clazz$)
    return false;
  value_0 = this.get_0();
  ovalue = other.get_0();
  return $clinit_Reactor() , maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue);
}
;
_.hashCode$ = function hashCode_42(){
  var value_0;
  value_0 = this.get_0();
  return value_0 == null?0:hashCode__I__devirtual$(value_0);
}
;
_.placeholderListener = function placeholderListener_0(){
  return $clinit_Slots() , NOOP_2;
}
;
_.toString$ = function toString_69(){
  var cname;
  cname = $getName(this.___clazz$);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this.get_0() + ')';
}
;
_.updateAndNotify = function updateAndNotify(value_0, force){
  return $updateAndNotify(this, value_0, force);
}
;
_.updateLocal = function updateLocal(value_0){
  throw new UnsupportedOperationException;
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass('react', 'AbstractValue', 561, Lreact_Reactor_2_classLit);
function AbstractValue$1(){
}

defineClass(352, 550, {}, AbstractValue$1);
_.notify_0 = function notify_1(lner, value_0, oldValue, ignored){
  lner.onChange(value_0, oldValue);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass('react', 'AbstractValue/1', 352, Lreact_Reactor$Notifier_2_classLit);
function $disconnect_0(this$static){
  if (this$static._conn) {
    $close_7(this$static._conn);
    this$static._conn = null;
  }
}

defineClass(562, 561, {});
_.connectionAdded = function connectionAdded_1(){
  !this._conn && (this._conn = $addConnection(this.val$outer3, new AbstractValue$2$1(this, this.val$func2)));
}
;
_.connectionRemoved = function connectionRemoved_1(){
  !!this._listeners || $disconnect_0(this);
}
;
var Lreact_MappedValue_2_classLit = createForClass('react', 'MappedValue', 562, Lreact_AbstractValue_2_classLit);
function AbstractValue$2(val$func, val$outer){
  this.val$func2 = val$func;
  this.val$outer3 = val$outer;
}

defineClass(353, 562, {}, AbstractValue$2);
_.get_0 = function get_16(){
  return $apply_1(this.val$func2, this.val$outer3.get_0());
}
;
_.toString$ = function toString_70(){
  return this.val$outer3 + '.map(' + this.val$func2 + ')';
}
;
var Lreact_AbstractValue$2_2_classLit = createForClass('react', 'AbstractValue/2', 353, Lreact_MappedValue_2_classLit);
function AbstractValue$2$1(this$1, val$func){
  this.this$11 = this$1;
  this.val$func2 = val$func;
}

defineClass(354, 1, {}, AbstractValue$2$1);
_.onChange = function onChange_1(value_0, ovalue){
  $notifyChange(this.this$11, $apply_1(this.val$func2, value_0), $apply_1(this.val$func2, ovalue));
}
;
var Lreact_AbstractValue$2$1_2_classLit = createForClass('react', 'AbstractValue/2/1', 354, Ljava_lang_Object_2_classLit);
function AbstractValue$4(val$listener){
  this.val$listener1 = val$listener;
}

defineClass(355, 1, {}, AbstractValue$4);
_.onChange = function onChange_2(newValue, oldValue){
  $onEmit_10(this.val$listener1, newValue);
}
;
var Lreact_AbstractValue$4_2_classLit = createForClass('react', 'AbstractValue/4', 355, Ljava_lang_Object_2_classLit);
var Lreact_Closeable_2_classLit = createForInterface('react', 'Closeable');
function $add_7(this$static, c){
  !this$static._set && (this$static._set = new HashSet);
  $add_5(this$static._set, c);
  return c;
}

function $close_5(this$static){
  var c, c$iterator, e, error;
  if (this$static._set) {
    error = null;
    for (c$iterator = $iterator_0(new AbstractMap$1(this$static._set.map_0)); $hasNext_0(c$iterator.val$outerIter2);) {
      c = $next_3(c$iterator);
      try {
        c.close_0();
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (instanceOf($e0, 14)) {
          e = $e0;
          !error && (error = new MultiFailureException);
          $addSuppressed(error, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    $reset(this$static._set.map_0);
    if (error)
      throw error;
  }
}

function Closeable$Set(){
}

defineClass(282, 1, $intern_23, Closeable$Set);
_.close_0 = function close_14(){
  $close_5(this);
}
;
var Lreact_Closeable$Set_2_classLit = createForClass('react', 'Closeable/Set', 282, Ljava_lang_Object_2_classLit);
function $clinit_Closeable$Util(){
  $clinit_Closeable$Util = emptyMethod;
  NOOP_0 = new Closeable$Util$1;
}

var NOOP_0;
function Closeable$Util$1(){
}

defineClass(283, 1, $intern_23, Closeable$Util$1);
_.close_0 = function close_15(){
}
;
var Lreact_Closeable$Util$1_2_classLit = createForClass('react', 'Closeable/Util/1', 283, Ljava_lang_Object_2_classLit);
function $close_6(this$static){
  var ii;
  for (ii = 0; ii < this$static.val$cons1.length; ii++) {
    if (!this$static.val$cons1[ii])
      continue;
    this$static.val$cons1[ii].close_0();
    this$static.val$cons1[ii] = null;
  }
}

function Closeable$Util$2(val$cons){
  this.val$cons1 = val$cons;
}

defineClass(284, 1, $intern_23, Closeable$Util$2);
_.close_0 = function close_16(){
  $close_6(this);
}
;
var Lreact_Closeable$Util$2_2_classLit = createForClass('react', 'Closeable/Util/2', 284, Ljava_lang_Object_2_classLit);
defineClass(564, 1, $intern_23);
var Lreact_Connection_2_classLit = createForClass('react', 'Connection', 564, Ljava_lang_Object_2_classLit);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw new IllegalStateException_0('Cannot change priority of disconnected connection.');
  $disconnect(this$static._owner, this$static);
  this$static.next = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close_7(this$static){
  if (this$static._owner) {
    $defang(this$static._ref, this$static._owner.placeholderListener());
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next = head;
    return cons;
  }
   else {
    head.next = insert(head.next, cons);
    return head;
  }
}

function remove_23(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next;
  head.next = remove_23(head.next, cons);
  return head;
}

defineClass(195, 564, $intern_23, Cons);
_.close_0 = function close_17(){
  $close_7(this);
}
;
_.toString$ = function toString_71(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass('react', 'Cons', 195, Lreact_Connection_2_classLit);
defineClass(570, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass('react', 'Cons/ListenerRef', 570, Ljava_lang_Object_2_classLit);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(409, 570, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass('react', 'Cons/StrongRef', 409, Lreact_Cons$ListenerRef_2_classLit);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(34, 561, {}, Value);
_.get_0 = function get_17(){
  return this._value;
}
;
_.updateLocal = function updateLocal_0(value_0){
  var oldValue;
  oldValue = this._value;
  this._value = value_0;
  return oldValue;
}
;
var Lreact_Value_2_classLit = createForClass('react', 'Value', 34, Lreact_AbstractValue_2_classLit);
function $decrementClamp(this$static){
  return $updateInt(this$static, max_1(this$static._value.value_0 - 1, 0));
}

function $increment(this$static, amount){
  return $updateInt(this$static, this$static._value.value_0 + amount);
}

function $updateInt(this$static, value_0){
  $updateAndNotify(this$static, valueOf(value_0), false);
  return value_0;
}

function IntValue(value_0){
  $clinit_AbstractValue();
  Value.call(this, valueOf(value_0));
}

defineClass(101, 34, {}, IntValue);
var Lreact_IntValue_2_classLit = createForClass('react', 'IntValue', 101, Lreact_Value_2_classLit);
function MultiFailureException(){
  RuntimeException.call(this);
  this._failures = new ArrayList;
}

defineClass(473, 8, $intern_8, MultiFailureException);
_.fillInStackTrace = function fillInStackTrace_0(){
  return this;
}
;
_.getMessage = function getMessage_1(){
  var buf, failure, failure$iterator;
  buf = new StringBuilder;
  for (failure$iterator = new AbstractList$IteratorImpl(this._failures); failure$iterator.i < failure$iterator.this$01.size_1();) {
    failure = (checkCriticalElement(failure$iterator.i < failure$iterator.this$01.size_1()) , failure$iterator.this$01.get_1(failure$iterator.last = failure$iterator.i++));
    buf.string.length > 0 && (buf.string += ', ' , buf);
    $append_7($append_7($append_7(buf, $getName(failure.___clazz$)), ': '), failure.getMessage());
  }
  return this._failures.array.length + ' failures: ' + buf;
}
;
_.printStackTrace = function printStackTrace_0(s){
  var failure, failure$iterator;
  for (failure$iterator = new AbstractList$IteratorImpl(this._failures); failure$iterator.i < failure$iterator.this$01.size_1();) {
    failure = (checkCriticalElement(failure$iterator.i < failure$iterator.this$01.size_1()) , failure$iterator.this$01.get_1(failure$iterator.last = failure$iterator.i++));
    failure.printStackTrace(s);
  }
}
;
var Lreact_MultiFailureException_2_classLit = createForClass('react', 'MultiFailureException', 473, Ljava_lang_RuntimeException_2_classLit);
defineClass(559, 548, {});
_.notify = function notify_2(notifier, a1, a2, a3){
  $notify(this, notifier, a1, a2, a3);
}
;
var Lreact_RCollection_2_classLit = createForClass('react', 'RCollection', 559, Lreact_Reactor_2_classLit);
function $map_0(this$static, func){
  return new RFuture($map(this$static._result_0, new RFuture$7(func)));
}

function $onSuccess(this$static, slot){
  var result;
  result = this$static._result_0.get_0();
  !result?$addConnection(this$static._result_0, new AbstractValue$4(new RFuture$5(slot))):result.isSuccess() && $onEmit_7(slot, result.get_0());
  return this$static;
}

function RFuture(result){
  this._result_0 = result;
}

defineClass(119, 1, {}, RFuture);
var Lreact_RFuture_2_classLit = createForClass('react', 'RFuture', 119, Ljava_lang_Object_2_classLit);
function $onEmit_10(this$static, result){
  result.isSuccess() && $onEmit_7(this$static.val$slot2, result.get_0());
}

function RFuture$5(val$slot){
  this.val$slot2 = val$slot;
}

defineClass(350, 1, {}, RFuture$5);
_.onEmit = function onEmit_16(result){
  $onEmit_10(this, result);
}
;
var Lreact_RFuture$5_2_classLit = createForClass('react', 'RFuture/5', 350, Ljava_lang_Object_2_classLit);
function $apply_1(this$static, result){
  return !result?null:result.map_1(this$static.val$func2);
}

function RFuture$7(val$func){
  this.val$func2 = val$func;
}

defineClass(351, 1, {}, RFuture$7);
var Lreact_RFuture$7_2_classLit = createForClass('react', 'RFuture/7', 351, Ljava_lang_Object_2_classLit);
function $clinit_RList(){
  $clinit_RList = emptyMethod;
  $clinit_Reactor();
  NOOP_1 = new RList$1;
  ADD = new RList$2;
  REMOVE = new RList$4;
}

function $add_8(this$static, index_0, element){
  $add_3(this$static._impl, index_0, element);
  $notify(this$static, ADD, valueOf(index_0), element, null);
}

function $add_9(this$static, element){
  $add_8(this$static, this$static._impl.array.length, element);
  return true;
}

function $addAll_1(this$static, index_0, elements){
  var elem, elem$iterator;
  for (elem$iterator = elements.iterator_0(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    $add_8(this$static, index_0++, elem);
  }
  return true;
}

function $addAll_2(this$static, collection){
  return $addAll_1(this$static, this$static._impl.array.length, collection);
}

function $connectNotify_0(this$static, listener){
  var ii, ll;
  for (ii = 0 , ll = this$static._impl.array.length; ii < ll; ii++)
    $onAdd(listener, $get_7(this$static._impl, ii));
  return $addConnection(this$static, listener);
}

function $emitRemove(this$static, index_0, elem){
  $notify(this$static, REMOVE, valueOf(index_0), elem, null);
}

function $listIterator_0(this$static){
  var iiter;
  iiter = new AbstractList$ListIteratorImpl(this$static._impl);
  return new RList$5(this$static, iiter);
}

function $remove_9(this$static, object){
  var index_0;
  index_0 = $indexOf_1(this$static._impl, object, 0);
  if (index_0 < 0)
    return false;
  this$static._impl.remove_1(index_0);
  $notify(this$static, REMOVE, valueOf(index_0), object, null);
  return true;
}

function RList(impl){
  $clinit_RList();
  this._impl = impl;
}

defineClass(335, 559, {23:1}, RList);
_.add_0 = function add_8(element){
  return $add_9(this, element);
}
;
_.contains = function contains_16(object){
  return $indexOf_1(this._impl, object, 0) != -1;
}
;
_.equals$ = function equals_40(other){
  return other === this || $equals_0(this._impl, other);
}
;
_.get_1 = function get_18(index_0){
  return $get_7(this._impl, index_0);
}
;
_.hashCode$ = function hashCode_43(){
  return hashCode_26(this._impl);
}
;
_.iterator = function iterator_18(){
  return $listIterator_0(this);
}
;
_.placeholderListener = function placeholderListener_1(){
  return NOOP_1;
}
;
_.size_1 = function size_20(){
  return this._impl.array.length;
}
;
_.toArray = function toArray_13(){
  return $toArray_1(this._impl);
}
;
_.toArray_0 = function toArray_14(array){
  return $toArray_2(this._impl, array);
}
;
_.toString$ = function toString_72(){
  return 'RList(' + this._impl + ')';
}
;
var ADD, NOOP_1, REMOVE;
var Lreact_RList_2_classLit = createForClass('react', 'RList', 335, Lreact_RCollection_2_classLit);
function RList$1(){
}

defineClass(336, 558, {}, RList$1);
var Lreact_RList$1_2_classLit = createForClass('react', 'RList/1', 336, Lreact_RList$Listener_2_classLit);
function RList$2(){
}

defineClass(337, 550, {}, RList$2);
_.notify_0 = function notify_3(lner, index_0, elem, ignored){
  lner.onAdd(elem);
}
;
var Lreact_RList$2_2_classLit = createForClass('react', 'RList/2', 337, Lreact_Reactor$Notifier_2_classLit);
function RList$4(){
}

defineClass(338, 550, {}, RList$4);
_.notify_0 = function notify_4(lner, index_0, elem, ignored){
  lner.onRemove(elem);
}
;
var Lreact_RList$4_2_classLit = createForClass('react', 'RList/4', 338, Lreact_Reactor$Notifier_2_classLit);
function RList$5(this$0, val$iiter){
  this.this$01 = this$0;
  this.val$iiter2 = val$iiter;
}

defineClass(339, 1, {}, RList$5);
_.hasNext = function hasNext_14(){
  return this.val$iiter2.hasNext();
}
;
_.next_0 = function next_15(){
  return this._current = this.val$iiter2.next_0();
}
;
_.remove = function remove_24(){
  var index_0;
  index_0 = this.val$iiter2.i - 1;
  this.val$iiter2.remove();
  $emitRemove(this.this$01, index_0, this._current);
}
;
var Lreact_RList$5_2_classLit = createForClass('react', 'RList/5', 339, Ljava_lang_Object_2_classLit);
function $fail(this$static, cause){
  $updateAndNotify_0(this$static._result, new Try$Failure(cause), false);
}

function $succeed(this$static, value_0){
  $updateAndNotify_0(this$static._result, new Try$Success(value_0), false);
}

function RPromise(){
  RPromise_0.call(this, new RPromise$3);
}

function RPromise_0(result){
  RFuture.call(this, result);
  this._result = result;
}

defineClass(190, 119, {}, RPromise);
var Lreact_RPromise_2_classLit = createForClass('react', 'RPromise', 190, Lreact_RFuture_2_classLit);
function $updateAndNotify_0(this$static, value_0, force){
  return $updateAndNotify_1(this$static, value_0, force);
}

function $updateAndNotify_1(this$static, value_0, force){
  if (this$static._value != null)
    throw new IllegalStateException_0('Already completed');
  try {
    return $updateAndNotify(this$static, value_0, force);
  }
   finally {
    this$static._listeners = null;
  }
}

function RPromise$3(){
  $clinit_AbstractValue();
  Value.call(this, null);
}

defineClass(349, 34, {}, RPromise$3);
_.updateAndNotify = function updateAndNotify_0(value_0, force){
  return $updateAndNotify_0(this, value_0, force);
}
;
var Lreact_RPromise$3_2_classLit = createForClass('react', 'RPromise/3', 349, Lreact_Value_2_classLit);
defineClass(549, 1, {});
var Lreact_Reactor$Runs_2_classLit = createForClass('react', 'Reactor/Runs', 549, Ljava_lang_Object_2_classLit);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(253, 549, {}, Reactor$1);
_.run = function run_4(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
  this.this$01.connectionAdded();
}
;
var Lreact_Reactor$1_2_classLit = createForClass('react', 'Reactor/1', 253, Lreact_Reactor$Runs_2_classLit);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(254, 549, {}, Reactor$2);
_.run = function run_5(){
  this.this$01._listeners = remove_23(this.this$01._listeners, this.val$cons2);
  this.this$01.connectionRemoved();
}
;
var Lreact_Reactor$2_2_classLit = createForClass('react', 'Reactor/2', 254, Lreact_Reactor$Runs_2_classLit);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(255, 549, {}, Reactor$4);
_.run = function run_6(){
  this.this$01.notify(this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass('react', 'Reactor/4', 255, Lreact_Reactor$Runs_2_classLit);
function Signal$1(this$0){
  this.this$01 = this$0;
}

defineClass(183, 547, {}, Signal$1);
_.onEmit = function onEmit_17(value_0){
  $emit(this.this$01, value_0);
}
;
var Lreact_Signal$1_2_classLit = createForClass('react', 'Signal/1', 183, Lreact_Slot_2_classLit);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP_2 = new Slots$1;
}

var NOOP_2;
defineClass(554, 547, {});
_.onEmit = function onEmit_18(event_0){
  this.onEmit_0();
}
;
_.run = function run_7(){
  this.onEmit_0();
}
;
var Lreact_UnitSlot_2_classLit = createForClass('react', 'UnitSlot', 554, Lreact_Slot_2_classLit);
function Slots$1(){
}

defineClass(470, 554, {}, Slots$1);
_.onEmit_0 = function onEmit_19(){
}
;
var Lreact_Slots$1_2_classLit = createForClass('react', 'Slots/1', 470, Lreact_UnitSlot_2_classLit);
defineClass(586, 1, {});
var Lreact_Try_2_classLit = createForClass('react', 'Try', 586, Ljava_lang_Object_2_classLit);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(217, 586, {}, Try$Failure);
_.get_0 = function get_19(){
  if (instanceOf(this.cause, 8)) {
    throw unwrap(this.cause);
  }
   else if (instanceOf(this.cause, 70)) {
    throw this.cause;
  }
   else {
    throw unwrap($initCause(new RuntimeException, this.cause));
  }
}
;
_.isSuccess = function isSuccess(){
  return false;
}
;
_.map_1 = function map_1(func){
  return this;
}
;
_.toString$ = function toString_73(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass('react', 'Try/Failure', 217, Lreact_Try_2_classLit);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(109, 586, {}, Try$Success);
_.get_0 = function get_20(){
  return this.value_0;
}
;
_.isSuccess = function isSuccess_0(){
  return true;
}
;
_.map_1 = function map_2(func){
  var t;
  try {
    return new Try$Success($apply_0(func, this.value_0));
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      t = $e0;
      return new Try$Failure(t);
    }
     else 
      throw unwrap($e0);
  }
}
;
_.toString$ = function toString_74(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass('react', 'Try/Success', 109, Lreact_Try_2_classLit);
defineClass(574, 1, {});
var Ltripleplay_anim_AnimBuilder_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder', 574, Ljava_lang_Object_2_classLit);
function AnimBuilder$16(val$signal, val$value){
  this.val$signal2 = val$signal;
  this.val$value3 = val$value;
}

defineClass(432, 1, {}, AnimBuilder$16);
_.run = function run_8(){
  $emit(this.val$signal2, this.val$value3);
}
;
var Ltripleplay_anim_AnimBuilder$16_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/16', 432, Ljava_lang_Object_2_classLit);
function AnimBuilder$19(val$layer){
  this.val$layer1 = val$layer;
}

defineClass(433, 1, {}, AnimBuilder$19);
_.initial = function initial_0(){
  return this.val$layer1.transform.tx;
}
;
_.set_0 = function set_3(value_0){
  $setTx(this.val$layer1, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$19_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/19', 433, Ljava_lang_Object_2_classLit);
function AnimBuilder$2(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(429, 1, {}, AnimBuilder$2);
_.initial = function initial_1(){
  return this.val$layer2.scaleX;
}
;
_.set_0 = function set_4(value_0){
  $setScale(this.val$layer2, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$2_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/2', 429, Ljava_lang_Object_2_classLit);
function AnimBuilder$20(val$layer){
  this.val$layer1 = val$layer;
}

defineClass(434, 1, {}, AnimBuilder$20);
_.initial = function initial_2(){
  return this.val$layer1.transform.ty;
}
;
_.set_0 = function set_5(value_0){
  $setTy(this.val$layer1, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$20_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/20', 434, Ljava_lang_Object_2_classLit);
function AnimBuilder$3(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(430, 1, {}, AnimBuilder$3);
_.initial = function initial_3(){
  return this.val$layer2.alpha_1;
}
;
_.set_0 = function set_6(value_0){
  $setAlpha(this.val$layer2, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$3_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/3', 430, Ljava_lang_Object_2_classLit);
function AnimBuilder$4(val$parent, val$child){
  this.val$parent2 = val$parent;
  this.val$child3 = val$child;
}

defineClass(431, 1, {}, AnimBuilder$4);
_.run = function run_9(){
  $add_6(this.val$parent2, this.val$child3);
}
;
var Ltripleplay_anim_AnimBuilder$4_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/4', 431, Ljava_lang_Object_2_classLit);
function $clinit_Animation(){
  $clinit_Animation = emptyMethod;
  new Random;
}

function $apply_2(this$static, time){
  var remain;
  if (this$static._canceled)
    return 0;
  remain = this$static._current.apply_0(time);
  if (remain > 0)
    return remain;
  while (remain <= 0) {
    if (this$static._canceled)
      return 0;
    this$static._current = this$static._current._next;
    if (!this$static._current)
      return remain;
    this$static._current.init(time + remain);
    remain = this$static._current.apply_0(time);
  }
  return remain;
}

function $then(this$static){
  return new Animation$1(this$static, this$static);
}

function Animation(){
  this._root = this;
}

defineClass(152, 1, {});
_.init = function init_0(time){
  this._start = time;
  this._current = this;
}
;
_.toString$ = function toString_75(){
  var name_0;
  name_0 = $getName(this.___clazz$);
  name_0 = $substring(name_0, name_0.lastIndexOf('.') + 1);
  return name_0 + ':' + getHashCode(this) + ' start:' + this._start;
}
;
_._canceled = false;
_._start = 0;
var Ltripleplay_anim_Animation_2_classLit = createForClass('tripleplay.anim', 'Animation', 152, Ljava_lang_Object_2_classLit);
function $add_10(this$static, anim){
  if (this$static._added)
    throw new IllegalStateException_0('Cannot add multiple animations off the same then()');
  this$static._added = true;
  anim._root = this$static.this$01._root;
  anim._next = this$static.this$02._next;
  this$static.this$01._next = anim;
  return anim;
}

defineClass(427, 574, {});
_._added = false;
var Ltripleplay_anim_Animation$ChainBuilder_2_classLit = createForClass('tripleplay.anim', 'Animation/ChainBuilder', 427, Ltripleplay_anim_AnimBuilder_2_classLit);
function Animation$1(this$0, this$0_1){
  this.this$02 = this$0_1;
  this.this$01 = this$0;
}

defineClass(428, 427, {}, Animation$1);
var Ltripleplay_anim_Animation$1_2_classLit = createForClass('tripleplay.anim', 'Animation/1', 428, Ltripleplay_anim_Animation$ChainBuilder_2_classLit);
function $makeComplete(this$static){
  if (!this$static._complete) {
    this$static._action.run();
    this$static._complete = true;
  }
}

function Animation$Action(action){
  $clinit_Animation();
  Animation.call(this);
  this._action = action;
}

defineClass(153, 152, {}, Animation$Action);
_.apply_0 = function apply_1(time){
  $makeComplete(this);
  return this._start - time;
}
;
_.init = function init_1(time){
  this._start = time;
  this._current = this;
  this._complete = false;
}
;
_._complete = false;
var Ltripleplay_anim_Animation$Action_2_classLit = createForClass('tripleplay.anim', 'Animation/Action', 153, Ltripleplay_anim_Animation_2_classLit);
function Animation$Delay(duration){
  $clinit_Animation();
  Animation.call(this);
  this._duration = duration;
}

defineClass(196, 152, {}, Animation$Delay);
_.apply_0 = function apply_2(time){
  return this._start + this._duration - time;
}
;
_._duration = 0;
var Ltripleplay_anim_Animation$Delay_2_classLit = createForClass('tripleplay.anim', 'Animation/Delay', 196, Ltripleplay_anim_Animation_2_classLit);
function $in(this$static, duration){
  this$static._duration = duration;
  return this$static;
}

function $using(this$static, interp){
  this$static._interp = interp;
  return this$static;
}

defineClass(426, 152, {});
_._duration = 1000;
var Ltripleplay_anim_Animation$Interped_2_classLit = createForClass('tripleplay.anim', 'Animation/Interped', 426, Ltripleplay_anim_Animation_2_classLit);
function $from(this$static){
  this$static._from = 0;
  return this$static;
}

function $to(this$static, value_0){
  this$static._to = value_0;
  return this$static;
}

function Animation$One(target){
  $clinit_Animation();
  Animation.call(this);
  this._interp = ($clinit_Interpolator() , LINEAR);
  this._target = target;
}

defineClass(102, 426, {}, Animation$One);
_.apply_0 = function apply_3(time){
  var dt;
  dt = time - this._start;
  this._target.set_0(dt < this._duration?$apply_3(this._interp, this._from, this._to - this._from, dt, this._duration):this._to);
  return this._duration - dt;
}
;
_.init = function init_2(time){
  this._start = time;
  this._current = this;
  this._from == $intern_49 && (this._from = this._target.initial());
}
;
_.toString$ = function toString_76(){
  return $ensureNamesAreInitialized(Ltripleplay_anim_Animation$One_2_classLit) , Ltripleplay_anim_Animation$One_2_classLit.typeName + ' start:' + this._start + ' to ' + this._to;
}
;
_._from = $intern_49;
_._to = 0;
var Ltripleplay_anim_Animation$One_2_classLit = createForClass('tripleplay.anim', 'Animation/One', 102, Ltripleplay_anim_Animation$Interped_2_classLit);
function $add_11(this$static, anim){
  $add_4(this$static._accum, anim);
  return anim;
}

function $clear_2(this$static){
  this$static._anims.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  this$static._nanims.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  this$static._barriers.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  this$static._accum = this$static._nanims;
}

function $onPaint(this$static, clock){
  var ii, ii0, ll, ll0, time;
  time = clock.tick;
  if (this$static._nanims.array.length != 0) {
    for (ii0 = 0 , ll0 = this$static._nanims.array.length; ii0 < ll0; ii0++) {
      $get_7(this$static._nanims, ii0).init(time);
    }
    $addAll_0(this$static._anims, this$static._nanims);
    this$static._nanims.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  }
  for (ii = 0 , ll = this$static._anims.array.length; ii < ll; ii++) {
    if ($apply_2($get_7(this$static._anims, ii), time) <= 0) {
      this$static._anims.remove_1(ii--);
      ll -= 1;
    }
  }
  if (this$static._barriers.array.length != 0 && this$static._anims.array.length == 0 && this$static._nanims.array.length == 0 && $get_7(this$static._barriers, 0).nullMethod()) {
    this$static._barriers.remove_1(0);
    $addAll_0(this$static._nanims, null.nullField);
    this$static._barriers.array.length == 0 && (this$static._accum = this$static._nanims);
  }
}

function Animator(){
  this.onPaint = new Animator$1(this);
  this._anims = new ArrayList;
  this._nanims = new ArrayList;
  this._accum = this._nanims;
  this._barriers = new ArrayList;
}

defineClass(197, 574, {}, Animator);
var Ltripleplay_anim_Animator_2_classLit = createForClass('tripleplay.anim', 'Animator', 197, Ltripleplay_anim_AnimBuilder_2_classLit);
function Animator$1(this$0){
  this.this$01 = this$0;
}

defineClass(435, 547, {}, Animator$1);
_.onEmit = function onEmit_20(clock){
  $onPaint(this.this$01, clock);
}
;
var Ltripleplay_anim_Animator$1_2_classLit = createForClass('tripleplay.anim', 'Animator/1', 435, Lreact_Slot_2_classLit);
function $clinit_Log(){
  $clinit_Log = emptyMethod;
  log_1 = new Logger('tpgame');
}

var log_1;
defineClass(551, 1, {});
var Ltripleplay_game_ScreenStack$Transition_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transition', 551, Ljava_lang_Object_2_classLit);
function ScreenStack$1(){
}

defineClass(259, 551, {}, ScreenStack$1);
var Ltripleplay_game_ScreenStack$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/1', 259, Ltripleplay_game_ScreenStack$Transition_2_classLit);
function $complete(this$static){
  this$static.this$01._transitor = null;
  this$static._onPaint.close_0();
  $complete_0(this$static._trans, this$static._oscreen);
  $setTranslation(this$static._nscreen.layer, this$static.this$01.originX, this$static.this$01.originY);
  this$static.onComplete();
}

function $init_0(this$static){
  $addAndShow(this$static.this$01, this$static._nscreen);
  $init_1(this$static._trans, this$static._oscreen, this$static._nscreen);
  this$static._trans == ($clinit_ScreenStack() , NOOP)?(this$static.this$01._transitor = null , this$static._onPaint.close_0() , $complete_0(this$static._trans, this$static._oscreen) , $setTranslation(this$static._nscreen.layer, this$static.this$01.originX, this$static.this$01.originY) , this$static.onComplete()):(this$static._onPaint = $addConnection(this$static.this$01._game.paint, new ScreenStack$Transitor$1(this$static)));
}

function $paint_0(this$static, clock){
  if (this$static._skipFrames > 0)
    this$static._skipFrames -= 1;
  else {
    this$static._elapsed += clock.dt;
    $update_1(this$static._trans, this$static._oscreen, this$static._nscreen, this$static._elapsed) && (this$static.this$01._transitor = null , this$static._onPaint.close_0() , $complete_0(this$static._trans, this$static._oscreen) , $setTranslation(this$static._nscreen.layer, this$static.this$01.originX, this$static.this$01.originY) , this$static.onComplete());
  }
}

function ScreenStack$Transitor(this$0, oscreen, nscreen, trans){
  this.this$01 = this$0;
  this._onPaint = ($clinit_Closeable$Util() , NOOP_0);
  this._oscreen = oscreen;
  this._nscreen = nscreen;
  this._trans = trans;
}

defineClass(177, 1, {});
_.onComplete = function onComplete(){
}
;
_._elapsed = 0;
_._skipFrames = 0;
var Ltripleplay_game_ScreenStack$Transitor_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transitor', 177, Ljava_lang_Object_2_classLit);
function ScreenStack$2(this$0, this$0_1, $anonymous0, $anonymous1, $anonymous2, val$otop){
  this.this$02 = this$0_1;
  this.val$otop6 = val$otop;
  ScreenStack$Transitor.call(this, this$0, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(260, 177, {}, ScreenStack$2);
_.onComplete = function onComplete_0(){
  $hide(this.this$02, this.val$otop6);
}
;
var Ltripleplay_game_ScreenStack$2_2_classLit = createForClass('tripleplay.game', 'ScreenStack/2', 260, Ltripleplay_game_ScreenStack$Transitor_2_classLit);
function ScreenStack$4(this$0, this$0_1, $anonymous0, $anonymous1, $anonymous2, val$otop){
  this.this$02 = this$0_1;
  this.val$otop6 = val$otop;
  ScreenStack$Transitor.call(this, this$0, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(261, 177, {}, ScreenStack$4);
_.onComplete = function onComplete_1(){
  $hide(this.this$02, this.val$otop6);
}
;
var Ltripleplay_game_ScreenStack$4_2_classLit = createForClass('tripleplay.game', 'ScreenStack/4', 261, Ltripleplay_game_ScreenStack$Transitor_2_classLit);
function ScreenStack$Transitor$1(this$1){
  this.this$11 = this$1;
}

defineClass(258, 547, {}, ScreenStack$Transitor$1);
_.onEmit = function onEmit_21(clock){
  $paint_0(this.this$11, clock);
}
;
var Ltripleplay_game_ScreenStack$Transitor$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transitor/1', 258, Lreact_Slot_2_classLit);
defineClass(575, 551, {});
var Ltripleplay_game_trans_AbstractTransition_2_classLit = createForClass('tripleplay.game.trans', 'AbstractTransition', 575, Ltripleplay_game_ScreenStack$Transition_2_classLit);
defineClass(437, 575, {});
var Ltripleplay_game_trans_InterpedTransition_2_classLit = createForClass('tripleplay.game.trans', 'InterpedTransition', 437, Ltripleplay_game_trans_AbstractTransition_2_classLit);
function $complete_0(this$static, oscreen){
  $setTranslation(oscreen.layer, this$static._osx, this$static._osy);
}

function $dir(this$static){
  this$static._dir = 2;
  return this$static;
}

function $init_1(this$static, oscreen, nscreen){
  switch (this$static._dir) {
    case 0:
      this$static._odx = this$static._originX;
      this$static._ody = this$static._originY - oscreen.game_0.plat.graphics.viewSize.height_0;
      this$static._nsx = this$static._originX;
      this$static._nsy = this$static._originY + nscreen.game_0.plat.graphics.viewSize.height_0;
      break;
    case 1:
      this$static._odx = this$static._originX;
      this$static._ody = this$static._originY + oscreen.game_0.plat.graphics.viewSize.height_0;
      this$static._nsx = this$static._originX;
      this$static._nsy = this$static._originY - nscreen.game_0.plat.graphics.viewSize.height_0;
      break;
    case 2:
    default:this$static._odx = this$static._originX - oscreen.game_0.plat.graphics.viewSize.width_0;
      this$static._ody = this$static._originY;
      this$static._nsx = this$static._originX + nscreen.game_0.plat.graphics.viewSize.width_0;
      this$static._nsy = this$static._originY;
      break;
    case 3:
      this$static._odx = this$static._originX + oscreen.game_0.plat.graphics.viewSize.width_0;
      this$static._ody = this$static._originY;
      this$static._nsx = this$static._originX - nscreen.game_0.plat.graphics.viewSize.width_0;
      this$static._nsy = this$static._originY;
  }
  this$static._osx = oscreen.layer.transform.tx;
  this$static._osy = oscreen.layer.transform.ty;
  $setTranslation(nscreen.layer, this$static._nsx, this$static._nsy);
}

function $update_1(this$static, oscreen, nscreen, elapsed){
  var nx, ny, ox, oy;
  ox = $applyClamp(this$static._interp, this$static._originX, this$static._odx - this$static._originX, elapsed);
  oy = $applyClamp(this$static._interp, this$static._originY, this$static._ody - this$static._originY, elapsed);
  $setTranslation(oscreen.layer, ox, oy);
  nx = $applyClamp(this$static._interp, this$static._nsx, this$static._originX - this$static._nsx, elapsed);
  ny = $applyClamp(this$static._interp, this$static._nsy, this$static._originY - this$static._nsy, elapsed);
  $setTranslation(nscreen.layer, nx, ny);
  return elapsed >= 500;
}

function SlideTransition(stack_0){
  this._interp = ($clinit_Interpolator() , EASE_INOUT);
  this._originX = stack_0.originX;
  this._originY = stack_0.originY;
}

defineClass(199, 437, {}, SlideTransition);
_._dir = 2;
_._nsx = 0;
_._nsy = 0;
_._odx = 0;
_._ody = 0;
_._originX = 0;
_._originY = 0;
_._osx = 0;
_._osy = 0;
var Ltripleplay_game_trans_SlideTransition_2_classLit = createForClass('tripleplay.game.trans', 'SlideTransition', 199, Ltripleplay_game_trans_InterpedTransition_2_classLit);
function $computeSize(this$static, hintX, hintY){
  var insets, ldata, size_0;
  ldata = this$static._ldata = this$static.createLayoutData(hintX, hintY);
  insets = ldata.bg.insets;
  size_0 = this$static.computeSize(ldata, hintX - (insets._left + insets._right), hintY - (insets._top + insets._bottom));
  size_0.width_0 += insets._left + insets._right;
  size_0.height_0 += insets._top + insets._bottom;
  size_0.width_0 = iceil(size_0.width_0);
  size_0.height_0 = iceil(size_0.height_0);
  return size_0;
}

function $contains_1(this$static, x_0, y_0){
  return !(x_0 < 0 || x_0 > this$static._size.width_0 || y_0 < 0 || y_0 > this$static._size.height_0);
}

function $invalidate(this$static){
  this$static._preferredSize = null;
  if ($isSet_0(this$static, ($clinit_Element$Flag() , VALID))) {
    $set_7(this$static, VALID, false);
    !!this$static._parent && $invalidate(this$static._parent);
  }
}

function $isSet_0(this$static, flag){
  return (flag.mask & this$static._flags) != 0;
}

function $layout(this$static){
  var bginst, bgok, height, insets, ldata, width_0;
  if (!$isSet_0(this$static, ($clinit_Element$Flag() , VISIBLE_2)))
    return;
  width_0 = this$static._size.width_0;
  height = this$static._size.height_0;
  ldata = this$static._ldata?this$static._ldata:this$static.createLayoutData(width_0, height);
  bginst = this$static._bginst._target;
  bgok = !!bginst && bginst.this$01 == ldata.bg && $equals_4(bginst.size_0, this$static._size);
  bgok || $clear_3(this$static._bginst);
  if (width_0 > 0 && height > 0 && !bgok) {
    bginst = $set_8(this$static._bginst, ldata.bg.instantiate(this$static._size));
    bginst.addTo(this$static.layer, 0, 0, 0);
  }
  insets = ldata.bg.insets;
  this$static.layout_0(ldata, insets._left, insets._top, width_0 - (insets._left + insets._right), height - (insets._top + insets._bottom));
  this$static._ldata = null;
}

function $root(this$static){
  return !this$static._parent?null:this$static._parent.root_0();
}

function $set_7(this$static, flag, on){
  on?(this$static._flags |= flag.mask):(this$static._flags &= ~flag.mask);
}

function $setStyles(this$static, styles){
  this$static._styles = styles;
  this$static._ldata = null;
  $invalidate(this$static);
  return this$static;
}

function $setStyles_0(this$static, styles){
  return $setStyles(this$static, ($clinit_Styles() , $add_13((null , _noneSingleton), 0, styles)));
}

function $validate(this$static){
  if (!$isSet_0(this$static, ($clinit_Element$Flag() , VALID))) {
    this$static.layout();
    $set_7(this$static, VALID, true);
    this$static.wasValidated();
  }
}

function $wasAdded_0(this$static){
  var b;
  $invalidate(this$static);
  $set_7(this$static, ($clinit_Element$Flag() , IS_ADDING), false);
  for (b = this$static._bindings; b != ($clinit_Element$Binding() , NONE_0); b = b.next)
    $clinit_Closeable$Util();
}

function $wasRemoved(this$static){
  var b;
  $clear_3(this$static._bginst);
  $set_7(this$static, ($clinit_Element$Flag() , IS_REMOVING), false);
  for (b = this$static._bindings; b != ($clinit_Element$Binding() , NONE_0); b = b.next)
    $clinit_Closeable$Util();
}

function $willAdd(this$static){
  return $isSet_0(this$static, ($clinit_Element$Flag() , IS_ADDING)) || !!this$static._parent && $willAdd(this$static._parent);
}

function $willRemove(this$static){
  return $isSet_0(this$static, ($clinit_Element$Flag() , IS_REMOVING)) || !!this$static._parent && $willRemove(this$static._parent);
}

function Element_0(){
  var ref;
  this.layer = new Element$7(this);
  this._flags = ($clinit_Element$Flag() , VISIBLE_2).mask | ENABLED.mask;
  this._size = new Dimension;
  this._styles = ($clinit_Styles() , $clinit_Styles() , _noneSingleton);
  this._bindings = ($clinit_Element$Binding() , NONE_0);
  this._bginst = (ref = new Ref$1 , $set_8(ref, null) , ref);
  $setHitTester(this.layer, new Element$1(this));
  $set_7(this, HIT_DESCEND, true);
}

defineClass(21, 1, $intern_50);
_.computeSize = function computeSize(ldata, hintX, hintY){
  return ldata.computeSize_0(hintX, hintY);
}
;
_.createLayoutData = function createLayoutData(hintX, hintY){
  return new Element$LayoutData(this);
}
;
_.layout = function layout_0(){
  $layout(this);
}
;
_.layout_0 = function layout_1(ldata, left, top_0, width_0, height){
  ldata.layout_1(left, top_0, width_0, height);
}
;
_.preferredSize = function preferredSize(hintX, hintY){
  return !this._preferredSize && (this._preferredSize = $computeSize(this, hintX, hintY)) , this._preferredSize;
}
;
_.root_0 = function root_0(){
  return $root(this);
}
;
_.setLocation = function setLocation(x_0, y_0){
  $setTranslation(this.layer, ifloor(x_0), ifloor(y_0));
}
;
_.setSize = function setSize(width_0, height){
  var changed;
  changed = this._size.width_0 != width_0 || this._size.height_0 != height;
  $setSize_2(this._size, width_0, height);
  !!this._preferredSize && !$equals_4(this._size, this._preferredSize) && (this._ldata = null);
  changed && $invalidate(this);
  return this;
}
;
_.validate = function validate(){
  $validate(this);
}
;
_.wasAdded = function wasAdded(){
  $wasAdded_0(this);
}
;
_.wasRemoved = function wasRemoved(){
  $wasRemoved(this);
}
;
_.wasValidated = function wasValidated(){
}
;
_._flags = 0;
var Ltripleplay_ui_Element_2_classLit = createForClass('tripleplay.ui', 'Element', 21, Ljava_lang_Object_2_classLit);
function Widget(){
  Element_0.call(this);
  this._behave = this.createBehavior();
  if (this._behave) {
    $set_7(this, ($clinit_Element$Flag() , HIT_DESCEND), false);
    $set_7(this, HIT_ABSORB, true);
    $addConnection($events(this.layer), this._behave);
  }
}

defineClass(474, 21, $intern_50);
_.createBehavior = function createBehavior(){
  return null;
}
;
_.layout = function layout_2(){
  $layout(this);
  !!this._behave && $layout_0(this._behave);
}
;
var Ltripleplay_ui_Widget_2_classLit = createForClass('tripleplay.ui', 'Widget', 474, Ltripleplay_ui_Element_2_classLit);
function TextWidget(){
  Widget.call(this);
  this._tglyph = new Glyph(this.layer);
}

defineClass(219, 474, $intern_50);
_.createLayoutData = function createLayoutData_0(hintX, hintY){
  return new TextWidget$TextLayoutData(this, hintX, hintY);
}
;
_.wasRemoved = function wasRemoved_0(){
  $wasRemoved(this);
  $close_8(this._tglyph);
}
;
var Ltripleplay_ui_TextWidget_2_classLit = createForClass('tripleplay.ui', 'TextWidget', 219, Ltripleplay_ui_Widget_2_classLit);
defineClass(475, 219, $intern_50);
_.icon_0 = function icon_0(){
  return this.icon._value;
}
;
_.text_1 = function text_1(){
  return this.text_0._value;
}
;
var Ltripleplay_ui_AbstractTextButton_2_classLit = createForClass('tripleplay.ui', 'AbstractTextButton', 475, Ltripleplay_ui_TextWidget_2_classLit);
function $inset(this$static, uniformInset){
  this$static.insets = ($clinit_Insets() , new Insets(uniformInset, uniformInset, uniformInset, uniformInset));
  return this$static;
}

function $inset_0(this$static, top_0, right, bottom, left){
  this$static.insets = new Insets(top_0, right, bottom, left);
  return this$static;
}

function Background(){
  this.insets = ($clinit_Insets() , ZERO_0);
}

defineClass(110, 1, {});
var Ltripleplay_ui_Background_2_classLit = createForClass('tripleplay.ui', 'Background', 110, Ljava_lang_Object_2_classLit);
function Background$1(val$color){
  this.val$color1 = val$color;
  Background.call(this);
}

defineClass(222, 110, {}, Background$1);
_.instantiate = function instantiate(size_0){
  return new Background$LayerInstance(this, size_0, new Background$1$1(this.val$color1, size_0));
}
;
_.val$color1 = 0;
var Ltripleplay_ui_Background$1_2_classLit = createForClass('tripleplay.ui', 'Background/1', 222, Ltripleplay_ui_Background_2_classLit);
function Background$1$1(val$color, val$size){
  this.val$color2 = val$color;
  this.val$size3 = val$size;
  Layer.call(this);
}

defineClass(495, 17, $intern_26, Background$1$1);
_.paintImpl = function paintImpl_2(surf){
  $fillRect_0($setFillColor(surf, this.val$color2), 0, 0, this.val$size3.width_0, this.val$size3.height_0);
}
;
_.val$color2 = 0;
var Ltripleplay_ui_Background$1$1_2_classLit = createForClass('tripleplay.ui', 'Background/1/1', 495, Lplayn_scene_Layer_2_classLit);
function Background$2(val$bgColor){
  this.val$bgColor1 = val$bgColor;
  this.val$ulColor2 = $intern_51;
  this.val$brColor3 = $intern_52;
  Background.call(this);
}

defineClass(223, 110, {}, Background$2);
_.instantiate = function instantiate_0(size_0){
  return new Background$LayerInstance(this, size_0, new Background$2$1(size_0, this.val$bgColor1, this.val$ulColor2, this.val$brColor3));
}
;
_.val$bgColor1 = 0;
_.val$brColor3 = 0;
_.val$ulColor2 = 0;
var Ltripleplay_ui_Background$2_2_classLit = createForClass('tripleplay.ui', 'Background/2', 223, Ltripleplay_ui_Background_2_classLit);
function Background$2$1(val$size, val$bgColor, val$ulColor, val$brColor){
  this.val$size2 = val$size;
  this.val$bgColor3 = val$bgColor;
  this.val$ulColor4 = val$ulColor;
  this.val$brColor5 = val$brColor;
  Layer.call(this);
}

defineClass(496, 17, $intern_26, Background$2$1);
_.paintImpl = function paintImpl_3(surf){
  var height, width_0;
  width_0 = this.val$size2.width_0;
  height = this.val$size2.height_0;
  $fillRect_0($setFillColor(surf, this.val$bgColor3), 0, 0, width_0, height);
  $drawLine($drawLine($setFillColor(surf, this.val$ulColor4), 0, 0, width_0, 0, 2), 0, 0, 0, height, 2);
  $drawLine($drawLine($drawLine($drawLine($setFillColor(surf, this.val$brColor5), width_0, 0, width_0, height, 1), 1, height - 1, width_0 - 1, height - 1, 1), 0, height, width_0, height, 1), width_0 - 1, 1, width_0 - 1, height - 1, 1);
}
;
_.val$bgColor3 = 0;
_.val$brColor5 = 0;
_.val$ulColor4 = 0;
var Ltripleplay_ui_Background$2$1_2_classLit = createForClass('tripleplay.ui', 'Background/2/1', 496, Lplayn_scene_Layer_2_classLit);
function Background$3(){
  this.val$bgColor1 = -1;
  this.val$color2 = 0;
  this.val$thickness3 = 1;
  Background.call(this);
}

defineClass(497, 110, {}, Background$3);
_.instantiate = function instantiate_1(size_0){
  return new Background$LayerInstance(this, size_0, new Background$3$1(size_0, this.val$bgColor1, this.val$color2, this.val$thickness3));
}
;
_.val$bgColor1 = 0;
_.val$color2 = 0;
_.val$thickness3 = 0;
var Ltripleplay_ui_Background$3_2_classLit = createForClass('tripleplay.ui', 'Background/3', 497, Ltripleplay_ui_Background_2_classLit);
function Background$3$1(val$size, val$bgColor, val$color, val$thickness){
  this.val$size2 = val$size;
  this.val$bgColor3 = val$bgColor;
  this.val$color4 = val$color;
  this.val$thickness5 = val$thickness;
  Layer.call(this);
}

defineClass(498, 17, $intern_26, Background$3$1);
_.paintImpl = function paintImpl_4(surf){
  var height, width_0;
  width_0 = this.val$size2.width_0;
  height = this.val$size2.height_0;
  $fillRect_0($setFillColor(surf, this.val$bgColor3), 0, 0, width_0, height);
  $fillRect_0($fillRect_0($fillRect_0($fillRect_0($setFillColor(surf, this.val$color4), 0, 0, width_0, this.val$thickness5), 0, 0, this.val$thickness5, height), width_0 - this.val$thickness5, 0, this.val$thickness5, height), 0, height - this.val$thickness5, width_0, this.val$thickness5);
}
;
_.val$bgColor3 = 0;
_.val$color4 = 0;
_.val$thickness5 = 0;
var Ltripleplay_ui_Background$3$1_2_classLit = createForClass('tripleplay.ui', 'Background/3/1', 498, Lplayn_scene_Layer_2_classLit);
function Background$Instance(this$0, size_0){
  this.this$01 = this$0;
  this.size_0 = new Dimension_1(size_0);
}

defineClass(221, 1, $intern_23);
var Ltripleplay_ui_Background$Instance_2_classLit = createForClass('tripleplay.ui', 'Background/Instance', 221, Ljava_lang_Object_2_classLit);
function Background$LayerInstance(this$0, size_0, layer){
  Background$Instance.call(this, this$0, size_0);
  this._layer = layer;
}

defineClass(128, 221, $intern_23, Background$LayerInstance);
_.addTo = function addTo(parent_0, x_0, y_0, depthAdjust){
  $setDepth(this._layer, -10 + depthAdjust);
  $translate($transform(this._layer), x_0, y_0);
  $add_6(parent_0, this._layer);
}
;
_.close_0 = function close_18(){
  this._layer.close_0();
}
;
var Ltripleplay_ui_Background$LayerInstance_2_classLit = createForClass('tripleplay.ui', 'Background/LayerInstance', 128, Ltripleplay_ui_Background$Instance_2_classLit);
function $resolveStyle(this$static, style){
  return resolveStyle(this$static._owner, style);
}

function $updateSelected(this$static, selected){
  var wasSelected;
  wasSelected = $isSet_0(this$static._owner, ($clinit_Element$Flag() , SELECTED));
  if (selected != wasSelected) {
    $set_7(this$static._owner, SELECTED, selected);
    $invalidate(this$static._owner);
  }
  return wasSelected;
}

defineClass(500, 557, {});
_.onDrag = function onDrag_0(iact){
  $isSet_0(this._owner, ($clinit_Element$Flag() , ENABLED)) && this.onHover(iact, $contains_1(this._owner, iact.local.x_0, iact.local.y_0));
}
;
_.onEnd = function onEnd_0(iact){
  this.onRelease(iact) && this.onClick(iact);
}
;
_.onStart = function onStart_1(iact){
  $isSet_0(this._owner, ($clinit_Element$Flag() , ENABLED)) && this.onPress(iact);
}
;
var Ltripleplay_ui_Behavior_2_classLit = createForClass('tripleplay.ui', 'Behavior', 500, Lplayn_scene_Pointer$Listener_2_classLit);
defineClass(501, 500, {});
_.onCancel = function onCancel_0(iact){
  $updateSelected(this, false);
}
;
_.onClick = function onClick_0(iact){
}
;
_.onHover = function onHover(iact, inBounds){
  $updateSelected(this, inBounds);
}
;
_.onPress = function onPress(iact){
  $updateSelected(this, true);
}
;
_.onRelease = function onRelease(iact){
  return $updateSelected(this, false);
}
;
var Ltripleplay_ui_Behavior$Select_2_classLit = createForClass('tripleplay.ui', 'Behavior/Select', 501, Ltripleplay_ui_Behavior_2_classLit);
function $clinit_Behavior$Click(){
  $clinit_Behavior$Click = emptyMethod;
  DEBOUNCE_DELAY = ($clinit_Style() , new Style$3(true, valueOf(500)));
}

function $layout_0(this$static){
  $resolveStyle(this$static, ($clinit_Style() , ACTION_SOUND));
  this$static._debounceDelay = $resolveStyle(this$static, DEBOUNCE_DELAY).value_0;
}

function Behavior$Click(owner){
  $clinit_Behavior$Click();
  this._owner = owner;
  this.clicked = ($clinit_AbstractSignal() , new Signal);
}

defineClass(502, 501, {}, Behavior$Click);
_.onClick = function onClick_1(iact){
  this._lastClickStamp = iact.event_0.time;
  $emit(this.clicked, this._owner);
}
;
_.onPress = function onPress_0(iact){
  iact.event_0.time - this._lastClickStamp > this._debounceDelay && $updateSelected(this, true);
}
;
_._debounceDelay = 0;
_._lastClickStamp = 0;
var DEBOUNCE_DELAY;
var Ltripleplay_ui_Behavior$Click_2_classLit = createForClass('tripleplay.ui', 'Behavior/Click', 502, Ltripleplay_ui_Behavior$Select_2_classLit);
function $onClick(this$static, onClick){
  $addConnection(this$static._behave.clicked, onClick);
  return this$static;
}

function Button(){
  TextWidget.call(this);
  this.text_0 = ($clinit_AbstractValue() , new Value(null));
  this.icon = new Value(null);
  this.text_0.updateAndNotify('Play again', false);
  $addConnection(this.text_0, new Element$6(this));
  $addConnection(this.icon, new TextWidget$1(this));
  this.icon.updateAndNotify(null, false);
}

defineClass(220, 475, $intern_50, Button);
_.createBehavior = function createBehavior_0(){
  return new Behavior$Click(this);
}
;
_.getStyleClass = function getStyleClass(){
  return Ltripleplay_ui_Button_2_classLit;
}
;
_.toString$ = function toString_77(){
  return 'Button(' + this.text_0._value + ')';
}
;
var Ltripleplay_ui_Button_2_classLit = createForClass('tripleplay.ui', 'Button', 220, Ltripleplay_ui_AbstractTextButton_2_classLit);
function $didAdd(this$static, child){
  $add_6(this$static.layer, child.layer);
  child._parent = this$static;
  if (!!this$static.root_0() && !$willAdd(child)) {
    $set_7(child, ($clinit_Element$Flag() , IS_ADDING), true);
    child.wasAdded();
  }
}

function $didRemove(this$static, child){
  var needsRemove;
  $remove_8(this$static.layer, child.layer);
  needsRemove = $willRemove(child);
  child._parent = null;
  if (!!this$static.root_0() || needsRemove) {
    $set_7(child, ($clinit_Element$Flag() , IS_REMOVING), true);
    child.wasRemoved();
  }
}

function $wasRemoved_0(this$static){
  var child, count, ii, willDispose;
  $wasRemoved(this$static);
  willDispose = $isSet_0(this$static, ($clinit_Element$Flag() , WILL_DISPOSE));
  for (ii = 0 , count = this$static.childCount(); ii < count; ii++) {
    child = this$static.childAt(ii);
    willDispose && $set_7(child, WILL_DISPOSE, true);
    $set_7(child, IS_REMOVING, true);
    child.wasRemoved();
  }
}

function removeFromParent(element){
  var parent_0;
  if (!element._parent)
    return false;
  parent_0 = element._parent;
  $remove_10(parent_0, element);
  return true;
}

defineClass(76, 21, $intern_53);
_.computeSize = function computeSize_0(ldata, hintX, hintY){
  return this.getLayout().computeSize_1(this, hintX, hintY);
}
;
_.layout_0 = function layout_3(ldata, left, top_0, width_0, height){
  var ii, nn;
  this.getLayout().layout_2(this, left, top_0, width_0, height);
  for (ii = 0 , nn = this.childCount(); ii < nn; ii++)
    this.childAt(ii).validate();
}
;
_.wasAdded = function wasAdded_0(){
  var child, count, ii;
  $wasAdded_0(this);
  for (ii = 0 , count = this.childCount(); ii < count; ii++) {
    child = this.childAt(ii);
    $set_7(child, ($clinit_Element$Flag() , IS_ADDING), true);
    child.wasAdded();
  }
}
;
_.wasRemoved = function wasRemoved_1(){
  $wasRemoved_0(this);
}
;
var Ltripleplay_ui_Container_2_classLit = createForClass('tripleplay.ui', 'Container', 76, Ltripleplay_ui_Element_2_classLit);
var Ltripleplay_ui_Composite_2_classLit = createForClass('tripleplay.ui', 'Composite', null, Ltripleplay_ui_Container_2_classLit);
defineClass(458, 76, $intern_53);
var Ltripleplay_ui_Container$Mutable_2_classLit = createForClass('tripleplay.ui', 'Container/Mutable', 458, Ltripleplay_ui_Container_2_classLit);
function Element$1(this$0){
  this.this$01 = this$0;
}

defineClass(462, 1, {}, Element$1);
_.hitTest = function hitTest_0(layer, p){
  var hit;
  hit = null;
  if ($isSet_0(this.this$01, ($clinit_Element$Flag() , VISIBLE_2)) && $contains_1(this.this$01, p.x_0, p.y_0)) {
    $isSet_0(this.this$01, HIT_DESCEND) && (hit = layer.hitTestDefault(p));
    !hit && $isSet_0(this.this$01, HIT_ABSORB) && (hit = layer);
  }
  return hit;
}
;
_.toString$ = function toString_78(){
  return '<' + this.this$01._size + '>';
}
;
var Ltripleplay_ui_Element$1_2_classLit = createForClass('tripleplay.ui', 'Element/1', 462, Ljava_lang_Object_2_classLit);
function Element$6(this$0){
  this.this$01 = this$0;
  this.val$styles2 = true;
}

defineClass(210, 554, {}, Element$6);
_.onEmit_0 = function onEmit_22(){
  $invalidate(this.this$01);
  this.val$styles2 && (this.this$01._ldata = null);
}
;
_.val$styles2 = false;
var Ltripleplay_ui_Element$6_2_classLit = createForClass('tripleplay.ui', 'Element/6', 210, Lreact_UnitSlot_2_classLit);
function Element$7(this$0){
  this.this$01 = this$0;
  GroupLayer.call(this);
}

defineClass(463, 46, $intern_26, Element$7);
_.name_1 = function name_12(){
  return this.this$01 + ' layer';
}
;
var Ltripleplay_ui_Element$7_2_classLit = createForClass('tripleplay.ui', 'Element/7', 463, Lplayn_scene_GroupLayer_2_classLit);
function $clinit_Element$Binding(){
  $clinit_Element$Binding = emptyMethod;
  NONE_0 = new Element$Binding$1;
}

defineClass(460, 1, {});
var NONE_0;
var Ltripleplay_ui_Element$Binding_2_classLit = createForClass('tripleplay.ui', 'Element/Binding', 460, Ljava_lang_Object_2_classLit);
function Element$Binding$1(){
  $clinit_Closeable$Util();
  this.next = null;
}

defineClass(461, 460, {}, Element$Binding$1);
var Ltripleplay_ui_Element$Binding$1_2_classLit = createForClass('tripleplay.ui', 'Element/Binding/1', 461, Ltripleplay_ui_Element$Binding_2_classLit);
function $clinit_Element$Flag(){
  $clinit_Element$Flag = emptyMethod;
  VALID = new Element$Flag('VALID', 0, 1);
  ENABLED = new Element$Flag('ENABLED', 1, 2);
  VISIBLE_2 = new Element$Flag('VISIBLE', 2, 4);
  SELECTED = new Element$Flag('SELECTED', 3, 8);
  WILL_DISPOSE = new Element$Flag('WILL_DISPOSE', 4, 16);
  HIT_DESCEND = new Element$Flag('HIT_DESCEND', 5, 32);
  HIT_ABSORB = new Element$Flag('HIT_ABSORB', 6, 64);
  IS_REMOVING = new Element$Flag('IS_REMOVING', 7, 128);
  IS_ADDING = new Element$Flag('IS_ADDING', 8, 256);
}

function Element$Flag(enum$name, enum$ordinal, mask){
  Enum.call(this, enum$name, enum$ordinal);
  this.mask = mask;
}

function values_29(){
  $clinit_Element$Flag();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Element$Flag_2_classLit, 1), $intern_1, 41, 0, [VALID, ENABLED, VISIBLE_2, SELECTED, WILL_DISPOSE, HIT_DESCEND, HIT_ABSORB, IS_REMOVING, IS_ADDING]);
}

defineClass(41, 6, {3:1, 7:1, 6:1, 41:1}, Element$Flag);
_.mask = 0;
var ENABLED, HIT_ABSORB, HIT_DESCEND, IS_ADDING, IS_REMOVING, SELECTED, VALID, VISIBLE_2, WILL_DISPOSE;
var Ltripleplay_ui_Element$Flag_2_classLit = createForEnum('tripleplay.ui', 'Element/Flag', 41, Ljava_lang_Enum_2_classLit, values_29);
function Element$LayoutData(this$0){
  this.this$01_0 = this$0;
  this.bg = resolveStyle(this.this$01_0, ($clinit_Style() , BACKGROUND));
}

defineClass(209, 1, {}, Element$LayoutData);
_.computeSize_0 = function computeSize_1(hintX, hintY){
  return new Dimension_0(0, 0);
}
;
_.layout_1 = function layout_4(left, top_0, width_0, height){
}
;
var Ltripleplay_ui_Element$LayoutData_2_classLit = createForClass('tripleplay.ui', 'Element/LayoutData', 209, Ljava_lang_Object_2_classLit);
function $add_12(this$static, children){
  var child, child$index, child$index0, child$max, child$max0;
  for (child$index0 = 0 , child$max0 = children.length; child$index0 < child$max0; ++child$index0) {
    child = children[child$index0];
    removeFromParent(child);
  }
  $addAll_0(this$static._children, new Arrays$ArrayList(children));
  for (child$index = 0 , child$max = children.length; child$index < child$max; ++child$index) {
    child = children[child$index];
    $didAdd(this$static, child);
    $emit(this$static._childAdded, child);
  }
  $invalidate(this$static);
  return this$static;
}

function $remove_10(this$static, child){
  if ($remove_4(this$static._children, child)) {
    $didRemove(this$static, child);
    $emit(this$static._childRemoved, child);
    $invalidate(this$static);
  }
}

function Elements(layout){
  Element_0.call(this);
  this._children = new ArrayList;
  this._childAdded = ($clinit_AbstractSignal() , new Signal);
  this._childRemoved = new Signal;
  this._layout = layout;
  $set_7(this, ($clinit_Element$Flag() , HIT_DESCEND), true);
}

defineClass(208, 458, $intern_53);
_.childAt = function childAt(index_0){
  return $get_7(this._children, index_0);
}
;
_.childCount = function childCount(){
  return this._children.array.length;
}
;
_.getLayout = function getLayout(){
  return this._layout;
}
;
_.iterator = function iterator_19(){
  return unmodifiableList(this._children).iterator();
}
;
_.stylesheet = function stylesheet_0(){
  return this._sheet;
}
;
var Ltripleplay_ui_Elements_2_classLit = createForClass('tripleplay.ui', 'Elements', 208, Ltripleplay_ui_Container$Mutable_2_classLit);
function Group(layout){
  Elements.call(this, layout);
}

defineClass(508, 208, $intern_53, Group);
_.getStyleClass = function getStyleClass_0(){
  return Ltripleplay_ui_Group_2_classLit;
}
;
var Ltripleplay_ui_Group_2_classLit = createForClass('tripleplay.ui', 'Group', 508, Ltripleplay_ui_Elements_2_classLit);
function $clinit_IconEffect(){
  $clinit_IconEffect = emptyMethod;
  NONE_1 = new IconEffect$1;
}

defineClass(588, 1, {});
var NONE_1;
var Ltripleplay_ui_IconEffect_2_classLit = createForClass('tripleplay.ui', 'IconEffect', 588, Ljava_lang_Object_2_classLit);
function IconEffect$1(){
}

defineClass(505, 588, {}, IconEffect$1);
var Ltripleplay_ui_IconEffect$1_2_classLit = createForClass('tripleplay.ui', 'IconEffect/1', 505, Ltripleplay_ui_IconEffect_2_classLit);
function $addRoot(this$static, root){
  $add_4(this$static._roots, root);
  return root;
}

function $createRoot(this$static, layout, sheet_0, parent_0){
  var root;
  root = $addRoot(this$static, new Root(this$static, layout, sheet_0));
  $add_6(parent_0, root.layer);
  return root;
}

function $disposeRoot(this$static, root){
  if (!$remove_4(this$static._roots, root))
    return false;
  $set_7(root, ($clinit_Element$Flag() , WILL_DISPOSE), true);
  $wasRemoved_0(root);
  $close_4(root.layer);
  return true;
}

function $paint_1(this$static){
  var ii, ll;
  for (ii = 0 , ll = this$static._roots.array.length; ii < ll; ii++)
    $validate($get_7(this$static._roots, ii));
}

function Interface(plat, frame_0){
  this.anim = new Animator;
  this._roots = new ArrayList;
  this.plat = plat;
  this._onFrame = ($clinit_Closeable$Util() , new Closeable$Util$2(initValues(getClassLiteralForArray(Lreact_Closeable_2_classLit, 1), $intern_1, 11, 0, [$addConnection(frame_0, new Interface$1(this)), $addConnection(frame_0, this.anim.onPaint)])));
}

defineClass(440, 1, $intern_23, Interface);
_.close_0 = function close_19(){
  $close_6(this._onFrame);
}
;
var Ltripleplay_ui_Interface_2_classLit = createForClass('tripleplay.ui', 'Interface', 440, Ljava_lang_Object_2_classLit);
function $onEmit_11(this$static){
  $paint_1(this$static.this$01);
}

function Interface$1(this$0){
  this.this$01 = this$0;
}

defineClass(441, 547, {}, Interface$1);
_.onEmit = function onEmit_23(clock){
  $onEmit_11(this, clock);
}
;
var Ltripleplay_ui_Interface$1_2_classLit = createForClass('tripleplay.ui', 'Interface/1', 441, Lreact_Slot_2_classLit);
function Label(text_0){
  TextWidget.call(this);
  this.text_0 = ($clinit_AbstractValue() , new Value(null));
  this.icon = new Value(null);
  this.text_0.updateAndNotify(text_0, false);
  $addConnection(this.text_0, new Element$6(this));
  $addConnection(this.icon, new TextWidget$1(this));
  this.icon.updateAndNotify(null, false);
}

defineClass(167, 219, $intern_50, Label);
_.getStyleClass = function getStyleClass_1(){
  return Ltripleplay_ui_Label_2_classLit;
}
;
_.icon_0 = function icon_1(){
  return this.icon._value;
}
;
_.text_1 = function text_2(){
  return this.text_0._value;
}
;
_.toString$ = function toString_79(){
  return 'Label(' + this.text_0._value + ')';
}
;
var Ltripleplay_ui_Label_2_classLit = createForClass('tripleplay.ui', 'Label', 167, Ltripleplay_ui_TextWidget_2_classLit);
function $setBounds_0(elem, x_0, y_0, width_0, height){
  elem.setLocation(x_0, y_0);
  elem.setSize(width_0, height);
}

defineClass(582, 1, {});
var Ltripleplay_ui_Layout_2_classLit = createForClass('tripleplay.ui', 'Layout', 582, Ljava_lang_Object_2_classLit);
defineClass(583, 1, {});
var Ltripleplay_ui_Layout$Constraint_2_classLit = createForClass('tripleplay.ui', 'Layout/Constraint', 583, Ljava_lang_Object_2_classLit);
function $pack(this$static, widthHint){
  var psize;
  psize = (!this$static._preferredSize && (this$static._preferredSize = $computeSize(this$static, widthHint, 0)) , this$static._preferredSize);
  $setSize_4(this$static, psize.width_0, psize.height_0);
  return this$static;
}

function $setSize_4(this$static, width_0, height){
  $setSize_2(this$static._size, width_0, height);
  $invalidate(this$static);
  return this$static;
}

function Root(iface, layout, sheet_0){
  Elements.call(this, layout);
  this.validated = ($clinit_AbstractSignal() , new Signal);
  this.iface = iface;
  this._sheet = sheet_0;
  $set_7(this, ($clinit_Element$Flag() , HIT_ABSORB), true);
}

defineClass(459, 208, {12:1, 11:1, 76:1, 21:1}, Root);
_.close_0 = function close_20(){
  $disposeRoot(this.iface, this);
}
;
_.getStyleClass = function getStyleClass_2(){
  return Ltripleplay_ui_Root_2_classLit;
}
;
_.preferredSize = function preferredSize_0(hintX, hintY){
  return !this._preferredSize && (this._preferredSize = $computeSize(this, hintX, hintY)) , this._preferredSize;
}
;
_.root_0 = function root_1(){
  return this;
}
;
_.setLocation = function setLocation_0(x_0, y_0){
  $setTranslation(this.layer, ifloor(x_0), ifloor(y_0));
}
;
_.setSize = function setSize_0(width_0, height){
  return $setSize_4(this, width_0, height);
}
;
_.validate = function validate_0(){
  $validate(this);
}
;
_.wasValidated = function wasValidated_0(){
  $emit(this.validated, this);
}
;
var Ltripleplay_ui_Root_2_classLit = createForClass('tripleplay.ui', 'Root', 459, Ltripleplay_ui_Elements_2_classLit);
function newSheetBuilder(gfx){
  var butBg, butSelBg;
  butBg = $inset_0(new RoundRectBackground(gfx, $intern_54, $intern_52), 5, 6, 2, 6);
  butSelBg = $inset_0(new RoundRectBackground(gfx, $intern_54, $intern_51), 6, 5, 1, 7);
  return $add_16($add_14($add_16($add_16($add_14($add_16($add_14($add_16($add_14($add_16($add_14($add_16(new Stylesheet$Builder, Ltripleplay_ui_Button_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , BACKGROUND), butBg)])), Ltripleplay_ui_Button_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butSelBg)])), Ltripleplay_ui_ToggleButton_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butBg)])), Ltripleplay_ui_ToggleButton_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butSelBg)])), Ltripleplay_ui_CheckBox_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset_0(new RoundRectBackground(gfx, $intern_54, $intern_52), 3, 2, 0, 3))])), Ltripleplay_ui_CheckBox_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset_0(new RoundRectBackground(gfx, $intern_54, $intern_51), 3, 2, 0, 3))])), Ltripleplay_ui_Field_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$2(-1), 5)), HALIGN.left_0])), Ltripleplay_ui_Field_2_classLit, 1, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$2($intern_54), 5))])), Ltripleplay_ui_Menu_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$3, 6))])), Ltripleplay_ui_MenuItem_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, new Background$1(-1)), HALIGN.left_0])), Ltripleplay_ui_MenuItem_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, new Background$1($intern_27)), new Style$Binding(COLOR, valueOf(-1))])), Ltripleplay_ui_Tabs_2_classLit, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Tabs() , HIGHLIGHTER), new Tabs$2)]));
}

function $clinit_Style(){
  $clinit_Style = emptyMethod;
  COLOR = new Style$1;
  HIGHLIGHT = new Style$2;
  SHADOW = new Style$3(true, valueOf(1426063360));
  SHADOW_X = new Style$3(true, new Float(2));
  SHADOW_Y = new Style$3(true, new Float(2));
  GRADIENT_COLOR = new Style$3(true, valueOf(-3735552));
  GRADIENT_TYPE = new Style$GradientTypeStyle;
  OUTLINE_WIDTH = new Style$3(true, new Float(1));
  OUTLINE_CAP = new Style$3(true, ($clinit_Canvas$LineCap() , ROUND_1));
  OUTLINE_JOIN = new Style$3(true, ($clinit_Canvas$LineJoin() , ROUND_2));
  HALIGN = new Style$HAlignStyle;
  VALIGN = new Style$VAlignStyle;
  FONT = new Style$3(true, new Font(16));
  TEXT_WRAP = new Style$Flag(false);
  TEXT_EFFECT = new Style$TextEffectStyle;
  UNDERLINE = new Style$Flag(true);
  AUTO_SHRINK = new Style$Flag(false);
  BACKGROUND = new Style$3(false, new BlankBackground);
  ICON_POS = new Style$PosStyle;
  ICON_GAP = new Style$3(false, valueOf(2));
  ICON_CUDDLE = new Style$Flag(false);
  ICON_EFFECT = new Style$3(false, ($clinit_IconEffect() , NONE_1));
  ACTION_SOUND = new Style$3(false, null);
}

function Style(inherited){
  this.inherited = inherited;
}

function toAlignment(align_0){
  $clinit_Style();
  switch (align_0.ordinal) {
    default:case 0:
      return $clinit_TextBlock$Align() , LEFT_2;
    case 1:
      return $clinit_TextBlock$Align() , RIGHT_2;
    case 2:
      return $clinit_TextBlock$Align() , CENTER;
  }
}

defineClass(55, 1, {});
_.inherited = false;
var ACTION_SOUND, AUTO_SHRINK, BACKGROUND, COLOR, FONT, GRADIENT_COLOR, GRADIENT_TYPE, HALIGN, HIGHLIGHT, ICON_CUDDLE, ICON_EFFECT, ICON_GAP, ICON_POS, OUTLINE_CAP, OUTLINE_JOIN, OUTLINE_WIDTH, SHADOW, SHADOW_X, SHADOW_Y, TEXT_EFFECT, TEXT_WRAP, UNDERLINE, VALIGN;
var Ltripleplay_ui_Style_2_classLit = createForClass('tripleplay.ui', 'Style', 55, Ljava_lang_Object_2_classLit);
function Style$1(){
  Style.call(this, true);
}

defineClass(492, 55, {}, Style$1);
_.getDefault = function getDefault(elem){
  return valueOf($isSet_0(elem, ($clinit_Element$Flag() , ENABLED))?$intern_27:-10066330);
}
;
var Ltripleplay_ui_Style$1_2_classLit = createForClass('tripleplay.ui', 'Style/1', 492, Ltripleplay_ui_Style_2_classLit);
function Style$2(){
  Style.call(this, true);
}

defineClass(493, 55, {}, Style$2);
_.getDefault = function getDefault_0(elem){
  return valueOf($isSet_0(elem, ($clinit_Element$Flag() , ENABLED))?-1426063361:-1429418804);
}
;
var Ltripleplay_ui_Style$2_2_classLit = createForClass('tripleplay.ui', 'Style/2', 493, Ltripleplay_ui_Style_2_classLit);
function Style$3($anonymous0, val$defaultValue){
  $clinit_Style();
  this.val$defaultValue2 = val$defaultValue;
  Style.call(this, $anonymous0);
}

defineClass(29, 55, {}, Style$3);
_.getDefault = function getDefault_1(elem){
  return this.val$defaultValue2;
}
;
var Ltripleplay_ui_Style$3_2_classLit = createForClass('tripleplay.ui', 'Style/3', 29, Ltripleplay_ui_Style_2_classLit);
function Style$Binding(style, value_0){
  this.style_0 = style;
  this.value_0 = value_0;
}

defineClass(9, 1, {9:1}, Style$Binding);
var Ltripleplay_ui_Style$Binding_2_classLit = createForClass('tripleplay.ui', 'Style/Binding', 9, Ljava_lang_Object_2_classLit);
function Style$Flag(inherited){
  Style.call(this, inherited);
  new Style$Binding(this, ($clinit_Boolean() , $clinit_Boolean() , FALSE));
  new Style$Binding(this, (null , TRUE));
  this._default = (null , FALSE);
}

defineClass(127, 55, {}, Style$Flag);
_.getDefault = function getDefault_2(mode){
  return this._default;
}
;
var Ltripleplay_ui_Style$Flag_2_classLit = createForClass('tripleplay.ui', 'Style/Flag', 127, Ltripleplay_ui_Style_2_classLit);
function Style$GradientTypeStyle(){
  Style.call(this, true);
  new Style$Binding(this, ($clinit_EffectRenderer$Gradient$Type() , BOTTOM_1));
  new Style$Binding(this, TOP_1);
  new Style$Binding(this, CENTER_4);
}

defineClass(480, 55, {}, Style$GradientTypeStyle);
_.getDefault = function getDefault_3(elem){
  return $clinit_EffectRenderer$Gradient$Type() , BOTTOM_1;
}
;
var Ltripleplay_ui_Style$GradientTypeStyle_2_classLit = createForClass('tripleplay.ui', 'Style/GradientTypeStyle', 480, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$HAlign(){
  $clinit_Style$HAlign = emptyMethod;
  LEFT_3 = new Style$HAlign$1;
  RIGHT_3 = new Style$HAlign$2;
  CENTER_1 = new Style$HAlign$3;
}

function Style$HAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_30(){
  $clinit_Style$HAlign();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$HAlign_2_classLit, 1), $intern_1, 65, 0, [LEFT_3, RIGHT_3, CENTER_1]);
}

defineClass(65, 6, $intern_55);
var CENTER_1, LEFT_3, RIGHT_3;
var Ltripleplay_ui_Style$HAlign_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign', 65, Ljava_lang_Enum_2_classLit, values_30);
function Style$HAlign$1(){
  Style$HAlign.call(this, 'LEFT', 0);
}

defineClass(481, 65, $intern_55, Style$HAlign$1);
_.offset = function offset_0(size_0, extent){
  return 0;
}
;
var Ltripleplay_ui_Style$HAlign$1_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/1', 481, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlign$2(){
  Style$HAlign.call(this, 'RIGHT', 1);
}

defineClass(482, 65, $intern_55, Style$HAlign$2);
_.offset = function offset_1(size_0, extent){
  return extent - size_0;
}
;
var Ltripleplay_ui_Style$HAlign$2_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/2', 482, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlign$3(){
  Style$HAlign.call(this, 'CENTER', 2);
}

defineClass(483, 65, $intern_55, Style$HAlign$3);
_.offset = function offset_2(size_0, extent){
  return (extent - size_0) / 2;
}
;
var Ltripleplay_ui_Style$HAlign$3_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/3', 483, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlignStyle(){
  Style.call(this, false);
  this.left_0 = new Style$Binding(this, ($clinit_Style$HAlign() , LEFT_3));
  new Style$Binding(this, RIGHT_3);
  new Style$Binding(this, CENTER_1);
}

defineClass(476, 55, {}, Style$HAlignStyle);
_.getDefault = function getDefault_4(elem){
  return $clinit_Style$HAlign() , CENTER_1;
}
;
var Ltripleplay_ui_Style$HAlignStyle_2_classLit = createForClass('tripleplay.ui', 'Style/HAlignStyle', 476, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$Pos(){
  $clinit_Style$Pos = emptyMethod;
  LEFT_4 = new Style$Pos('LEFT', 0);
  ABOVE_0 = new Style$Pos('ABOVE', 1);
  RIGHT_4 = new Style$Pos('RIGHT', 2);
  BELOW_0 = new Style$Pos('BELOW', 3);
}

function Style$Pos(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_31(){
  $clinit_Style$Pos();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Pos_2_classLit, 1), $intern_1, 87, 0, [LEFT_4, ABOVE_0, RIGHT_4, BELOW_0]);
}

defineClass(87, 6, {3:1, 7:1, 6:1, 87:1}, Style$Pos);
var ABOVE_0, BELOW_0, LEFT_4, RIGHT_4;
var Ltripleplay_ui_Style$Pos_2_classLit = createForEnum('tripleplay.ui', 'Style/Pos', 87, Ljava_lang_Enum_2_classLit, values_31);
function Style$PosStyle(){
  Style.call(this, false);
  new Style$Binding(this, ($clinit_Style$Pos() , LEFT_4));
  new Style$Binding(this, ABOVE_0);
  new Style$Binding(this, RIGHT_4);
  new Style$Binding(this, BELOW_0);
}

defineClass(478, 55, {}, Style$PosStyle);
_.getDefault = function getDefault_5(elem){
  return $clinit_Style$Pos() , LEFT_4;
}
;
var Ltripleplay_ui_Style$PosStyle_2_classLit = createForClass('tripleplay.ui', 'Style/PosStyle', 478, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$TextEffect(){
  $clinit_Style$TextEffect = emptyMethod;
  PIXEL_OUTLINE = new Style$TextEffect$1;
  VECTOR_OUTLINE = new Style$TextEffect$2;
  SHADOW_0 = new Style$TextEffect$3;
  GRADIENT = new Style$TextEffect$4;
  NONE_2 = new Style$TextEffect$5;
}

function Style$TextEffect(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_32(){
  $clinit_Style$TextEffect();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$TextEffect_2_classLit, 1), $intern_1, 38, 0, [PIXEL_OUTLINE, VECTOR_OUTLINE, SHADOW_0, GRADIENT, NONE_2]);
}

defineClass(38, 6, $intern_56);
var GRADIENT, NONE_2, PIXEL_OUTLINE, SHADOW_0, VECTOR_OUTLINE;
var Ltripleplay_ui_Style$TextEffect_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect', 38, Ljava_lang_Enum_2_classLit, values_32);
function Style$TextEffect$1(){
  Style$TextEffect.call(this, 'PIXEL_OUTLINE', 0);
}

defineClass(487, 38, $intern_56, Style$TextEffect$1);
_.createEffectRenderer = function createEffectRenderer(elem){
  return new EffectRenderer$PixelOutline(resolveStyle(elem, ($clinit_Style() , HIGHLIGHT)).value_0);
}
;
var Ltripleplay_ui_Style$TextEffect$1_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/1', 487, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$2(){
  Style$TextEffect.call(this, 'VECTOR_OUTLINE', 1);
}

defineClass(488, 38, $intern_56, Style$TextEffect$2);
_.createEffectRenderer = function createEffectRenderer_0(elem){
  return new EffectRenderer$VectorOutline(resolveStyle(elem, ($clinit_Style() , HIGHLIGHT)).value_0, resolveStyle(elem, OUTLINE_WIDTH).value_0, resolveStyle(elem, OUTLINE_CAP), resolveStyle(elem, OUTLINE_JOIN));
}
;
var Ltripleplay_ui_Style$TextEffect$2_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/2', 488, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$3(){
  Style$TextEffect.call(this, 'SHADOW', 2);
}

defineClass(489, 38, $intern_56, Style$TextEffect$3);
_.createEffectRenderer = function createEffectRenderer_1(elem){
  return new EffectRenderer$Shadow(resolveStyle(elem, ($clinit_Style() , SHADOW)).value_0, resolveStyle(elem, SHADOW_X).value_0, resolveStyle(elem, SHADOW_Y).value_0);
}
;
var Ltripleplay_ui_Style$TextEffect$3_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/3', 489, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$4(){
  Style$TextEffect.call(this, 'GRADIENT', 3);
}

defineClass(490, 38, $intern_56, Style$TextEffect$4);
_.createEffectRenderer = function createEffectRenderer_2(elem){
  return new EffectRenderer$Gradient(resolveStyle(elem, ($clinit_Style() , GRADIENT_COLOR)).value_0, resolveStyle(elem, GRADIENT_TYPE));
}
;
var Ltripleplay_ui_Style$TextEffect$4_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/4', 490, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$5(){
  Style$TextEffect.call(this, 'NONE', 4);
}

defineClass(491, 38, $intern_56, Style$TextEffect$5);
_.createEffectRenderer = function createEffectRenderer_3(elem){
  return $clinit_EffectRenderer() , NONE_3;
}
;
var Ltripleplay_ui_Style$TextEffect$5_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/5', 491, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffectStyle(){
  Style.call(this, true);
  new Style$Binding(this, ($clinit_Style$TextEffect() , PIXEL_OUTLINE));
  new Style$Binding(this, VECTOR_OUTLINE);
  new Style$Binding(this, SHADOW_0);
  new Style$Binding(this, GRADIENT);
  new Style$Binding(this, NONE_2);
}

defineClass(479, 55, {}, Style$TextEffectStyle);
_.getDefault = function getDefault_6(elem){
  return $clinit_Style$TextEffect() , NONE_2;
}
;
var Ltripleplay_ui_Style$TextEffectStyle_2_classLit = createForClass('tripleplay.ui', 'Style/TextEffectStyle', 479, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$VAlign(){
  $clinit_Style$VAlign = emptyMethod;
  TOP_0 = new Style$VAlign$1;
  BOTTOM_0 = new Style$VAlign$2;
  CENTER_2 = new Style$VAlign$3;
}

function Style$VAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_33(){
  $clinit_Style$VAlign();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$VAlign_2_classLit, 1), $intern_1, 66, 0, [TOP_0, BOTTOM_0, CENTER_2]);
}

defineClass(66, 6, $intern_57);
var BOTTOM_0, CENTER_2, TOP_0;
var Ltripleplay_ui_Style$VAlign_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign', 66, Ljava_lang_Enum_2_classLit, values_33);
function Style$VAlign$1(){
  Style$VAlign.call(this, 'TOP', 0);
}

defineClass(484, 66, $intern_57, Style$VAlign$1);
_.offset = function offset_3(size_0, extent){
  return 0;
}
;
var Ltripleplay_ui_Style$VAlign$1_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/1', 484, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlign$2(){
  Style$VAlign.call(this, 'BOTTOM', 1);
}

defineClass(485, 66, $intern_57, Style$VAlign$2);
_.offset = function offset_4(size_0, extent){
  return extent - size_0;
}
;
var Ltripleplay_ui_Style$VAlign$2_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/2', 485, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlign$3(){
  Style$VAlign.call(this, 'CENTER', 2);
}

defineClass(486, 66, $intern_57, Style$VAlign$3);
_.offset = function offset_5(size_0, extent){
  return (extent - size_0) / 2;
}
;
var Ltripleplay_ui_Style$VAlign$3_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/3', 486, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlignStyle(){
  Style.call(this, false);
  new Style$Binding(this, ($clinit_Style$VAlign() , TOP_0));
  new Style$Binding(this, BOTTOM_0);
  new Style$Binding(this, CENTER_2);
}

defineClass(477, 55, {}, Style$VAlignStyle);
_.getDefault = function getDefault_7(elem){
  return $clinit_Style$VAlign() , CENTER_2;
}
;
var Ltripleplay_ui_Style$VAlignStyle_2_classLit = createForClass('tripleplay.ui', 'Style/VAlignStyle', 477, Ltripleplay_ui_Style_2_classLit);
function $clinit_Styles(){
  $clinit_Styles = emptyMethod;
  _noneSingleton = new Styles(initDim(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 68, 0, 0, 1));
}

function $add_13(this$static, mode, bindings){
  var ii, nbindings;
  if (bindings.length == 0)
    return this$static;
  nbindings = initDim(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 68, bindings.length, 0, 1);
  for (ii = 0; ii < bindings.length; ii++) {
    nbindings[ii] = new Styles$Binding(bindings[ii], mode);
  }
  return $merge_0(this$static, nbindings);
}

function $get_9(this$static, key, elem){
  var cmp, high, low, mid, midVal;
  low = 0;
  high = this$static._bindings.length - 1;
  while (low <= high) {
    mid = low + high >>> 1;
    midVal = this$static._bindings[mid];
    cmp = $compareToStyle(midVal, key);
    if (cmp < 0)
      low = mid + 1;
    else if (cmp > 0)
      high = mid - 1;
    else 
      return $get_10(midVal, elem);
  }
  return null;
}

function $merge(this$static, styles){
  if (this$static._bindings.length == 0)
    return styles;
  return $merge_0(this$static, styles._bindings);
}

function $merge_0(this$static, obindings){
  var didx, dupidx, dups, idx, idx0, ii, ii0, nb, nbindings, ob;
  if (obindings.length == 0)
    return this$static;
  dupidx = initDim(I_classLit, $intern_30, 0, obindings.length, 7, 1);
  dups = 0;
  for (ii0 = 0; ii0 < obindings.length; ii0++) {
    idx0 = binarySearch(this$static._bindings, obindings[ii0], ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
    idx0 >= 0 && ++dups;
    dupidx[ii0] = idx0;
  }
  nbindings = initDim(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 68, this$static._bindings.length + obindings.length - dups, 0, 1);
  arraycopy(this$static._bindings, 0, nbindings, 0, this$static._bindings.length);
  idx = this$static._bindings.length;
  for (ii = 0; ii < obindings.length; ii++) {
    didx = dupidx[ii];
    if (didx >= 0) {
      nb = nbindings[didx];
      ob = obindings[ii];
      nbindings[didx] = new Styles$Binding_1(nb.style_0, $merge_1(nb._defaultV, ob._defaultV), $merge_1(nb._disabledV, ob._disabledV), $merge_1(nb._selectedV, ob._selectedV), $merge_1(nb._disSelectedV, ob._disSelectedV));
    }
     else 
      nbindings[idx++] = obindings[ii];
  }
  mergeSort(nbindings, 0, nbindings.length, ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  return new Styles(nbindings);
}

function Styles(bindings){
  this._bindings = bindings;
}

function make(bindings){
  $clinit_Styles();
  return $add_13(_noneSingleton, 0, bindings);
}

function resolveStyle(element, style){
  $clinit_Styles();
  var group, sheet_0, value_0;
  value_0 = $get_9(element._styles, style, element);
  if (value_0 != null)
    return value_0;
  group = instanceOf(element, 76)?element:element._parent;
  for (; group; group = group._parent) {
    sheet_0 = group.stylesheet();
    if (!sheet_0)
      continue;
    value_0 = $get_11(sheet_0, style, element.getStyleClass(), element);
    if (value_0 != null)
      return value_0;
  }
  return style.getDefault(element);
}

defineClass(225, 1, {}, Styles);
var _noneSingleton;
var Ltripleplay_ui_Styles_2_classLit = createForClass('tripleplay.ui', 'Styles', 225, Ljava_lang_Object_2_classLit);
function $compareTo_3(this$static, other){
  var hc, ohc;
  if (this$static.style_0 == other.style_0)
    return 0;
  hc = getHashCode(this$static.style_0);
  ohc = getHashCode(other.style_0);
  return hc < ohc?-1:1;
}

function $compareToStyle(this$static, style){
  var hc, ohc;
  if (this$static.style_0 == style)
    return 0;
  hc = getHashCode(this$static.style_0);
  ohc = getHashCode(style);
  return hc < ohc?-1:1;
}

function $get_10(this$static, elem){
  if ($isSet_0(elem, ($clinit_Element$Flag() , ENABLED))) {
    if ($isSet_0(elem, SELECTED) && this$static._selectedV != null)
      return this$static._selectedV;
  }
   else {
    if ($isSet_0(elem, SELECTED) && this$static._disSelectedV != null)
      return this$static._disSelectedV;
    if (this$static._disabledV != null)
      return this$static._disabledV;
  }
  return this$static._defaultV;
}

function $merge_1(ours, theirs){
  return theirs == null?ours:theirs;
}

function Styles$Binding(binding, mode){
  Styles$Binding_0.call(this, binding.style_0);
  switch (mode) {
    case 0:
      this._defaultV = binding.value_0;
      break;
    case 1:
      this._disabledV = binding.value_0;
      break;
    case 2:
      this._selectedV = binding.value_0;
      break;
    case 3:
      this._disSelectedV = binding.value_0;
  }
}

function Styles$Binding_0(style){
  this.style_0 = style;
}

function Styles$Binding_1(style, defaultV, disabledV, selectedV, disSelectedV){
  Styles$Binding_0.call(this, style);
  this._defaultV = defaultV;
  this._disabledV = disabledV;
  this._selectedV = selectedV;
  this._disSelectedV = disSelectedV;
}

defineClass(68, 1, {7:1, 68:1}, Styles$Binding, Styles$Binding_1);
_.compareTo = function compareTo_9(other){
  return $compareTo_3(this, other);
}
;
var Ltripleplay_ui_Styles$Binding_2_classLit = createForClass('tripleplay.ui', 'Styles/Binding', 68, Ljava_lang_Object_2_classLit);
function $get_11(this$static, style, eclass, elem){
  var parent_0, styles, value_0;
  styles = $get_6(this$static._styles, eclass);
  value_0 = !styles?null:$get_9(styles, style, elem);
  if (value_0 != null)
    return value_0;
  if (!style.inherited || eclass == Ltripleplay_ui_Element_2_classLit)
    return null;
  parent_0 = eclass.superclass;
  if (!parent_0) {
    throw new RuntimeException_0('Your PlayN application must not be compiled with -XdisableClassMetadata. It breaks TriplePlay stylesheets.');
  }
  return $get_11(this$static, style, parent_0, elem);
}

function Stylesheet(styles){
  this._styles = styles;
}

defineClass(464, 1, {}, Stylesheet);
var Ltripleplay_ui_Stylesheet_2_classLit = createForClass('tripleplay.ui', 'Stylesheet', 464, Ljava_lang_Object_2_classLit);
function $add_14(this$static, eclass, mode, styles){
  return $add_15(this$static, eclass, $add_13(($clinit_Styles() , $clinit_Styles() , _noneSingleton), mode, styles));
}

function $add_15(this$static, eclass, styles){
  var ostyles;
  ostyles = $get_6(this$static._styles, eclass);
  $put_4(this$static._styles, eclass, !ostyles?styles:$merge(ostyles, styles));
  return this$static;
}

function $add_16(this$static, eclass, styles){
  return $add_15(this$static, eclass, ($clinit_Styles() , $add_13((null , _noneSingleton), 0, styles)));
}

function $create(this$static){
  var sheet_0;
  sheet_0 = new Stylesheet(this$static._styles);
  this$static._styles = null;
  return sheet_0;
}

function Stylesheet$Builder(){
  this._styles = new HashMap;
}

defineClass(465, 1, {}, Stylesheet$Builder);
var Ltripleplay_ui_Stylesheet$Builder_2_classLit = createForClass('tripleplay.ui', 'Stylesheet/Builder', 465, Ljava_lang_Object_2_classLit);
function $clinit_Tabs(){
  $clinit_Tabs = emptyMethod;
  NOOP_HIGHLIGHTER = new Tabs$1;
  HIGHLIGHTER = ($clinit_Style() , new Style$3(true, NOOP_HIGHLIGHTER));
}

var HIGHLIGHTER, NOOP_HIGHLIGHTER;
var Ltripleplay_ui_Tabs_2_classLit = createForClass('tripleplay.ui', 'Tabs', null, Ltripleplay_ui_Composite_2_classLit);
function Tabs$1(){
}

defineClass(503, 1, {}, Tabs$1);
var Ltripleplay_ui_Tabs$1_2_classLit = createForClass('tripleplay.ui', 'Tabs/1', 503, Ljava_lang_Object_2_classLit);
function Tabs$2(){
}

defineClass(504, 1, {}, Tabs$2);
var Ltripleplay_ui_Tabs$2_2_classLit = createForClass('tripleplay.ui', 'Tabs/2', 504, Ljava_lang_Object_2_classLit);
function $onEmit_12(this$static){
  this$static.this$01._ldata = null;
  $invalidate(this$static.this$01);
}

function TextWidget$1(this$0){
  this.this$01 = this$0;
}

defineClass(224, 547, {}, TextWidget$1);
_.onEmit = function onEmit_24(icon){
  $onEmit_12(this, icon);
}
;
var Ltripleplay_ui_TextWidget$1_2_classLit = createForClass('tripleplay.ui', 'TextWidget/1', 224, Lreact_Slot_2_classLit);
function $addTextSize(this$static, size_0){
  if (this$static.text_0) {
    size_0.width_0 += this$static.text_0.width_1();
    size_0.height_0 += this$static.text_0.height_1();
  }
}

function $updateTextGlyph(this$static, tx, ty, availWidth, availHeight){
  var aheight, awidth, canvas, ox, oy, tgheight, tgwidth, theight, twidth;
  twidth = ceil_0(this$static.text_0.width_1());
  theight = ceil_0(this$static.text_0.height_1());
  awidth = ceil_0(availWidth);
  aheight = ceil_0(availHeight);
  if (twidth <= 0 || theight <= 0 || awidth <= 0 || aheight <= 0)
    return;
  if (this$static.autoShrink && twidth > availWidth) {
    while (twidth > availWidth && this$static.text_0.style_0.font_0.size_0 > 6) {
      this$static.text_0 = this$static.text_0.resize(this$static.text_0.style_0.font_0.size_0 - 1);
      twidth = ceil_0(this$static.text_0.width_1());
    }
    theight = ceil_0(this$static.text_0.height_1());
  }
  tgwidth = awidth < twidth?awidth:twidth;
  tgheight = aheight < theight?aheight:theight;
  ox = ifloor(this$static.halign.offset(twidth, awidth));
  oy = ifloor(this$static.valign.offset(theight, aheight));
  if (!this$static.text_0.equals$(this$static.this$01._renderedText) || tgwidth != this$static.this$01._tglyph._preparedWidth || tgheight != this$static.this$01._tglyph._preparedHeight) {
    $prepare(this$static.this$01._tglyph, $root(this$static.this$01).iface.plat.graphics, tgwidth, tgheight);
    canvas = $clear_1(this$static.this$01._tglyph._layer.canvas);
    this$static.text_0.render_0(canvas, ox < 0?ox:0, oy < 0?oy:0);
    $end_1(this$static.this$01._tglyph._layer);
    this$static.this$01._renderedText = this$static.text_0;
  }
  $setTranslation(this$static.this$01._tglyph._layer, tx + (ox > 0?ox:0), ty + (oy > 0?oy:0));
}

function TextWidget$TextLayoutData(this$0, hintX, hintY){
  var curtext, haveText, hints, style;
  this.this$01 = this$0;
  Element$LayoutData.call(this, this$0);
  this.halign = resolveStyle(this.this$01, ($clinit_Style() , HALIGN));
  this.valign = resolveStyle(this.this$01, VALIGN);
  resolveStyle(this.this$01, ICON_POS);
  resolveStyle(this.this$01, ICON_GAP);
  resolveStyle(this.this$01, ICON_CUDDLE);
  resolveStyle(this.this$01, ICON_EFFECT);
  this.wrap = resolveStyle(this.this$01, TEXT_WRAP).value_0;
  this.autoShrink = resolveStyle(this.this$01, AUTO_SHRINK).value_0;
  this.gfx = $root(this.this$01).iface.plat.graphics;
  curtext = this$0.text_1();
  haveText = curtext != null && curtext.length > 0;
  hints = $subtractFrom(this.bg.insets, new Dimension_0(hintX, hintY));
  this$0.icon_0();
  this.icon = null;
  if (haveText) {
    style = new TextStyle(resolveStyle(this$0, FONT), maskUndefined(resolveStyle(this$0, TEXT_EFFECT)) !== maskUndefined(($clinit_Style$TextEffect() , PIXEL_OUTLINE)), resolveStyle(this$0, COLOR).value_0, resolveStyle(this$0, TEXT_EFFECT).createEffectRenderer(this$0), resolveStyle(this$0, UNDERLINE).value_0);
    hints.width_0 > 0 && this.wrap?(this.text_0 = new StyledText$Block(this.gfx, curtext, style, new TextWrap(hints.width_0), toAlignment(resolveStyle(this$0, HALIGN)))):(this.text_0 = new StyledText$Span(this.gfx, curtext, style));
  }
}

defineClass(499, 209, {}, TextWidget$TextLayoutData);
_.computeSize_0 = function computeSize_2(hintX, hintY){
  var size_0, twidth;
  if (!!this.text_0 && this.autoShrink) {
    twidth = this.text_0.width_1();
    if (twidth > hintX) {
      while (twidth > hintX && this.text_0.style_0.font_0.size_0 > 6) {
        this.text_0 = this.text_0.resize(this.text_0.style_0.font_0.size_0 - 1);
        twidth = ceil_0(this.text_0.width_1());
      }
    }
  }
  size_0 = new Dimension;
  $addTextSize(this, size_0);
  return size_0;
}
;
_.layout_1 = function layout_5(left, top_0, width_0, height){
  !this.text_0?$close_8(this.this$01._tglyph):$updateTextGlyph(this, left, top_0, width_0, height);
}
;
_.toString$ = function toString_80(){
  return 'TextLayoutData[text=' + this.text_0 + ', icon=' + this.icon + ']';
}
;
_.autoShrink = false;
_.wrap = false;
var Ltripleplay_ui_TextWidget$TextLayoutData_2_classLit = createForClass('tripleplay.ui', 'TextWidget/TextLayoutData', 499, Ltripleplay_ui_Element$LayoutData_2_classLit);
function BlankBackground(){
  Background.call(this);
}

defineClass(506, 110, {}, BlankBackground);
_.instantiate = function instantiate_2(size_0){
  return new BlankBackground$1(this, size_0);
}
;
var Ltripleplay_ui_bgs_BlankBackground_2_classLit = createForClass('tripleplay.ui.bgs', 'BlankBackground', 506, Ltripleplay_ui_Background_2_classLit);
function BlankBackground$1(this$0_1, $anonymous0){
  Background$Instance.call(this, this$0_1, $anonymous0);
}

defineClass(507, 221, $intern_23, BlankBackground$1);
_.addTo = function addTo_0(parent_0, x_0, y_0, depthAdjust){
}
;
_.close_0 = function close_21(){
}
;
var Ltripleplay_ui_bgs_BlankBackground$1_2_classLit = createForClass('tripleplay.ui.bgs', 'BlankBackground/1', 507, Ltripleplay_ui_Background$Instance_2_classLit);
function RoundRectBackground(gfx, bgColor, borderColor){
  Background.call(this);
  this._gfx = gfx;
  this._bgColor = bgColor;
  this._radius = 5;
  this._borderColor = borderColor;
  this._borderWidth = 2;
  this._borderRadius = 5;
}

defineClass(89, 110, {}, RoundRectBackground);
_.instantiate = function instantiate_3(size_0){
  var canvas, iheight, iradius, iwidth, layer;
  canvas = $createCanvas_0(this._gfx, size_0);
  if (this._borderWidth > 0) {
    $fillRoundRect($setFillColor_0(canvas, this._borderColor), 0, 0, size_0.width_0, size_0.height_0, this._radius);
    iwidth = size_0.width_0 - 2 * this._borderWidth;
    iheight = size_0.height_0 - 2 * this._borderWidth;
    iradius = this._borderRadius * (iheight / size_0.height_0);
    $fillRoundRect($setFillColor_0(canvas, this._bgColor), this._borderWidth, this._borderWidth, iwidth, iheight, iradius);
  }
   else {
    $fillRoundRect($setFillColor_0(canvas, this._bgColor), 0, 0, size_0.width_0, size_0.height_0, this._radius);
  }
  layer = new ImageLayer($toTexture(canvas, ($clinit_Texture$Config() , DEFAULT)));
  return new Background$LayerInstance(this, size_0, layer);
}
;
_._bgColor = 0;
_._borderColor = 0;
_._borderRadius = 0;
_._borderWidth = 0;
_._radius = 0;
var Ltripleplay_ui_bgs_RoundRectBackground_2_classLit = createForClass('tripleplay.ui.bgs', 'RoundRectBackground', 89, Ltripleplay_ui_Background_2_classLit);
function $clinit_AxisLayout(){
  $clinit_AxisLayout = emptyMethod;
  UNSTRETCHED = new AxisLayout$Constraint(false);
  UNIFORM_STRETCHED = new AxisLayout$Constraint(true);
}

function $computeMetrics(this$static, elems, hintX, hintY){
  var availX, availY, c, ehintY, elem, elem$iterator, elem$iterator0, m, pheight, psize, pwidth;
  m = new AxisLayout$Metrics;
  for (elem$iterator0 = elems.iterator(); elem$iterator0.hasNext();) {
    elem = elem$iterator0.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    ++m.count;
    c = this$static._stretchByDefault?UNIFORM_STRETCHED:UNSTRETCHED;
    if (c.stretch) {
      ++m.stretchers;
      m.totalWeight += c.weight;
    }
     else {
      psize = elem.preferredSize(hintX, hintY);
      pwidth = psize.width_0;
      pheight = psize.height_0;
      m.prefWidth += pwidth;
      m.prefHeight += pheight;
      m.maxWidth = max_0(m.maxWidth, pwidth);
      m.maxHeight = max_0(m.maxHeight, pheight);
      m.fixWidth += pwidth;
      m.fixHeight += pheight;
    }
  }
  for (elem$iterator = elems.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    c = this$static._stretchByDefault?UNIFORM_STRETCHED:UNSTRETCHED;
    if (!c.stretch)
      continue;
    availX = hintX - $gaps(m, this$static._gap);
    availY = hintY - $gaps(m, this$static._gap);
    ehintY = $computeSize_0(c, 0, m.totalWeight, availY - m.fixHeight);
    psize = elem.preferredSize(availX, ehintY);
    pwidth = psize.width_0;
    pheight = psize.height_0;
    m.unitWidth = max_0(m.unitWidth, pwidth / c.weight);
    m.unitHeight = max_0(m.unitHeight, pheight / c.weight);
    m.maxWidth = max_0(m.maxWidth, pwidth);
    m.maxHeight = max_0(m.maxHeight, pheight);
  }
  m.prefWidth += m.stretchers * m.unitWidth;
  m.prefHeight += m.stretchers * m.unitHeight;
  return m;
}

defineClass(509, 582, {});
_._gap = 5;
_._stretchByDefault = false;
var UNIFORM_STRETCHED, UNSTRETCHED;
var Ltripleplay_ui_layout_AxisLayout_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout', 509, Ltripleplay_ui_Layout_2_classLit);
function $computeSize_0(this$static, size_0, totalWeight, availSize){
  return this$static.stretch?availSize * this$static.weight / totalWeight:size_0;
}

function AxisLayout$Constraint(stretch){
  this.stretch = stretch;
  this.weight = 1;
}

defineClass(226, 583, {}, AxisLayout$Constraint);
_.stretch = false;
_.weight = 0;
var Ltripleplay_ui_layout_AxisLayout$Constraint_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout/Constraint', 226, Ltripleplay_ui_Layout$Constraint_2_classLit);
function $gaps(this$static, gap){
  return gap * (this$static.count - 1);
}

function AxisLayout$Metrics(){
}

defineClass(510, 1, {}, AxisLayout$Metrics);
_.count = 0;
_.fixHeight = 0;
_.fixWidth = 0;
_.maxHeight = 0;
_.maxWidth = 0;
_.prefHeight = 0;
_.prefWidth = 0;
_.stretchers = 0;
_.totalWeight = 0;
_.unitHeight = 0;
_.unitWidth = 0;
var Ltripleplay_ui_layout_AxisLayout$Metrics_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout/Metrics', 510, Ljava_lang_Object_2_classLit);
function $clinit_AxisLayout$Policy(){
  $clinit_AxisLayout$Policy = emptyMethod;
  DEFAULT_1 = new AxisLayout$Policy$1;
  STRETCH = new AxisLayout$Policy$2;
  EQUALIZE = new AxisLayout$Policy$3;
  CONSTRAIN = new AxisLayout$Policy$4;
}

function AxisLayout$Policy(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_34(){
  $clinit_AxisLayout$Policy();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, 1), $intern_1, 52, 0, [DEFAULT_1, STRETCH, EQUALIZE, CONSTRAIN]);
}

defineClass(52, 6, $intern_58);
var CONSTRAIN, DEFAULT_1, EQUALIZE, STRETCH;
var Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy', 52, Ljava_lang_Enum_2_classLit, values_34);
function $computeSize_1(size_0, extent){
  return size_0 < extent?size_0:extent;
}

function AxisLayout$Policy$1(){
  AxisLayout$Policy.call(this, 'DEFAULT', 0);
}

defineClass(511, 52, $intern_58, AxisLayout$Policy$1);
var Ltripleplay_ui_layout_AxisLayout$Policy$1_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/1', 511, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Policy$2(){
  AxisLayout$Policy.call(this, 'STRETCH', 1);
}

defineClass(512, 52, $intern_58, AxisLayout$Policy$2);
var Ltripleplay_ui_layout_AxisLayout$Policy$2_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/2', 512, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Policy$3(){
  AxisLayout$Policy.call(this, 'EQUALIZE', 2);
}

defineClass(513, 52, $intern_58, AxisLayout$Policy$3);
var Ltripleplay_ui_layout_AxisLayout$Policy$3_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/3', 513, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Policy$4(){
  AxisLayout$Policy.call(this, 'CONSTRAIN', 3);
}

defineClass(514, 52, $intern_58, AxisLayout$Policy$4);
var Ltripleplay_ui_layout_AxisLayout$Policy$4_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/4', 514, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Vertical(){
  $clinit_AxisLayout();
  $clinit_AxisLayout$Policy();
}

defineClass(227, 509, {}, AxisLayout$Vertical);
_.computeSize_1 = function computeSize_3(elems, hintX, hintY){
  var m;
  m = $computeMetrics(this, elems, hintX, hintY);
  return new Dimension_0(m.maxWidth, m.prefHeight + $gaps(m, this._gap));
}
;
_.layout_2 = function layout_6(elems, left, top_0, width_0, height){
  var c, eheight, elem, elem$iterator, ewidth, halign, m, psize, stretchHeight, valign, y_0;
  halign = resolveStyle(elems, ($clinit_Style() , HALIGN));
  valign = resolveStyle(elems, VALIGN);
  m = $computeMetrics(this, elems, width_0, height);
  stretchHeight = max_0(0, height - $gaps(m, this._gap) - m.fixHeight);
  y_0 = top_0 + (m.stretchers > 0?0:valign.offset(m.fixHeight + $gaps(m, this._gap), height));
  for (elem$iterator = elems.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    psize = elem.preferredSize(width_0, height);
    c = this._stretchByDefault?UNIFORM_STRETCHED:UNSTRETCHED;
    ewidth = $computeSize_1(psize.width_0, width_0);
    eheight = $computeSize_0(c, psize.height_0, m.totalWeight, stretchHeight);
    $setBounds_0(elem, left + halign.offset(ewidth, width_0), y_0, ewidth, eheight);
    y_0 += eheight + this._gap;
  }
}
;
var Ltripleplay_ui_layout_AxisLayout$Vertical_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout/Vertical', 227, Ltripleplay_ui_layout_AxisLayout_2_classLit);
function $clinit_BorderLayout(){
  $clinit_BorderLayout = emptyMethod;
  $clinit_BorderLayout$Position();
  NS = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 42, 0, [NORTH, SOUTH]);
  WE = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 42, 0, [WEST, EAST]);
  WCE = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 42, 0, [WEST, CENTER_3, EAST]);
}

function BorderLayout(){
  $clinit_BorderLayout();
  this.hgap = 0;
  this.vgap = 0;
}

defineClass(164, 582, {}, BorderLayout);
_.computeSize_1 = function computeSize_4(elems, hintX, hintY){
  return $computeSize_2(new BorderLayout$Slots(this, elems), hintX, hintY);
}
;
_.layout_2 = function layout_7(elems, left, top_0, width_0, height){
  var bounds, dim, halign, p, slots, valign;
  halign = resolveStyle(elems, ($clinit_Style() , HALIGN));
  valign = resolveStyle(elems, VALIGN);
  slots = new BorderLayout$Slots(this, elems);
  bounds = new Rectangle_0(left, top_0, width_0, height);
  $layoutNs(slots, ($clinit_BorderLayout$Position() , NORTH), halign, bounds);
  $layoutNs(slots, SOUTH, halign, bounds);
  $layoutWe(slots, WEST, valign, bounds);
  $layoutWe(slots, EAST, valign, bounds);
  p = CENTER_3;
  dim = $size(slots, p, bounds.width_0, bounds.height_0);
  if (!dim) {
    return;
  }
  $get_6(slots.elements, p);
  dim = null.nullMethod();
  $setBounds_1(slots, p, null.nullMethod(halign.offset(dim.width_0, bounds.width_0)), null.nullMethod(valign.offset(dim.height_0, bounds.height_0)), dim);
}
;
_.hgap = 0;
_.vgap = 0;
var NS, WCE, WE;
var Ltripleplay_ui_layout_BorderLayout_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout', 164, Ltripleplay_ui_Layout_2_classLit);
function BorderLayout$Constraint(){
}

defineClass(211, 583, {}, BorderLayout$Constraint);
var Ltripleplay_ui_layout_BorderLayout$Constraint_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout/Constraint', 211, Ltripleplay_ui_Layout$Constraint_2_classLit);
function $clinit_BorderLayout$Position(){
  $clinit_BorderLayout$Position = emptyMethod;
  CENTER_3 = new BorderLayout$Position('CENTER', 0);
  NORTH = new BorderLayout$Position('NORTH', 1);
  SOUTH = new BorderLayout$Position('SOUTH', 2);
  EAST = new BorderLayout$Position('EAST', 3);
  WEST = new BorderLayout$Position('WEST', 4);
}

function BorderLayout$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.unstretched = new BorderLayout$Constraint;
  this.stretched = new BorderLayout$Constraint;
}

function positionOf(c){
  $clinit_BorderLayout$Position();
  var p, p$array, p$index, p$max;
  for (p$array = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 42, 0, [CENTER_3, NORTH, SOUTH, EAST, WEST]) , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    if (p.unstretched == c || p.stretched == c) {
      return p;
    }
  }
  return null;
}

function values_35(){
  $clinit_BorderLayout$Position();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 42, 0, [CENTER_3, NORTH, SOUTH, EAST, WEST]);
}

defineClass(42, 6, {3:1, 7:1, 6:1, 42:1}, BorderLayout$Position);
var CENTER_3, EAST, NORTH, SOUTH, WEST;
var Ltripleplay_ui_layout_BorderLayout$Position_2_classLit = createForEnum('tripleplay.ui.layout', 'BorderLayout/Position', 42, Ljava_lang_Enum_2_classLit, values_35);
function $computeSize_2(this$static, hintX, hintY){
  var csize, dim, ehintX, ehintY, nsSize, pos, pos$array, pos$array0, pos$index, pos$index0, pos$max, pos$max0, wce, weSize;
  wce = $count_0(this$static, ($clinit_BorderLayout() , WCE));
  nsSize = new Dimension;
  for (pos$array0 = NS , pos$index0 = 0 , pos$max0 = pos$array0.length; pos$index0 < pos$max0; ++pos$index0) {
    pos = pos$array0[pos$index0];
    dim = $size(this$static, pos, hintX, 0);
    if (!dim) {
      continue;
    }
    nsSize.height_0 += dim.height_0;
    nsSize.width_0 = max_0(nsSize.width_0, dim.width_0);
    wce > 0 && (nsSize.height_0 += this$static.this$01.vgap);
  }
  ehintY = max_0(0, hintY - nsSize.height_0);
  weSize = new Dimension;
  for (pos$array = WE , pos$index = 0 , pos$max = pos$array.length; pos$index < pos$max; ++pos$index) {
    pos = pos$array[pos$index];
    dim = $size(this$static, pos, 0, ehintY);
    if (!dim) {
      continue;
    }
    weSize.width_0 += dim.width_0;
    weSize.height_0 = max_0(weSize.height_0, dim.height_0);
  }
  weSize.width_0 += (wce - 1 > 0?wce - 1:0) * this$static.this$01.hgap;
  ehintX = max_0(0, hintX - weSize.width_0);
  csize = $size(this$static, ($clinit_BorderLayout$Position() , CENTER_3), ehintX, ehintY);
  if (csize) {
    weSize.width_0 += csize.width_0;
    nsSize.height_0 += csize.height_0;
  }
  return new Dimension_0(max_0(weSize.width_0, nsSize.width_0), max_0(weSize.height_0, nsSize.height_0));
}

function $count_0(this$static, ps){
  var count, p, p$index, p$max;
  count = 0;
  for (p$index = 0 , p$max = ps.length; p$index < p$max; ++p$index) {
    p = ps[p$index];
    $containsKey(this$static.elements, p) && ++count;
  }
  return count;
}

function $layoutNs(this$static, p, halign, bounds){
  var dim, y_0;
  dim = $size(this$static, p, bounds.width_0, 0);
  if (!dim) {
    return;
  }
  $get_6(this$static.elements, p);
  dim = null.nullMethod();
  y_0 = bounds.y_0;
  p == ($clinit_BorderLayout$Position() , NORTH)?(bounds.y_0 += dim.height_0 + this$static.this$01.vgap):(y_0 += bounds.height_0 - dim.height_0);
  bounds.height_0 -= dim.height_0 + this$static.this$01.vgap;
  $setBounds_1(this$static, p, null.nullMethod(halign.offset(dim.width_0, bounds.width_0)), y_0, dim);
}

function $layoutWe(this$static, p, valign, bounds){
  var dim, x_0;
  dim = $size(this$static, p, 0, bounds.height_0);
  if (!dim) {
    return;
  }
  $get_6(this$static.elements, p);
  dim = null.nullMethod();
  x_0 = bounds.x_0;
  p == ($clinit_BorderLayout$Position() , WEST)?(bounds.x_0 += dim.width_0 + this$static.this$01.hgap):(x_0 += bounds.width_0 - dim.width_0);
  bounds.width_0 -= dim.width_0 + this$static.this$01.hgap;
  $setBounds_1(this$static, p, x_0, null.nullMethod(valign.offset(dim.height_0, bounds.height_0)), dim);
}

function $setBounds_1(this$static, p, x_0, y_0, dim){
  $setBounds_0($get_6(this$static.elements, p), x_0, y_0, dim.width_0, dim.height_0);
}

function $size(this$static, p, hintX, hintY){
  var e;
  e = $get_6(this$static.elements, p);
  return !e?null:e.preferredSize(hintX, hintY);
}

function BorderLayout$Slots(this$0, elems){
  var elem, elem$iterator, existing, p;
  this.this$01 = this$0;
  this.elements = new HashMap;
  for (elem$iterator = elems.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    p = positionOf(elem._constraint);
    if (!p) {
      throw new IllegalStateException_0('Element with a non-BorderLayout constraint: ' + elem);
    }
    existing = $put_4(this.elements, p, elem);
    if (existing) {
      throw new IllegalStateException_0('Multiple elements: ' + elem + ' and ' + existing + ' with the same BorderLayout constraint: ' + p);
    }
  }
}

defineClass(212, 1, {}, BorderLayout$Slots);
var Ltripleplay_ui_layout_BorderLayout$Slots_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout/Slots', 212, Ljava_lang_Object_2_classLit);
function $clinit_Insets(){
  $clinit_Insets = emptyMethod;
  ZERO_0 = new Insets(0, 0, 0, 0);
}

function $subtractFrom(this$static, size_0){
  size_0.width_0 -= this$static._left + this$static._right;
  size_0.height_0 -= this$static._top + this$static._bottom;
  return size_0;
}

function Insets(top_0, right, bottom, left){
  $clinit_Insets();
  this._top = top_0;
  this._right = right;
  this._bottom = bottom;
  this._left = left;
}

defineClass(166, 1, {}, Insets);
_.toString$ = function toString_81(){
  return this._top + ',' + this._right + ',' + this._bottom + ',' + this._left;
}
;
_._bottom = 0;
_._left = 0;
_._right = 0;
_._top = 0;
var ZERO_0;
var Ltripleplay_ui_util_Insets_2_classLit = createForClass('tripleplay.ui.util', 'Insets', 166, Ljava_lang_Object_2_classLit);
function $clinit_EffectRenderer(){
  $clinit_EffectRenderer = emptyMethod;
  NONE_3 = new EffectRenderer$1;
}

defineClass(590, 1, {});
_.adjustHeight = function adjustHeight(height){
  return height;
}
;
_.adjustWidth = function adjustWidth(width_0){
  return width_0;
}
;
var NONE_3;
var Ltripleplay_util_EffectRenderer_2_classLit = createForClass('tripleplay.util', 'EffectRenderer', 590, Ljava_lang_Object_2_classLit);
function EffectRenderer$1(){
}

defineClass(517, 590, {}, EffectRenderer$1);
_.render = function render(canvas, layout, textColor, underlined, x_0, y_0){
  var bounds, sx, sy;
  $save(canvas.ctx);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  if (underlined) {
    bounds = layout.bounds;
    sx = x_0 + bounds.x_0;
    sy = y_0 + bounds.y_0 + bounds.height_0 + 1;
    $fillRect_1(canvas, sx, sy, bounds.width_0, 1);
  }
  $fill(layout, canvas.ctx, x_0, y_0);
  $restore(canvas.ctx);
}
;
var Ltripleplay_util_EffectRenderer$1_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/1', 517, Ltripleplay_util_EffectRenderer_2_classLit);
function EffectRenderer$Gradient(gradientColor, gradientType){
  $clinit_EffectRenderer();
  this.gradientColor = gradientColor;
  this.gradientType = gradientType;
}

defineClass(172, 590, {172:1}, EffectRenderer$Gradient);
_.equals$ = function equals_41(obj){
  var that;
  if (!instanceOf(obj, 172))
    return false;
  that = obj;
  return this.gradientColor == that.gradientColor && this.gradientType == that.gradientType;
}
;
_.hashCode$ = function hashCode_44(){
  return 83 * this.gradientColor ^ 113 * this.gradientType.ordinal;
}
;
_.render = function render_0(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, colors, positions, sx, sy;
  colors = null;
  positions = null;
  switch (this.gradientType.ordinal) {
    case 0:
      colors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [textColor, this.gradientColor]);
      positions = initValues(getClassLiteralForArray(F_classLit, 1), $intern_43, 0, 7, [0, 1]);
      break;
    case 1:
      colors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [this.gradientColor, textColor]);
      positions = initValues(getClassLiteralForArray(F_classLit, 1), $intern_43, 0, 7, [0, 1]);
      break;
    case 2:
      colors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_30, 0, 7, [textColor, this.gradientColor, textColor]);
      positions = initValues(getClassLiteralForArray(F_classLit, 1), $intern_43, 0, 7, [0, 0.5, 1]);
  }
  $save(canvas.ctx);
  $setFillGradient(canvas, $createGradient(canvas, new Gradient$Linear(text_0.size_0.height_0, colors, positions)));
  $fill(text_0, canvas.ctx, x_0, y_0);
  if (underlined) {
    bounds = text_0.bounds;
    sx = x_0 + bounds.x_0;
    sy = y_0 + bounds.y_0 + bounds.height_0 + 1;
    $fillRect_1(canvas, sx, sy, bounds.width_0, 1);
  }
  $restore(canvas.ctx);
}
;
_.gradientColor = 0;
var Ltripleplay_util_EffectRenderer$Gradient_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/Gradient', 172, Ltripleplay_util_EffectRenderer_2_classLit);
function $clinit_EffectRenderer$Gradient$Type(){
  $clinit_EffectRenderer$Gradient$Type = emptyMethod;
  BOTTOM_1 = new EffectRenderer$Gradient$Type('BOTTOM', 0);
  TOP_1 = new EffectRenderer$Gradient$Type('TOP', 1);
  CENTER_4 = new EffectRenderer$Gradient$Type('CENTER', 2);
}

function EffectRenderer$Gradient$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_36(){
  $clinit_EffectRenderer$Gradient$Type();
  return initValues(getClassLiteralForArray(Ltripleplay_util_EffectRenderer$Gradient$Type_2_classLit, 1), $intern_1, 111, 0, [BOTTOM_1, TOP_1, CENTER_4]);
}

defineClass(111, 6, {3:1, 7:1, 6:1, 111:1}, EffectRenderer$Gradient$Type);
var BOTTOM_1, CENTER_4, TOP_1;
var Ltripleplay_util_EffectRenderer$Gradient$Type_2_classLit = createForEnum('tripleplay.util', 'EffectRenderer/Gradient/Type', 111, Ljava_lang_Enum_2_classLit, values_36);
function EffectRenderer$PixelOutline(outlineColor){
  $clinit_EffectRenderer();
  this.outlineColor = outlineColor;
}

defineClass(169, 590, {169:1}, EffectRenderer$PixelOutline);
_.adjustHeight = function adjustHeight_0(height){
  return height + 2;
}
;
_.adjustWidth = function adjustWidth_0(width_0){
  return width_0 + 2;
}
;
_.equals$ = function equals_42(obj){
  if (!instanceOf(obj, 169))
    return false;
  return this.outlineColor == obj.outlineColor;
}
;
_.hashCode$ = function hashCode_45(){
  return this.outlineColor;
}
;
_.render = function render_1(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, sx, sy;
  $save(canvas.ctx);
  if (underlined) {
    bounds = text_0.bounds;
    sx = x_0 + bounds.x_0 + 1;
    sy = y_0 + bounds.y_0 + bounds.height_0 + 2;
    $fillRect_1($setFillColor_0(canvas, this.outlineColor), sx - 1, sy - 1, bounds.width_0 + 3, 3);
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(textColor)) , canvas), sx, sy, bounds.width_0, 1);
  }
  $setFillColor_0(canvas, this.outlineColor);
  $fill(text_0, canvas.ctx, x_0, y_0);
  $fill(text_0, canvas.ctx, x_0, y_0 + 1);
  $fill(text_0, canvas.ctx, x_0, y_0 + 2);
  $fill(text_0, canvas.ctx, x_0 + 1, y_0);
  $fill(text_0, canvas.ctx, x_0 + 1, y_0 + 2);
  $fill(text_0, canvas.ctx, x_0 + 2, y_0);
  $fill(text_0, canvas.ctx, x_0 + 2, y_0 + 1);
  $fill(text_0, canvas.ctx, x_0 + 2, y_0 + 2);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  $fill(text_0, canvas.ctx, x_0 + 1, y_0 + 1);
  $restore(canvas.ctx);
}
;
_.outlineColor = 0;
var Ltripleplay_util_EffectRenderer$PixelOutline_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/PixelOutline', 169, Ltripleplay_util_EffectRenderer_2_classLit);
function EffectRenderer$Shadow(shadowColor, shadowX, shadowY){
  $clinit_EffectRenderer();
  this.shadowColor = shadowColor;
  this.shadowX = shadowX;
  this.shadowY = shadowY;
}

defineClass(171, 590, {171:1}, EffectRenderer$Shadow);
_.adjustHeight = function adjustHeight_1(height){
  return height + abs_0(this.shadowY);
}
;
_.adjustWidth = function adjustWidth_1(width_0){
  return width_0 + abs_0(this.shadowX);
}
;
_.equals$ = function equals_43(obj){
  var that;
  if (!instanceOf(obj, 171))
    return false;
  that = obj;
  return this.shadowColor == that.shadowColor && this.shadowX == that.shadowX && this.shadowY == that.shadowY;
}
;
_.hashCode$ = function hashCode_46(){
  return this.shadowColor ^ round_int(this.shadowX) ^ round_int(this.shadowY);
}
;
_.render = function render_2(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, sx, sy, tx, ty;
  tx = this.shadowX < 0?-this.shadowX:0;
  ty = this.shadowY < 0?-this.shadowY:0;
  sx = this.shadowX < 0?0:this.shadowX;
  sy = this.shadowY < 0?0:this.shadowY;
  $save(canvas.ctx);
  if (underlined) {
    bounds = text_0.bounds;
    $fillRect_1($setFillColor_0(canvas, this.shadowColor), sx + bounds.x_0 + x_0, sy + bounds.y_0 + bounds.height_0 + 1, bounds.width_0 + 1, 1);
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(textColor)) , canvas), tx + bounds.x_0 + x_0, ty + bounds.y_0 + bounds.height_0 + 1, bounds.width_0 + 1, 1);
  }
  $setFillColor_0(canvas, this.shadowColor);
  $fill(text_0, canvas.ctx, x_0 + sx, y_0 + sy);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  $fill(text_0, canvas.ctx, x_0 + tx, y_0 + ty);
  $restore(canvas.ctx);
}
;
_.shadowColor = 0;
_.shadowX = 0;
_.shadowY = 0;
var Ltripleplay_util_EffectRenderer$Shadow_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/Shadow', 171, Ltripleplay_util_EffectRenderer_2_classLit);
function EffectRenderer$VectorOutline(outlineColor, outlineWidth, cap, join_0){
  $clinit_EffectRenderer();
  this.outlineColor = outlineColor;
  this.outlineWidth = outlineWidth;
  this.outlineCap = cap;
  this.outlineJoin = join_0;
}

defineClass(170, 590, {170:1}, EffectRenderer$VectorOutline);
_.adjustHeight = function adjustHeight_2(height){
  return height + 2 * this.outlineWidth;
}
;
_.adjustWidth = function adjustWidth_2(width_0){
  return width_0 + 2 * this.outlineWidth;
}
;
_.equals$ = function equals_44(obj){
  var that;
  if (!instanceOf(obj, 170))
    return false;
  that = obj;
  return this.outlineColor == that.outlineColor && this.outlineWidth == that.outlineWidth && this.outlineCap == that.outlineCap && this.outlineJoin == that.outlineJoin;
}
;
_.hashCode$ = function hashCode_47(){
  return this.outlineColor ^ round_int(this.outlineWidth) ^ getHashCode(this.outlineCap) ^ getHashCode(this.outlineJoin);
}
;
_.render = function render_3(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, sx, sy;
  $save(canvas.ctx);
  $setStrokeColor(canvas, this.outlineColor);
  $setStrokeWidth(canvas, this.outlineWidth * 2);
  $setLineCap_0(canvas, this.outlineCap);
  $setLineJoin_0(canvas, this.outlineJoin);
  $strokeText_0(canvas, text_0, x_0 + this.outlineWidth, y_0 + this.outlineWidth);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  $fillText_0(canvas, text_0, x_0 + this.outlineWidth, y_0 + this.outlineWidth);
  if (underlined) {
    bounds = text_0.bounds;
    sx = x_0 + bounds.x_0 + this.outlineWidth;
    sy = y_0 + bounds.y_0 + bounds.height_0 + this.outlineWidth + 1;
    $fillRect_1(canvas, sx, sy, bounds.width_0, 1);
  }
  $restore(canvas.ctx);
}
;
_.outlineColor = 0;
_.outlineWidth = 0;
var Ltripleplay_util_EffectRenderer$VectorOutline_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/VectorOutline', 170, Ltripleplay_util_EffectRenderer_2_classLit);
function $close_8(this$static){
  if (this$static._layer) {
    $close_3(this$static._layer);
    this$static._layer = null;
  }
  this$static._preparedWidth = 0;
  this$static._preparedHeight = 0;
}

function $prepare(this$static, gfx, width_0, height){
  var layer;
  layer = this$static._layer;
  if (!layer) {
    layer = new CanvasLayer(gfx, width_0, height);
    $add_6(this$static._parent, layer);
    this$static._layer = layer;
  }
   else 
    ((layer.forceWidth < 0?layer.canvas.width_0:layer.forceWidth) < width_0 || (layer.forceHeight < 0?layer.canvas.height_0:layer.forceHeight) < height) && (layer.canvas = $createCanvas(layer.gfx, width_0, height));
  this$static._preparedWidth = width_0;
  this$static._preparedHeight = height;
}

function Glyph(parent_0){
  this._parent = parent_0;
}

defineClass(518, 1, $intern_23, Glyph);
_.close_0 = function close_22(){
  $close_8(this);
}
;
_._preparedHeight = 0;
_._preparedWidth = 0;
var Ltripleplay_util_Glyph_2_classLit = createForClass('tripleplay.util', 'Glyph', 518, Ljava_lang_Object_2_classLit);
function $clinit_Interpolator(){
  $clinit_Interpolator = emptyMethod;
  LINEAR = new Interpolator$2;
  EASE_IN = new Interpolator$3;
  EASE_OUT = new Interpolator$4;
  EASE_INOUT = new Interpolator$5;
}

function $apply_3(this$static, start_0, range, dt, t){
  var pos;
  pos = t == 0?1:this$static.apply_0(dt / t);
  return start_0 + range * pos;
}

function $applyClamp(this$static, start_0, range, dt){
  return $apply_3(this$static, start_0, range, dt < 0?0:dt > 500?500:dt, 500);
}

defineClass(584, 1, {});
var EASE_IN, EASE_INOUT, EASE_OUT, LINEAR;
var Ltripleplay_util_Interpolator_2_classLit = createForClass('tripleplay.util', 'Interpolator', 584, Ljava_lang_Object_2_classLit);
function Interpolator$2(){
}

defineClass(466, 584, {}, Interpolator$2);
_.apply_0 = function apply_4(v){
  return v;
}
;
_.toString$ = function toString_82(){
  return 'LINEAR';
}
;
var Ltripleplay_util_Interpolator$2_2_classLit = createForClass('tripleplay.util', 'Interpolator/2', 466, Ltripleplay_util_Interpolator_2_classLit);
function Interpolator$3(){
}

defineClass(467, 584, {}, Interpolator$3);
_.apply_0 = function apply_5(v){
  return v * v * v;
}
;
_.toString$ = function toString_83(){
  return 'EASE_IN';
}
;
var Ltripleplay_util_Interpolator$3_2_classLit = createForClass('tripleplay.util', 'Interpolator/3', 467, Ltripleplay_util_Interpolator_2_classLit);
function Interpolator$4(){
}

defineClass(468, 584, {}, Interpolator$4);
_.apply_0 = function apply_6(v){
  var vv;
  vv = v - 1;
  return 1 + vv * vv * vv;
}
;
_.toString$ = function toString_84(){
  return 'EASE_OUT';
}
;
var Ltripleplay_util_Interpolator$4_2_classLit = createForClass('tripleplay.util', 'Interpolator/4', 468, Ltripleplay_util_Interpolator_2_classLit);
function Interpolator$5(){
}

defineClass(469, 584, {}, Interpolator$5);
_.apply_0 = function apply_7(v){
  var ov, v2;
  v2 = 2 * v;
  if (v2 < 1) {
    return v2 * v2 * v2 / 2;
  }
  ov = v2 - 2;
  return (2 + ov * ov * ov) / 2;
}
;
_.toString$ = function toString_85(){
  return 'EASE_INOUT';
}
;
var Ltripleplay_util_Interpolator$5_2_classLit = createForClass('tripleplay.util', 'Interpolator/5', 469, Ltripleplay_util_Interpolator_2_classLit);
function Layers$2(val$width, val$height){
  this.val$width1 = val$width;
  this.val$height2 = val$height;
  this.val$color3 = -10329502;
  Layer.call(this);
}

defineClass(315, 17, $intern_26, Layers$2);
_.height_1 = function height_4(){
  return this.val$height2;
}
;
_.paintImpl = function paintImpl_5(surf){
  $fillRect_0($setFillColor(surf, this.val$color3), 0, 0, this.val$width1, this.val$height2);
}
;
_.width_1 = function width_5(){
  return this.val$width1;
}
;
_.val$color3 = 0;
_.val$height2 = 0;
_.val$width1 = 0;
var Ltripleplay_util_Layers$2_2_classLit = createForClass('tripleplay.util', 'Layers/2', 315, Lplayn_scene_Layer_2_classLit);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  levels = new Logger$Levels;
}

function $log_0(args){
  var error, sb;
  sb = $append_7(new StringBuilder, 'Screen choked');
  if (args.length > 1) {
    sb.string += ' [';
    format_2(sb, args);
    sb.string += ']';
  }
  error = args.length % 2 == 1?args[args.length - 1]:null;
  $clinit_System();
  !!error && error.printStackTrace(out_0);
}

function $warning(this$static, args){
  $shouldLog(levels, ($clinit_Logger$Level() , WARNING), this$static._ident) && $log_0(args);
}

function Logger(ident){
  $clinit_Logger();
  this._ident = ident;
}

function format_2(into, args){
  var ii, ll;
  for (ii = 0 , ll = ~~(args.length / 2); ii < ll; ii++) {
    ii > 0 && (into.string += ', ' , into);
    $append_6($append_7($append_6(into, args[2 * ii]), '='), args[2 * ii + 1]);
  }
  return into;
}

defineClass(151, 1, {}, Logger);
var levels;
var Ltripleplay_util_Logger_2_classLit = createForClass('tripleplay.util', 'Logger', 151, Ljava_lang_Object_2_classLit);
function $clinit_Logger$Level(){
  $clinit_Logger$Level = emptyMethod;
  DEBUG_0 = new Logger$Level('DEBUG', 0);
  INFO_1 = new Logger$Level('INFO', 1);
  WARNING = new Logger$Level('WARNING', 2);
  ERROR_0 = new Logger$Level('ERROR', 3);
  OFF = new Logger$Level('OFF', 4);
}

function Logger$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_37(){
  $clinit_Logger$Level();
  return initValues(getClassLiteralForArray(Ltripleplay_util_Logger$Level_2_classLit, 1), $intern_1, 73, 0, [DEBUG_0, INFO_1, WARNING, ERROR_0, OFF]);
}

defineClass(73, 6, {3:1, 7:1, 6:1, 73:1}, Logger$Level);
var DEBUG_0, ERROR_0, INFO_1, OFF, WARNING;
var Ltripleplay_util_Logger$Level_2_classLit = createForEnum('tripleplay.util', 'Logger/Level', 73, Ljava_lang_Enum_2_classLit, values_37);
function $shouldLog(this$static, level, ident){
  var ilevel;
  ilevel = $getStringValue(this$static._levels, ident);
  if (ilevel)
    return level.ordinal >= ilevel.ordinal;
  return level.ordinal >= this$static._defaultLevel.ordinal;
}

function Logger$Levels(){
  this._defaultLevel = ($clinit_Logger$Level() , DEBUG_0);
  this._levels = new HashMap;
}

defineClass(414, 1, {}, Logger$Levels);
var Ltripleplay_util_Logger$Levels_2_classLit = createForClass('tripleplay.util', 'Logger/Levels', 414, Ljava_lang_Object_2_classLit);
function $clear_3(this$static){
  var toBeCleared;
  if (this$static._target) {
    toBeCleared = this$static._target;
    this$static._target = null;
    toBeCleared.close_0();
  }
}

function $set_8(this$static, target){
  $clear_3(this$static);
  this$static._target = target;
  return target;
}

defineClass(589, 1, {});
var Ltripleplay_util_Ref_2_classLit = createForClass('tripleplay.util', 'Ref', 589, Ljava_lang_Object_2_classLit);
function Ref$1(){
}

defineClass(516, 589, {}, Ref$1);
var Ltripleplay_util_Ref$1_2_classLit = createForClass('tripleplay.util', 'Ref/1', 516, Ltripleplay_util_Ref_2_classLit);
defineClass(521, 1, {});
var Ltripleplay_util_StyledText_2_classLit = createForClass('tripleplay.util', 'StyledText', 521, Ljava_lang_Object_2_classLit);
function $equals_5(this$static, other){
  var op;
  if (instanceOf(other, 77)) {
    op = other;
    return $equals(this$static.text_0, op.text_0) && $equals_6(this$static.style_0, op.style_0);
  }
   else 
    return false;
}

function StyledText$Plain(gfx, text_0, style){
  this._gfx = gfx;
  this.text_0 = text_0;
  this.style_0 = style;
}

defineClass(77, 521, {77:1});
_.equals$ = function equals_45(other){
  return $equals_5(this, other);
}
;
_.hashCode$ = function hashCode_48(){
  return getHashCode_0(this.text_0) ^ $hashCode_3(this.style_0);
}
;
var Ltripleplay_util_StyledText$Plain_2_classLit = createForClass('tripleplay.util', 'StyledText/Plain', 77, Ltripleplay_util_StyledText_2_classLit);
function StyledText$Block(gfx, text_0, style, wrap, align_0){
  StyledText$Plain.call(this, gfx, text_0, style);
  this.wrap = wrap;
  this.align_0 = align_0;
  this._layouts = layoutText_0(gfx, gfx.dummyCtx, text_0, style, wrap);
  this._bounds = getBounds(this._layouts, new Rectangle);
  this._bounds.width_0 = style.effect.adjustWidth(this._bounds.width_0);
  this._bounds.height_0 = style.effect.adjustHeight(this._bounds.height_0);
}

defineClass(228, 77, {77:1}, StyledText$Block);
_.equals$ = function equals_46(other){
  var op;
  if (instanceOf(other, 77)) {
    op = other;
    return $equals(this.text_0, op.text_0) && $equals_6(this.style_0, op.style_0);
  }
   else 
    return false;
}
;
_.hashCode$ = function hashCode_49(){
  return getHashCode_0(this.text_0) ^ $hashCode_3(this.style_0) ^ $hashCode_2(this.wrap) ^ getHashCode(this.align_0);
}
;
_.height_1 = function height_5(){
  return this._bounds.height_0;
}
;
_.render_0 = function render_4(canvas, x_0, y_0){
  var bx, layout, layout$array, layout$index, layout$max, lx, ly;
  bx = this._bounds.x_0;
  ly = y_0 + this._bounds.y_0;
  for (layout$array = this._layouts , layout$index = 0 , layout$max = layout$array.length; layout$index < layout$max; ++layout$index) {
    layout = layout$array[layout$index];
    lx = x_0 + bx + this.align_0.getX(this.style_0.effect.adjustWidth(layout.size_0.width_0), this._bounds.width_0 - this._bounds.x_0);
    this.style_0.effect.render(canvas, layout, this.style_0.textColor, this.style_0.underlined, lx, ly);
    ly += $intern_39 * layout.metrics.height_0 + $descent(layout.metrics) + $intern_38 * layout.metrics.height_0;
  }
}
;
_.resize = function resize(size_0){
  return new StyledText$Block(this._gfx, this.text_0, $withFont(this.style_0, $derive(this.style_0.font_0, size_0)), this.wrap, this.align_0);
}
;
_.toString$ = function toString_86(){
  return "Block '" + this.text_0 + "' @ " + this.style_0 + '/' + this.wrap + '/' + this.align_0;
}
;
_.width_1 = function width_6(){
  return this._bounds.width_0;
}
;
var Ltripleplay_util_StyledText$Block_2_classLit = createForClass('tripleplay.util', 'StyledText/Block', 228, Ltripleplay_util_StyledText$Plain_2_classLit);
function StyledText$Span(gfx, text_0, style){
  StyledText$Plain.call(this, gfx, text_0, style);
  this._layout = layoutText(gfx, gfx.dummyCtx, text_0, style);
}

defineClass(131, 77, {77:1, 131:1}, StyledText$Span);
_.equals$ = function equals_47(other){
  return instanceOf(other, 131) && $equals_5(this, other);
}
;
_.height_1 = function height_6(){
  return this.style_0.effect.adjustHeight(this._layout.size_0.height_0);
}
;
_.render_0 = function render_5(canvas, x_0, y_0){
  this.style_0.effect.render(canvas, this._layout, this.style_0.textColor, this.style_0.underlined, x_0, y_0);
}
;
_.resize = function resize_0(size_0){
  return new StyledText$Span(this._gfx, this.text_0, $withFont(this.style_0, $derive(this.style_0.font_0, size_0)));
}
;
_.toString$ = function toString_87(){
  return "Span '" + this.text_0 + "' @ " + this.style_0;
}
;
_.width_1 = function width_7(){
  return this.style_0.effect.adjustWidth(this._layout.size_0.width_0);
}
;
var Ltripleplay_util_StyledText$Span_2_classLit = createForClass('tripleplay.util', 'StyledText/Span', 131, Ltripleplay_util_StyledText$Plain_2_classLit);
function $clinit_TextStyle(){
  $clinit_TextStyle = emptyMethod;
  new TextStyle(null, true, $intern_27, ($clinit_EffectRenderer() , NONE_3), false);
}

function $equals_6(this$static, other){
  var os;
  if (!instanceOf(other, 112))
    return false;
  os = other;
  return $equals_3(this$static, other) && this$static.textColor == os.textColor && this$static.effect.equals$(os.effect) && this$static.underlined == os.underlined;
}

function $hashCode_3(this$static){
  return $hashCode_1(this$static) ^ this$static.textColor ^ this$static.effect.hashCode$() ^ (this$static.underlined?1:0);
}

function $withFont(this$static, font){
  return new TextStyle(font, this$static.antialias_0, this$static.textColor, this$static.effect, this$static.underlined);
}

function TextStyle(font, antialias, textColor, effect, underlined){
  $clinit_TextStyle();
  this.font_0 = font;
  this.antialias_0 = antialias;
  this.textColor = textColor;
  this.effect = effect;
  this.underlined = underlined;
}

defineClass(112, 130, {130:1, 112:1}, TextStyle);
_.equals$ = function equals_48(other){
  return $equals_6(this, other);
}
;
_.hashCode$ = function hashCode_50(){
  return $hashCode_3(this);
}
;
_.textColor = 0;
_.underlined = false;
var Ltripleplay_util_TextStyle_2_classLit = createForClass('tripleplay.util', 'TextStyle', 112, Lplayn_core_TextFormat_2_classLit);
var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 532, Ljava_lang_Object_2_classLit), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 534, Ljava_lang_Object_2_classLit), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null, Ljava_lang_Object_2_classLit), I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 537, Ljava_lang_Object_2_classLit), D_classLit = createForPrimitive('double', 'D'), F_classLit = createForPrimitive('float', 'F'), S_classLit = createForPrimitive('short', 'S'), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Lreact_Closeable_2_classLit = createForInterface('react', 'Closeable'), Ltripleplay_ui_ToggleButton_2_classLit = createForClass('tripleplay.ui', 'ToggleButton', null, Ltripleplay_ui_AbstractTextButton_2_classLit), Ltripleplay_ui_CheckBox_2_classLit = createForClass('tripleplay.ui', 'CheckBox', null, Ltripleplay_ui_TextWidget_2_classLit), Ltripleplay_ui_Field_2_classLit = createForClass('tripleplay.ui', 'Field', null, Ltripleplay_ui_TextWidget_2_classLit), Ltripleplay_ui_Menu_2_classLit = createForClass('tripleplay.ui', 'Menu', null, Ltripleplay_ui_Elements_2_classLit), Ltripleplay_ui_MenuItem_2_classLit = createForClass('tripleplay.ui', 'MenuItem', null, Ltripleplay_ui_TextWidget_2_classLit);
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=ld37-0.js

