/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.item_configurator_proto = (function() {

    /**
     * Namespace item_configurator_proto.
     * @exports item_configurator_proto
     * @namespace
     */
    var item_configurator_proto = {};

    /**
     * Query enum.
     * @name item_configurator_proto.Query
     * @enum {number}
     * @property {number} TRUE=0 TRUE value
     * @property {number} FALSE=1 FALSE value
     * @property {number} BOTH=2 BOTH value
     */
    item_configurator_proto.Query = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TRUE"] = 0;
        values[valuesById[1] = "FALSE"] = 1;
        values[valuesById[2] = "BOTH"] = 2;
        return values;
    })();

    /**
     * AuthKind enum.
     * @name item_configurator_proto.AuthKind
     * @enum {number}
     * @property {number} READ=0 READ value
     * @property {number} WRITE=1 WRITE value
     */
    item_configurator_proto.AuthKind = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "READ"] = 0;
        values[valuesById[1] = "WRITE"] = 1;
        return values;
    })();

    item_configurator_proto.ListItem = (function() {

        /**
         * Properties of a ListItem.
         * @memberof item_configurator_proto
         * @interface IListItem
         * @property {number|null} [typeId] ListItem typeId
         * @property {boolean|null} [enabled] ListItem enabled
         * @property {Object.<string,number>|null} [jsonIdx] ListItem jsonIdx
         * @property {string|null} [name] ListItem name
         * @property {number|null} [marketGroupIdx] ListItem marketGroupIdx
         * @property {number|null} [groupIdx] ListItem groupIdx
         * @property {number|null} [categoryIdx] ListItem categoryIdx
         */

        /**
         * Constructs a new ListItem.
         * @memberof item_configurator_proto
         * @classdesc Represents a ListItem.
         * @implements IListItem
         * @constructor
         * @param {item_configurator_proto.IListItem=} [properties] Properties to set
         */
        function ListItem(properties) {
            this.jsonIdx = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListItem typeId.
         * @member {number} typeId
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.typeId = 0;

        /**
         * ListItem enabled.
         * @member {boolean} enabled
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.enabled = false;

        /**
         * ListItem jsonIdx.
         * @member {Object.<string,number>} jsonIdx
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.jsonIdx = $util.emptyObject;

        /**
         * ListItem name.
         * @member {string} name
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.name = "";

        /**
         * ListItem marketGroupIdx.
         * @member {number} marketGroupIdx
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.marketGroupIdx = 0;

        /**
         * ListItem groupIdx.
         * @member {number} groupIdx
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.groupIdx = 0;

        /**
         * ListItem categoryIdx.
         * @member {number} categoryIdx
         * @memberof item_configurator_proto.ListItem
         * @instance
         */
        ListItem.prototype.categoryIdx = 0;

        /**
         * Creates a new ListItem instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {item_configurator_proto.IListItem=} [properties] Properties to set
         * @returns {item_configurator_proto.ListItem} ListItem instance
         */
        ListItem.create = function create(properties) {
            return new ListItem(properties);
        };

        /**
         * Encodes the specified ListItem message. Does not implicitly {@link item_configurator_proto.ListItem.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {item_configurator_proto.IListItem} message ListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typeId != null && Object.hasOwnProperty.call(message, "typeId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.typeId);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
            if (message.jsonIdx != null && Object.hasOwnProperty.call(message, "jsonIdx"))
                for (var keys = Object.keys(message.jsonIdx), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.jsonIdx[keys[i]]).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.marketGroupIdx != null && Object.hasOwnProperty.call(message, "marketGroupIdx"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.marketGroupIdx);
            if (message.groupIdx != null && Object.hasOwnProperty.call(message, "groupIdx"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.groupIdx);
            if (message.categoryIdx != null && Object.hasOwnProperty.call(message, "categoryIdx"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.categoryIdx);
            return writer;
        };

        /**
         * Encodes the specified ListItem message, length delimited. Does not implicitly {@link item_configurator_proto.ListItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {item_configurator_proto.IListItem} message ListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListItem message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.ListItem} ListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.ListItem(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.typeId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 3: {
                        if (message.jsonIdx === $util.emptyObject)
                            message.jsonIdx = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.jsonIdx[key] = value;
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 5: {
                        message.marketGroupIdx = reader.uint32();
                        break;
                    }
                case 6: {
                        message.groupIdx = reader.uint32();
                        break;
                    }
                case 7: {
                        message.categoryIdx = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.ListItem} ListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListItem message.
         * @function verify
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typeId != null && message.hasOwnProperty("typeId"))
                if (!$util.isInteger(message.typeId))
                    return "typeId: integer expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.jsonIdx != null && message.hasOwnProperty("jsonIdx")) {
                if (!$util.isObject(message.jsonIdx))
                    return "jsonIdx: object expected";
                var key = Object.keys(message.jsonIdx);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.jsonIdx[key[i]]))
                        return "jsonIdx: integer{k:string} expected";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.marketGroupIdx != null && message.hasOwnProperty("marketGroupIdx"))
                if (!$util.isInteger(message.marketGroupIdx))
                    return "marketGroupIdx: integer expected";
            if (message.groupIdx != null && message.hasOwnProperty("groupIdx"))
                if (!$util.isInteger(message.groupIdx))
                    return "groupIdx: integer expected";
            if (message.categoryIdx != null && message.hasOwnProperty("categoryIdx"))
                if (!$util.isInteger(message.categoryIdx))
                    return "categoryIdx: integer expected";
            return null;
        };

        /**
         * Creates a ListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.ListItem} ListItem
         */
        ListItem.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.ListItem)
                return object;
            var message = new $root.item_configurator_proto.ListItem();
            if (object.typeId != null)
                message.typeId = object.typeId >>> 0;
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.jsonIdx) {
                if (typeof object.jsonIdx !== "object")
                    throw TypeError(".item_configurator_proto.ListItem.jsonIdx: object expected");
                message.jsonIdx = {};
                for (var keys = Object.keys(object.jsonIdx), i = 0; i < keys.length; ++i)
                    message.jsonIdx[keys[i]] = object.jsonIdx[keys[i]] >>> 0;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.marketGroupIdx != null)
                message.marketGroupIdx = object.marketGroupIdx >>> 0;
            if (object.groupIdx != null)
                message.groupIdx = object.groupIdx >>> 0;
            if (object.categoryIdx != null)
                message.categoryIdx = object.categoryIdx >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {item_configurator_proto.ListItem} message ListItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.jsonIdx = {};
            if (options.defaults) {
                object.typeId = 0;
                object.enabled = false;
                object.name = "";
                object.marketGroupIdx = 0;
                object.groupIdx = 0;
                object.categoryIdx = 0;
            }
            if (message.typeId != null && message.hasOwnProperty("typeId"))
                object.typeId = message.typeId;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            var keys2;
            if (message.jsonIdx && (keys2 = Object.keys(message.jsonIdx)).length) {
                object.jsonIdx = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.jsonIdx[keys2[j]] = message.jsonIdx[keys2[j]];
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.marketGroupIdx != null && message.hasOwnProperty("marketGroupIdx"))
                object.marketGroupIdx = message.marketGroupIdx;
            if (message.groupIdx != null && message.hasOwnProperty("groupIdx"))
                object.groupIdx = message.groupIdx;
            if (message.categoryIdx != null && message.hasOwnProperty("categoryIdx"))
                object.categoryIdx = message.categoryIdx;
            return object;
        };

        /**
         * Converts this ListItem to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.ListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListItem
         * @function getTypeUrl
         * @memberof item_configurator_proto.ListItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.ListItem";
        };

        return ListItem;
    })();

    item_configurator_proto.ListRep = (function() {

        /**
         * Properties of a ListRep.
         * @memberof item_configurator_proto
         * @interface IListRep
         * @property {Array.<item_configurator_proto.IListItem>|null} [items] ListRep items
         * @property {Array.<string>|null} [json] ListRep json
         * @property {Array.<string>|null} [marketGroups] ListRep marketGroups
         * @property {Array.<string>|null} [groups] ListRep groups
         * @property {Array.<string>|null} [categories] ListRep categories
         * @property {string|null} [refreshToken] ListRep refreshToken
         * @property {boolean|null} [authorized] ListRep authorized
         */

        /**
         * Constructs a new ListRep.
         * @memberof item_configurator_proto
         * @classdesc Represents a ListRep.
         * @implements IListRep
         * @constructor
         * @param {item_configurator_proto.IListRep=} [properties] Properties to set
         */
        function ListRep(properties) {
            this.items = [];
            this.json = [];
            this.marketGroups = [];
            this.groups = [];
            this.categories = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRep items.
         * @member {Array.<item_configurator_proto.IListItem>} items
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.items = $util.emptyArray;

        /**
         * ListRep json.
         * @member {Array.<string>} json
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.json = $util.emptyArray;

        /**
         * ListRep marketGroups.
         * @member {Array.<string>} marketGroups
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.marketGroups = $util.emptyArray;

        /**
         * ListRep groups.
         * @member {Array.<string>} groups
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.groups = $util.emptyArray;

        /**
         * ListRep categories.
         * @member {Array.<string>} categories
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.categories = $util.emptyArray;

        /**
         * ListRep refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.refreshToken = "";

        /**
         * ListRep authorized.
         * @member {boolean} authorized
         * @memberof item_configurator_proto.ListRep
         * @instance
         */
        ListRep.prototype.authorized = false;

        /**
         * Creates a new ListRep instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {item_configurator_proto.IListRep=} [properties] Properties to set
         * @returns {item_configurator_proto.ListRep} ListRep instance
         */
        ListRep.create = function create(properties) {
            return new ListRep(properties);
        };

        /**
         * Encodes the specified ListRep message. Does not implicitly {@link item_configurator_proto.ListRep.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {item_configurator_proto.IListRep} message ListRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.item_configurator_proto.ListItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.json != null && message.json.length)
                for (var i = 0; i < message.json.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.json[i]);
            if (message.marketGroups != null && message.marketGroups.length)
                for (var i = 0; i < message.marketGroups.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.marketGroups[i]);
            if (message.groups != null && message.groups.length)
                for (var i = 0; i < message.groups.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.groups[i]);
            if (message.categories != null && message.categories.length)
                for (var i = 0; i < message.categories.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.categories[i]);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.refreshToken);
            if (message.authorized != null && Object.hasOwnProperty.call(message, "authorized"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.authorized);
            return writer;
        };

        /**
         * Encodes the specified ListRep message, length delimited. Does not implicitly {@link item_configurator_proto.ListRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {item_configurator_proto.IListRep} message ListRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListRep message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.ListRep} ListRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.ListRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.item_configurator_proto.ListItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.json && message.json.length))
                            message.json = [];
                        message.json.push(reader.string());
                        break;
                    }
                case 3: {
                        if (!(message.marketGroups && message.marketGroups.length))
                            message.marketGroups = [];
                        message.marketGroups.push(reader.string());
                        break;
                    }
                case 4: {
                        if (!(message.groups && message.groups.length))
                            message.groups = [];
                        message.groups.push(reader.string());
                        break;
                    }
                case 5: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        message.categories.push(reader.string());
                        break;
                    }
                case 6: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 7: {
                        message.authorized = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.ListRep} ListRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListRep message.
         * @function verify
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.item_configurator_proto.ListItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.json != null && message.hasOwnProperty("json")) {
                if (!Array.isArray(message.json))
                    return "json: array expected";
                for (var i = 0; i < message.json.length; ++i)
                    if (!$util.isString(message.json[i]))
                        return "json: string[] expected";
            }
            if (message.marketGroups != null && message.hasOwnProperty("marketGroups")) {
                if (!Array.isArray(message.marketGroups))
                    return "marketGroups: array expected";
                for (var i = 0; i < message.marketGroups.length; ++i)
                    if (!$util.isString(message.marketGroups[i]))
                        return "marketGroups: string[] expected";
            }
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (var i = 0; i < message.groups.length; ++i)
                    if (!$util.isString(message.groups[i]))
                        return "groups: string[] expected";
            }
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i)
                    if (!$util.isString(message.categories[i]))
                        return "categories: string[] expected";
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                if (typeof message.authorized !== "boolean")
                    return "authorized: boolean expected";
            return null;
        };

        /**
         * Creates a ListRep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.ListRep} ListRep
         */
        ListRep.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.ListRep)
                return object;
            var message = new $root.item_configurator_proto.ListRep();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".item_configurator_proto.ListRep.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".item_configurator_proto.ListRep.items: object expected");
                    message.items[i] = $root.item_configurator_proto.ListItem.fromObject(object.items[i]);
                }
            }
            if (object.json) {
                if (!Array.isArray(object.json))
                    throw TypeError(".item_configurator_proto.ListRep.json: array expected");
                message.json = [];
                for (var i = 0; i < object.json.length; ++i)
                    message.json[i] = String(object.json[i]);
            }
            if (object.marketGroups) {
                if (!Array.isArray(object.marketGroups))
                    throw TypeError(".item_configurator_proto.ListRep.marketGroups: array expected");
                message.marketGroups = [];
                for (var i = 0; i < object.marketGroups.length; ++i)
                    message.marketGroups[i] = String(object.marketGroups[i]);
            }
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".item_configurator_proto.ListRep.groups: array expected");
                message.groups = [];
                for (var i = 0; i < object.groups.length; ++i)
                    message.groups[i] = String(object.groups[i]);
            }
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".item_configurator_proto.ListRep.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i)
                    message.categories[i] = String(object.categories[i]);
            }
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.authorized != null)
                message.authorized = Boolean(object.authorized);
            return message;
        };

        /**
         * Creates a plain object from a ListRep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {item_configurator_proto.ListRep} message ListRep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListRep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.items = [];
                object.json = [];
                object.marketGroups = [];
                object.groups = [];
                object.categories = [];
            }
            if (options.defaults) {
                object.refreshToken = "";
                object.authorized = false;
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.item_configurator_proto.ListItem.toObject(message.items[j], options);
            }
            if (message.json && message.json.length) {
                object.json = [];
                for (var j = 0; j < message.json.length; ++j)
                    object.json[j] = message.json[j];
            }
            if (message.marketGroups && message.marketGroups.length) {
                object.marketGroups = [];
                for (var j = 0; j < message.marketGroups.length; ++j)
                    object.marketGroups[j] = message.marketGroups[j];
            }
            if (message.groups && message.groups.length) {
                object.groups = [];
                for (var j = 0; j < message.groups.length; ++j)
                    object.groups[j] = message.groups[j];
            }
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    object.categories[j] = message.categories[j];
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                object.authorized = message.authorized;
            return object;
        };

        /**
         * Converts this ListRep to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.ListRep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListRep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListRep
         * @function getTypeUrl
         * @memberof item_configurator_proto.ListRep
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.ListRep";
        };

        return ListRep;
    })();

    item_configurator_proto.ListReq = (function() {

        /**
         * Properties of a ListReq.
         * @memberof item_configurator_proto
         * @interface IListReq
         * @property {string|null} [name] ListReq name
         * @property {string|null} [refreshToken] ListReq refreshToken
         * @property {item_configurator_proto.Query|null} [includeEnabled] ListReq includeEnabled
         * @property {item_configurator_proto.Query|null} [includeConfigured] ListReq includeConfigured
         * @property {boolean|null} [includeJson] ListReq includeJson
         * @property {string|null} [language] ListReq language
         * @property {boolean|null} [includeName] ListReq includeName
         * @property {boolean|null} [includeMarketGroup] ListReq includeMarketGroup
         * @property {boolean|null} [includeGroup] ListReq includeGroup
         * @property {boolean|null} [includeCategory] ListReq includeCategory
         */

        /**
         * Constructs a new ListReq.
         * @memberof item_configurator_proto
         * @classdesc Represents a ListReq.
         * @implements IListReq
         * @constructor
         * @param {item_configurator_proto.IListReq=} [properties] Properties to set
         */
        function ListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListReq name.
         * @member {string} name
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.name = "";

        /**
         * ListReq refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.refreshToken = "";

        /**
         * ListReq includeEnabled.
         * @member {item_configurator_proto.Query} includeEnabled
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeEnabled = 0;

        /**
         * ListReq includeConfigured.
         * @member {item_configurator_proto.Query} includeConfigured
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeConfigured = 0;

        /**
         * ListReq includeJson.
         * @member {boolean} includeJson
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeJson = false;

        /**
         * ListReq language.
         * @member {string} language
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.language = "";

        /**
         * ListReq includeName.
         * @member {boolean} includeName
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeName = false;

        /**
         * ListReq includeMarketGroup.
         * @member {boolean} includeMarketGroup
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeMarketGroup = false;

        /**
         * ListReq includeGroup.
         * @member {boolean} includeGroup
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeGroup = false;

        /**
         * ListReq includeCategory.
         * @member {boolean} includeCategory
         * @memberof item_configurator_proto.ListReq
         * @instance
         */
        ListReq.prototype.includeCategory = false;

        /**
         * Creates a new ListReq instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {item_configurator_proto.IListReq=} [properties] Properties to set
         * @returns {item_configurator_proto.ListReq} ListReq instance
         */
        ListReq.create = function create(properties) {
            return new ListReq(properties);
        };

        /**
         * Encodes the specified ListReq message. Does not implicitly {@link item_configurator_proto.ListReq.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {item_configurator_proto.IListReq} message ListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
            if (message.includeEnabled != null && Object.hasOwnProperty.call(message, "includeEnabled"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.includeEnabled);
            if (message.includeConfigured != null && Object.hasOwnProperty.call(message, "includeConfigured"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.includeConfigured);
            if (message.includeJson != null && Object.hasOwnProperty.call(message, "includeJson"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includeJson);
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.language);
            if (message.includeName != null && Object.hasOwnProperty.call(message, "includeName"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.includeName);
            if (message.includeMarketGroup != null && Object.hasOwnProperty.call(message, "includeMarketGroup"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.includeMarketGroup);
            if (message.includeGroup != null && Object.hasOwnProperty.call(message, "includeGroup"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.includeGroup);
            if (message.includeCategory != null && Object.hasOwnProperty.call(message, "includeCategory"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.includeCategory);
            return writer;
        };

        /**
         * Encodes the specified ListReq message, length delimited. Does not implicitly {@link item_configurator_proto.ListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {item_configurator_proto.IListReq} message ListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListReq message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.ListReq} ListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.ListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 3: {
                        message.includeEnabled = reader.int32();
                        break;
                    }
                case 4: {
                        message.includeConfigured = reader.int32();
                        break;
                    }
                case 5: {
                        message.includeJson = reader.bool();
                        break;
                    }
                case 6: {
                        message.language = reader.string();
                        break;
                    }
                case 7: {
                        message.includeName = reader.bool();
                        break;
                    }
                case 8: {
                        message.includeMarketGroup = reader.bool();
                        break;
                    }
                case 9: {
                        message.includeGroup = reader.bool();
                        break;
                    }
                case 10: {
                        message.includeCategory = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.ListReq} ListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListReq message.
         * @function verify
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.includeEnabled != null && message.hasOwnProperty("includeEnabled"))
                switch (message.includeEnabled) {
                default:
                    return "includeEnabled: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.includeConfigured != null && message.hasOwnProperty("includeConfigured"))
                switch (message.includeConfigured) {
                default:
                    return "includeConfigured: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.includeJson != null && message.hasOwnProperty("includeJson"))
                if (typeof message.includeJson !== "boolean")
                    return "includeJson: boolean expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.includeName != null && message.hasOwnProperty("includeName"))
                if (typeof message.includeName !== "boolean")
                    return "includeName: boolean expected";
            if (message.includeMarketGroup != null && message.hasOwnProperty("includeMarketGroup"))
                if (typeof message.includeMarketGroup !== "boolean")
                    return "includeMarketGroup: boolean expected";
            if (message.includeGroup != null && message.hasOwnProperty("includeGroup"))
                if (typeof message.includeGroup !== "boolean")
                    return "includeGroup: boolean expected";
            if (message.includeCategory != null && message.hasOwnProperty("includeCategory"))
                if (typeof message.includeCategory !== "boolean")
                    return "includeCategory: boolean expected";
            return null;
        };

        /**
         * Creates a ListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.ListReq} ListReq
         */
        ListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.ListReq)
                return object;
            var message = new $root.item_configurator_proto.ListReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            switch (object.includeEnabled) {
            default:
                if (typeof object.includeEnabled === "number") {
                    message.includeEnabled = object.includeEnabled;
                    break;
                }
                break;
            case "TRUE":
            case 0:
                message.includeEnabled = 0;
                break;
            case "FALSE":
            case 1:
                message.includeEnabled = 1;
                break;
            case "BOTH":
            case 2:
                message.includeEnabled = 2;
                break;
            }
            switch (object.includeConfigured) {
            default:
                if (typeof object.includeConfigured === "number") {
                    message.includeConfigured = object.includeConfigured;
                    break;
                }
                break;
            case "TRUE":
            case 0:
                message.includeConfigured = 0;
                break;
            case "FALSE":
            case 1:
                message.includeConfigured = 1;
                break;
            case "BOTH":
            case 2:
                message.includeConfigured = 2;
                break;
            }
            if (object.includeJson != null)
                message.includeJson = Boolean(object.includeJson);
            if (object.language != null)
                message.language = String(object.language);
            if (object.includeName != null)
                message.includeName = Boolean(object.includeName);
            if (object.includeMarketGroup != null)
                message.includeMarketGroup = Boolean(object.includeMarketGroup);
            if (object.includeGroup != null)
                message.includeGroup = Boolean(object.includeGroup);
            if (object.includeCategory != null)
                message.includeCategory = Boolean(object.includeCategory);
            return message;
        };

        /**
         * Creates a plain object from a ListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {item_configurator_proto.ListReq} message ListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.refreshToken = "";
                object.includeEnabled = options.enums === String ? "TRUE" : 0;
                object.includeConfigured = options.enums === String ? "TRUE" : 0;
                object.includeJson = false;
                object.language = "";
                object.includeName = false;
                object.includeMarketGroup = false;
                object.includeGroup = false;
                object.includeCategory = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.includeEnabled != null && message.hasOwnProperty("includeEnabled"))
                object.includeEnabled = options.enums === String ? $root.item_configurator_proto.Query[message.includeEnabled] === undefined ? message.includeEnabled : $root.item_configurator_proto.Query[message.includeEnabled] : message.includeEnabled;
            if (message.includeConfigured != null && message.hasOwnProperty("includeConfigured"))
                object.includeConfigured = options.enums === String ? $root.item_configurator_proto.Query[message.includeConfigured] === undefined ? message.includeConfigured : $root.item_configurator_proto.Query[message.includeConfigured] : message.includeConfigured;
            if (message.includeJson != null && message.hasOwnProperty("includeJson"))
                object.includeJson = message.includeJson;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.includeName != null && message.hasOwnProperty("includeName"))
                object.includeName = message.includeName;
            if (message.includeMarketGroup != null && message.hasOwnProperty("includeMarketGroup"))
                object.includeMarketGroup = message.includeMarketGroup;
            if (message.includeGroup != null && message.hasOwnProperty("includeGroup"))
                object.includeGroup = message.includeGroup;
            if (message.includeCategory != null && message.hasOwnProperty("includeCategory"))
                object.includeCategory = message.includeCategory;
            return object;
        };

        /**
         * Converts this ListReq to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.ListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListReq
         * @function getTypeUrl
         * @memberof item_configurator_proto.ListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.ListReq";
        };

        return ListReq;
    })();

    item_configurator_proto.UpdateItem = (function() {

        /**
         * Properties of an UpdateItem.
         * @memberof item_configurator_proto
         * @interface IUpdateItem
         * @property {number|null} [typeId] UpdateItem typeId
         * @property {boolean|null} [enabled] UpdateItem enabled
         * @property {Object.<string,number>|null} [jsonIdx] UpdateItem jsonIdx
         */

        /**
         * Constructs a new UpdateItem.
         * @memberof item_configurator_proto
         * @classdesc Represents an UpdateItem.
         * @implements IUpdateItem
         * @constructor
         * @param {item_configurator_proto.IUpdateItem=} [properties] Properties to set
         */
        function UpdateItem(properties) {
            this.jsonIdx = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateItem typeId.
         * @member {number} typeId
         * @memberof item_configurator_proto.UpdateItem
         * @instance
         */
        UpdateItem.prototype.typeId = 0;

        /**
         * UpdateItem enabled.
         * @member {boolean} enabled
         * @memberof item_configurator_proto.UpdateItem
         * @instance
         */
        UpdateItem.prototype.enabled = false;

        /**
         * UpdateItem jsonIdx.
         * @member {Object.<string,number>} jsonIdx
         * @memberof item_configurator_proto.UpdateItem
         * @instance
         */
        UpdateItem.prototype.jsonIdx = $util.emptyObject;

        /**
         * Creates a new UpdateItem instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {item_configurator_proto.IUpdateItem=} [properties] Properties to set
         * @returns {item_configurator_proto.UpdateItem} UpdateItem instance
         */
        UpdateItem.create = function create(properties) {
            return new UpdateItem(properties);
        };

        /**
         * Encodes the specified UpdateItem message. Does not implicitly {@link item_configurator_proto.UpdateItem.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {item_configurator_proto.IUpdateItem} message UpdateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typeId != null && Object.hasOwnProperty.call(message, "typeId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.typeId);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
            if (message.jsonIdx != null && Object.hasOwnProperty.call(message, "jsonIdx"))
                for (var keys = Object.keys(message.jsonIdx), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.jsonIdx[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateItem message, length delimited. Does not implicitly {@link item_configurator_proto.UpdateItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {item_configurator_proto.IUpdateItem} message UpdateItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateItem message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.UpdateItem} UpdateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.UpdateItem(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.typeId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 3: {
                        if (message.jsonIdx === $util.emptyObject)
                            message.jsonIdx = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.jsonIdx[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.UpdateItem} UpdateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateItem message.
         * @function verify
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typeId != null && message.hasOwnProperty("typeId"))
                if (!$util.isInteger(message.typeId))
                    return "typeId: integer expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.jsonIdx != null && message.hasOwnProperty("jsonIdx")) {
                if (!$util.isObject(message.jsonIdx))
                    return "jsonIdx: object expected";
                var key = Object.keys(message.jsonIdx);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.jsonIdx[key[i]]))
                        return "jsonIdx: integer{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an UpdateItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.UpdateItem} UpdateItem
         */
        UpdateItem.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.UpdateItem)
                return object;
            var message = new $root.item_configurator_proto.UpdateItem();
            if (object.typeId != null)
                message.typeId = object.typeId >>> 0;
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.jsonIdx) {
                if (typeof object.jsonIdx !== "object")
                    throw TypeError(".item_configurator_proto.UpdateItem.jsonIdx: object expected");
                message.jsonIdx = {};
                for (var keys = Object.keys(object.jsonIdx), i = 0; i < keys.length; ++i)
                    message.jsonIdx[keys[i]] = object.jsonIdx[keys[i]] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {item_configurator_proto.UpdateItem} message UpdateItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.jsonIdx = {};
            if (options.defaults) {
                object.typeId = 0;
                object.enabled = false;
            }
            if (message.typeId != null && message.hasOwnProperty("typeId"))
                object.typeId = message.typeId;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            var keys2;
            if (message.jsonIdx && (keys2 = Object.keys(message.jsonIdx)).length) {
                object.jsonIdx = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.jsonIdx[keys2[j]] = message.jsonIdx[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this UpdateItem to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.UpdateItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateItem
         * @function getTypeUrl
         * @memberof item_configurator_proto.UpdateItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.UpdateItem";
        };

        return UpdateItem;
    })();

    item_configurator_proto.UpdateRep = (function() {

        /**
         * Properties of an UpdateRep.
         * @memberof item_configurator_proto
         * @interface IUpdateRep
         * @property {string|null} [refreshToken] UpdateRep refreshToken
         * @property {boolean|null} [authorized] UpdateRep authorized
         */

        /**
         * Constructs a new UpdateRep.
         * @memberof item_configurator_proto
         * @classdesc Represents an UpdateRep.
         * @implements IUpdateRep
         * @constructor
         * @param {item_configurator_proto.IUpdateRep=} [properties] Properties to set
         */
        function UpdateRep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRep refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.UpdateRep
         * @instance
         */
        UpdateRep.prototype.refreshToken = "";

        /**
         * UpdateRep authorized.
         * @member {boolean} authorized
         * @memberof item_configurator_proto.UpdateRep
         * @instance
         */
        UpdateRep.prototype.authorized = false;

        /**
         * Creates a new UpdateRep instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {item_configurator_proto.IUpdateRep=} [properties] Properties to set
         * @returns {item_configurator_proto.UpdateRep} UpdateRep instance
         */
        UpdateRep.create = function create(properties) {
            return new UpdateRep(properties);
        };

        /**
         * Encodes the specified UpdateRep message. Does not implicitly {@link item_configurator_proto.UpdateRep.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {item_configurator_proto.IUpdateRep} message UpdateRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
            if (message.authorized != null && Object.hasOwnProperty.call(message, "authorized"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authorized);
            return writer;
        };

        /**
         * Encodes the specified UpdateRep message, length delimited. Does not implicitly {@link item_configurator_proto.UpdateRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {item_configurator_proto.IUpdateRep} message UpdateRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRep message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.UpdateRep} UpdateRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.UpdateRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 2: {
                        message.authorized = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.UpdateRep} UpdateRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRep message.
         * @function verify
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                if (typeof message.authorized !== "boolean")
                    return "authorized: boolean expected";
            return null;
        };

        /**
         * Creates an UpdateRep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.UpdateRep} UpdateRep
         */
        UpdateRep.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.UpdateRep)
                return object;
            var message = new $root.item_configurator_proto.UpdateRep();
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.authorized != null)
                message.authorized = Boolean(object.authorized);
            return message;
        };

        /**
         * Creates a plain object from an UpdateRep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {item_configurator_proto.UpdateRep} message UpdateRep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.refreshToken = "";
                object.authorized = false;
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                object.authorized = message.authorized;
            return object;
        };

        /**
         * Converts this UpdateRep to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.UpdateRep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateRep
         * @function getTypeUrl
         * @memberof item_configurator_proto.UpdateRep
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateRep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.UpdateRep";
        };

        return UpdateRep;
    })();

    item_configurator_proto.UpdateReq = (function() {

        /**
         * Properties of an UpdateReq.
         * @memberof item_configurator_proto
         * @interface IUpdateReq
         * @property {string|null} [name] UpdateReq name
         * @property {string|null} [refreshToken] UpdateReq refreshToken
         * @property {Array.<item_configurator_proto.IUpdateItem>|null} [items] UpdateReq items
         * @property {Array.<string>|null} [json] UpdateReq json
         */

        /**
         * Constructs a new UpdateReq.
         * @memberof item_configurator_proto
         * @classdesc Represents an UpdateReq.
         * @implements IUpdateReq
         * @constructor
         * @param {item_configurator_proto.IUpdateReq=} [properties] Properties to set
         */
        function UpdateReq(properties) {
            this.items = [];
            this.json = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateReq name.
         * @member {string} name
         * @memberof item_configurator_proto.UpdateReq
         * @instance
         */
        UpdateReq.prototype.name = "";

        /**
         * UpdateReq refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.UpdateReq
         * @instance
         */
        UpdateReq.prototype.refreshToken = "";

        /**
         * UpdateReq items.
         * @member {Array.<item_configurator_proto.IUpdateItem>} items
         * @memberof item_configurator_proto.UpdateReq
         * @instance
         */
        UpdateReq.prototype.items = $util.emptyArray;

        /**
         * UpdateReq json.
         * @member {Array.<string>} json
         * @memberof item_configurator_proto.UpdateReq
         * @instance
         */
        UpdateReq.prototype.json = $util.emptyArray;

        /**
         * Creates a new UpdateReq instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {item_configurator_proto.IUpdateReq=} [properties] Properties to set
         * @returns {item_configurator_proto.UpdateReq} UpdateReq instance
         */
        UpdateReq.create = function create(properties) {
            return new UpdateReq(properties);
        };

        /**
         * Encodes the specified UpdateReq message. Does not implicitly {@link item_configurator_proto.UpdateReq.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {item_configurator_proto.IUpdateReq} message UpdateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.item_configurator_proto.UpdateItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.json != null && message.json.length)
                for (var i = 0; i < message.json.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.json[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateReq message, length delimited. Does not implicitly {@link item_configurator_proto.UpdateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {item_configurator_proto.IUpdateReq} message UpdateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateReq message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.UpdateReq} UpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.UpdateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.item_configurator_proto.UpdateItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.json && message.json.length))
                            message.json = [];
                        message.json.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.UpdateReq} UpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateReq message.
         * @function verify
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.item_configurator_proto.UpdateItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.json != null && message.hasOwnProperty("json")) {
                if (!Array.isArray(message.json))
                    return "json: array expected";
                for (var i = 0; i < message.json.length; ++i)
                    if (!$util.isString(message.json[i]))
                        return "json: string[] expected";
            }
            return null;
        };

        /**
         * Creates an UpdateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.UpdateReq} UpdateReq
         */
        UpdateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.UpdateReq)
                return object;
            var message = new $root.item_configurator_proto.UpdateReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".item_configurator_proto.UpdateReq.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".item_configurator_proto.UpdateReq.items: object expected");
                    message.items[i] = $root.item_configurator_proto.UpdateItem.fromObject(object.items[i]);
                }
            }
            if (object.json) {
                if (!Array.isArray(object.json))
                    throw TypeError(".item_configurator_proto.UpdateReq.json: array expected");
                message.json = [];
                for (var i = 0; i < object.json.length; ++i)
                    message.json[i] = String(object.json[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {item_configurator_proto.UpdateReq} message UpdateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.items = [];
                object.json = [];
            }
            if (options.defaults) {
                object.name = "";
                object.refreshToken = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.item_configurator_proto.UpdateItem.toObject(message.items[j], options);
            }
            if (message.json && message.json.length) {
                object.json = [];
                for (var j = 0; j < message.json.length; ++j)
                    object.json[j] = message.json[j];
            }
            return object;
        };

        /**
         * Converts this UpdateReq to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.UpdateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateReq
         * @function getTypeUrl
         * @memberof item_configurator_proto.UpdateReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.UpdateReq";
        };

        return UpdateReq;
    })();

    item_configurator_proto.ListCharactersRep = (function() {

        /**
         * Properties of a ListCharactersRep.
         * @memberof item_configurator_proto
         * @interface IListCharactersRep
         * @property {Array.<string>|null} [characters] ListCharactersRep characters
         * @property {string|null} [refreshToken] ListCharactersRep refreshToken
         * @property {boolean|null} [authorized] ListCharactersRep authorized
         */

        /**
         * Constructs a new ListCharactersRep.
         * @memberof item_configurator_proto
         * @classdesc Represents a ListCharactersRep.
         * @implements IListCharactersRep
         * @constructor
         * @param {item_configurator_proto.IListCharactersRep=} [properties] Properties to set
         */
        function ListCharactersRep(properties) {
            this.characters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListCharactersRep characters.
         * @member {Array.<string>} characters
         * @memberof item_configurator_proto.ListCharactersRep
         * @instance
         */
        ListCharactersRep.prototype.characters = $util.emptyArray;

        /**
         * ListCharactersRep refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.ListCharactersRep
         * @instance
         */
        ListCharactersRep.prototype.refreshToken = "";

        /**
         * ListCharactersRep authorized.
         * @member {boolean} authorized
         * @memberof item_configurator_proto.ListCharactersRep
         * @instance
         */
        ListCharactersRep.prototype.authorized = false;

        /**
         * Creates a new ListCharactersRep instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {item_configurator_proto.IListCharactersRep=} [properties] Properties to set
         * @returns {item_configurator_proto.ListCharactersRep} ListCharactersRep instance
         */
        ListCharactersRep.create = function create(properties) {
            return new ListCharactersRep(properties);
        };

        /**
         * Encodes the specified ListCharactersRep message. Does not implicitly {@link item_configurator_proto.ListCharactersRep.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {item_configurator_proto.IListCharactersRep} message ListCharactersRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCharactersRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.characters != null && message.characters.length)
                for (var i = 0; i < message.characters.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.characters[i]);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
            if (message.authorized != null && Object.hasOwnProperty.call(message, "authorized"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.authorized);
            return writer;
        };

        /**
         * Encodes the specified ListCharactersRep message, length delimited. Does not implicitly {@link item_configurator_proto.ListCharactersRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {item_configurator_proto.IListCharactersRep} message ListCharactersRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCharactersRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListCharactersRep message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.ListCharactersRep} ListCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCharactersRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.ListCharactersRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.characters && message.characters.length))
                            message.characters = [];
                        message.characters.push(reader.string());
                        break;
                    }
                case 2: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 3: {
                        message.authorized = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListCharactersRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.ListCharactersRep} ListCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCharactersRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListCharactersRep message.
         * @function verify
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListCharactersRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.characters != null && message.hasOwnProperty("characters")) {
                if (!Array.isArray(message.characters))
                    return "characters: array expected";
                for (var i = 0; i < message.characters.length; ++i)
                    if (!$util.isString(message.characters[i]))
                        return "characters: string[] expected";
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                if (typeof message.authorized !== "boolean")
                    return "authorized: boolean expected";
            return null;
        };

        /**
         * Creates a ListCharactersRep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.ListCharactersRep} ListCharactersRep
         */
        ListCharactersRep.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.ListCharactersRep)
                return object;
            var message = new $root.item_configurator_proto.ListCharactersRep();
            if (object.characters) {
                if (!Array.isArray(object.characters))
                    throw TypeError(".item_configurator_proto.ListCharactersRep.characters: array expected");
                message.characters = [];
                for (var i = 0; i < object.characters.length; ++i)
                    message.characters[i] = String(object.characters[i]);
            }
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.authorized != null)
                message.authorized = Boolean(object.authorized);
            return message;
        };

        /**
         * Creates a plain object from a ListCharactersRep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {item_configurator_proto.ListCharactersRep} message ListCharactersRep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListCharactersRep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.characters = [];
            if (options.defaults) {
                object.refreshToken = "";
                object.authorized = false;
            }
            if (message.characters && message.characters.length) {
                object.characters = [];
                for (var j = 0; j < message.characters.length; ++j)
                    object.characters[j] = message.characters[j];
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                object.authorized = message.authorized;
            return object;
        };

        /**
         * Converts this ListCharactersRep to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.ListCharactersRep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListCharactersRep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListCharactersRep
         * @function getTypeUrl
         * @memberof item_configurator_proto.ListCharactersRep
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListCharactersRep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.ListCharactersRep";
        };

        return ListCharactersRep;
    })();

    item_configurator_proto.ListCharactersReq = (function() {

        /**
         * Properties of a ListCharactersReq.
         * @memberof item_configurator_proto
         * @interface IListCharactersReq
         * @property {string|null} [name] ListCharactersReq name
         * @property {boolean|null} [authKind] ListCharactersReq authKind
         * @property {boolean|null} [authScope] ListCharactersReq authScope
         * @property {string|null} [refreshToken] ListCharactersReq refreshToken
         */

        /**
         * Constructs a new ListCharactersReq.
         * @memberof item_configurator_proto
         * @classdesc Represents a ListCharactersReq.
         * @implements IListCharactersReq
         * @constructor
         * @param {item_configurator_proto.IListCharactersReq=} [properties] Properties to set
         */
        function ListCharactersReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListCharactersReq name.
         * @member {string} name
         * @memberof item_configurator_proto.ListCharactersReq
         * @instance
         */
        ListCharactersReq.prototype.name = "";

        /**
         * ListCharactersReq authKind.
         * @member {boolean} authKind
         * @memberof item_configurator_proto.ListCharactersReq
         * @instance
         */
        ListCharactersReq.prototype.authKind = false;

        /**
         * ListCharactersReq authScope.
         * @member {boolean} authScope
         * @memberof item_configurator_proto.ListCharactersReq
         * @instance
         */
        ListCharactersReq.prototype.authScope = false;

        /**
         * ListCharactersReq refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.ListCharactersReq
         * @instance
         */
        ListCharactersReq.prototype.refreshToken = "";

        /**
         * Creates a new ListCharactersReq instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {item_configurator_proto.IListCharactersReq=} [properties] Properties to set
         * @returns {item_configurator_proto.ListCharactersReq} ListCharactersReq instance
         */
        ListCharactersReq.create = function create(properties) {
            return new ListCharactersReq(properties);
        };

        /**
         * Encodes the specified ListCharactersReq message. Does not implicitly {@link item_configurator_proto.ListCharactersReq.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {item_configurator_proto.IListCharactersReq} message ListCharactersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCharactersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.authKind != null && Object.hasOwnProperty.call(message, "authKind"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authKind);
            if (message.authScope != null && Object.hasOwnProperty.call(message, "authScope"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.authScope);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.refreshToken);
            return writer;
        };

        /**
         * Encodes the specified ListCharactersReq message, length delimited. Does not implicitly {@link item_configurator_proto.ListCharactersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {item_configurator_proto.IListCharactersReq} message ListCharactersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListCharactersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListCharactersReq message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.ListCharactersReq} ListCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCharactersReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.ListCharactersReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.authKind = reader.bool();
                        break;
                    }
                case 3: {
                        message.authScope = reader.bool();
                        break;
                    }
                case 4: {
                        message.refreshToken = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListCharactersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.ListCharactersReq} ListCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListCharactersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListCharactersReq message.
         * @function verify
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListCharactersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.authKind != null && message.hasOwnProperty("authKind"))
                if (typeof message.authKind !== "boolean")
                    return "authKind: boolean expected";
            if (message.authScope != null && message.hasOwnProperty("authScope"))
                if (typeof message.authScope !== "boolean")
                    return "authScope: boolean expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            return null;
        };

        /**
         * Creates a ListCharactersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.ListCharactersReq} ListCharactersReq
         */
        ListCharactersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.ListCharactersReq)
                return object;
            var message = new $root.item_configurator_proto.ListCharactersReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.authKind != null)
                message.authKind = Boolean(object.authKind);
            if (object.authScope != null)
                message.authScope = Boolean(object.authScope);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            return message;
        };

        /**
         * Creates a plain object from a ListCharactersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {item_configurator_proto.ListCharactersReq} message ListCharactersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListCharactersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.authKind = false;
                object.authScope = false;
                object.refreshToken = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.authKind != null && message.hasOwnProperty("authKind"))
                object.authKind = message.authKind;
            if (message.authScope != null && message.hasOwnProperty("authScope"))
                object.authScope = message.authScope;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            return object;
        };

        /**
         * Converts this ListCharactersReq to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.ListCharactersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListCharactersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListCharactersReq
         * @function getTypeUrl
         * @memberof item_configurator_proto.ListCharactersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListCharactersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.ListCharactersReq";
        };

        return ListCharactersReq;
    })();

    item_configurator_proto.AddCharactersRep = (function() {

        /**
         * Properties of an AddCharactersRep.
         * @memberof item_configurator_proto
         * @interface IAddCharactersRep
         * @property {string|null} [refreshToken] AddCharactersRep refreshToken
         * @property {boolean|null} [authorized] AddCharactersRep authorized
         */

        /**
         * Constructs a new AddCharactersRep.
         * @memberof item_configurator_proto
         * @classdesc Represents an AddCharactersRep.
         * @implements IAddCharactersRep
         * @constructor
         * @param {item_configurator_proto.IAddCharactersRep=} [properties] Properties to set
         */
        function AddCharactersRep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddCharactersRep refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.AddCharactersRep
         * @instance
         */
        AddCharactersRep.prototype.refreshToken = "";

        /**
         * AddCharactersRep authorized.
         * @member {boolean} authorized
         * @memberof item_configurator_proto.AddCharactersRep
         * @instance
         */
        AddCharactersRep.prototype.authorized = false;

        /**
         * Creates a new AddCharactersRep instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {item_configurator_proto.IAddCharactersRep=} [properties] Properties to set
         * @returns {item_configurator_proto.AddCharactersRep} AddCharactersRep instance
         */
        AddCharactersRep.create = function create(properties) {
            return new AddCharactersRep(properties);
        };

        /**
         * Encodes the specified AddCharactersRep message. Does not implicitly {@link item_configurator_proto.AddCharactersRep.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {item_configurator_proto.IAddCharactersRep} message AddCharactersRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCharactersRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
            if (message.authorized != null && Object.hasOwnProperty.call(message, "authorized"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authorized);
            return writer;
        };

        /**
         * Encodes the specified AddCharactersRep message, length delimited. Does not implicitly {@link item_configurator_proto.AddCharactersRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {item_configurator_proto.IAddCharactersRep} message AddCharactersRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCharactersRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddCharactersRep message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.AddCharactersRep} AddCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCharactersRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.AddCharactersRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 2: {
                        message.authorized = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddCharactersRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.AddCharactersRep} AddCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCharactersRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddCharactersRep message.
         * @function verify
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddCharactersRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                if (typeof message.authorized !== "boolean")
                    return "authorized: boolean expected";
            return null;
        };

        /**
         * Creates an AddCharactersRep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.AddCharactersRep} AddCharactersRep
         */
        AddCharactersRep.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.AddCharactersRep)
                return object;
            var message = new $root.item_configurator_proto.AddCharactersRep();
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.authorized != null)
                message.authorized = Boolean(object.authorized);
            return message;
        };

        /**
         * Creates a plain object from an AddCharactersRep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {item_configurator_proto.AddCharactersRep} message AddCharactersRep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddCharactersRep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.refreshToken = "";
                object.authorized = false;
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                object.authorized = message.authorized;
            return object;
        };

        /**
         * Converts this AddCharactersRep to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.AddCharactersRep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddCharactersRep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddCharactersRep
         * @function getTypeUrl
         * @memberof item_configurator_proto.AddCharactersRep
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddCharactersRep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.AddCharactersRep";
        };

        return AddCharactersRep;
    })();

    item_configurator_proto.AddCharactersReq = (function() {

        /**
         * Properties of an AddCharactersReq.
         * @memberof item_configurator_proto
         * @interface IAddCharactersReq
         * @property {string|null} [name] AddCharactersReq name
         * @property {boolean|null} [authKind] AddCharactersReq authKind
         * @property {boolean|null} [authScope] AddCharactersReq authScope
         * @property {string|null} [refreshToken] AddCharactersReq refreshToken
         * @property {Array.<string>|null} [characters] AddCharactersReq characters
         */

        /**
         * Constructs a new AddCharactersReq.
         * @memberof item_configurator_proto
         * @classdesc Represents an AddCharactersReq.
         * @implements IAddCharactersReq
         * @constructor
         * @param {item_configurator_proto.IAddCharactersReq=} [properties] Properties to set
         */
        function AddCharactersReq(properties) {
            this.characters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddCharactersReq name.
         * @member {string} name
         * @memberof item_configurator_proto.AddCharactersReq
         * @instance
         */
        AddCharactersReq.prototype.name = "";

        /**
         * AddCharactersReq authKind.
         * @member {boolean} authKind
         * @memberof item_configurator_proto.AddCharactersReq
         * @instance
         */
        AddCharactersReq.prototype.authKind = false;

        /**
         * AddCharactersReq authScope.
         * @member {boolean} authScope
         * @memberof item_configurator_proto.AddCharactersReq
         * @instance
         */
        AddCharactersReq.prototype.authScope = false;

        /**
         * AddCharactersReq refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.AddCharactersReq
         * @instance
         */
        AddCharactersReq.prototype.refreshToken = "";

        /**
         * AddCharactersReq characters.
         * @member {Array.<string>} characters
         * @memberof item_configurator_proto.AddCharactersReq
         * @instance
         */
        AddCharactersReq.prototype.characters = $util.emptyArray;

        /**
         * Creates a new AddCharactersReq instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {item_configurator_proto.IAddCharactersReq=} [properties] Properties to set
         * @returns {item_configurator_proto.AddCharactersReq} AddCharactersReq instance
         */
        AddCharactersReq.create = function create(properties) {
            return new AddCharactersReq(properties);
        };

        /**
         * Encodes the specified AddCharactersReq message. Does not implicitly {@link item_configurator_proto.AddCharactersReq.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {item_configurator_proto.IAddCharactersReq} message AddCharactersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCharactersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.authKind != null && Object.hasOwnProperty.call(message, "authKind"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authKind);
            if (message.authScope != null && Object.hasOwnProperty.call(message, "authScope"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.authScope);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.refreshToken);
            if (message.characters != null && message.characters.length)
                for (var i = 0; i < message.characters.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.characters[i]);
            return writer;
        };

        /**
         * Encodes the specified AddCharactersReq message, length delimited. Does not implicitly {@link item_configurator_proto.AddCharactersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {item_configurator_proto.IAddCharactersReq} message AddCharactersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCharactersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddCharactersReq message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.AddCharactersReq} AddCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCharactersReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.AddCharactersReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.authKind = reader.bool();
                        break;
                    }
                case 3: {
                        message.authScope = reader.bool();
                        break;
                    }
                case 4: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.characters && message.characters.length))
                            message.characters = [];
                        message.characters.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddCharactersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.AddCharactersReq} AddCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCharactersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddCharactersReq message.
         * @function verify
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddCharactersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.authKind != null && message.hasOwnProperty("authKind"))
                if (typeof message.authKind !== "boolean")
                    return "authKind: boolean expected";
            if (message.authScope != null && message.hasOwnProperty("authScope"))
                if (typeof message.authScope !== "boolean")
                    return "authScope: boolean expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.characters != null && message.hasOwnProperty("characters")) {
                if (!Array.isArray(message.characters))
                    return "characters: array expected";
                for (var i = 0; i < message.characters.length; ++i)
                    if (!$util.isString(message.characters[i]))
                        return "characters: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AddCharactersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.AddCharactersReq} AddCharactersReq
         */
        AddCharactersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.AddCharactersReq)
                return object;
            var message = new $root.item_configurator_proto.AddCharactersReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.authKind != null)
                message.authKind = Boolean(object.authKind);
            if (object.authScope != null)
                message.authScope = Boolean(object.authScope);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.characters) {
                if (!Array.isArray(object.characters))
                    throw TypeError(".item_configurator_proto.AddCharactersReq.characters: array expected");
                message.characters = [];
                for (var i = 0; i < object.characters.length; ++i)
                    message.characters[i] = String(object.characters[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddCharactersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {item_configurator_proto.AddCharactersReq} message AddCharactersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddCharactersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.characters = [];
            if (options.defaults) {
                object.name = "";
                object.authKind = false;
                object.authScope = false;
                object.refreshToken = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.authKind != null && message.hasOwnProperty("authKind"))
                object.authKind = message.authKind;
            if (message.authScope != null && message.hasOwnProperty("authScope"))
                object.authScope = message.authScope;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.characters && message.characters.length) {
                object.characters = [];
                for (var j = 0; j < message.characters.length; ++j)
                    object.characters[j] = message.characters[j];
            }
            return object;
        };

        /**
         * Converts this AddCharactersReq to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.AddCharactersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddCharactersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddCharactersReq
         * @function getTypeUrl
         * @memberof item_configurator_proto.AddCharactersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddCharactersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.AddCharactersReq";
        };

        return AddCharactersReq;
    })();

    item_configurator_proto.DelCharactersRep = (function() {

        /**
         * Properties of a DelCharactersRep.
         * @memberof item_configurator_proto
         * @interface IDelCharactersRep
         * @property {string|null} [refreshToken] DelCharactersRep refreshToken
         * @property {boolean|null} [authorized] DelCharactersRep authorized
         */

        /**
         * Constructs a new DelCharactersRep.
         * @memberof item_configurator_proto
         * @classdesc Represents a DelCharactersRep.
         * @implements IDelCharactersRep
         * @constructor
         * @param {item_configurator_proto.IDelCharactersRep=} [properties] Properties to set
         */
        function DelCharactersRep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelCharactersRep refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.DelCharactersRep
         * @instance
         */
        DelCharactersRep.prototype.refreshToken = "";

        /**
         * DelCharactersRep authorized.
         * @member {boolean} authorized
         * @memberof item_configurator_proto.DelCharactersRep
         * @instance
         */
        DelCharactersRep.prototype.authorized = false;

        /**
         * Creates a new DelCharactersRep instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {item_configurator_proto.IDelCharactersRep=} [properties] Properties to set
         * @returns {item_configurator_proto.DelCharactersRep} DelCharactersRep instance
         */
        DelCharactersRep.create = function create(properties) {
            return new DelCharactersRep(properties);
        };

        /**
         * Encodes the specified DelCharactersRep message. Does not implicitly {@link item_configurator_proto.DelCharactersRep.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {item_configurator_proto.IDelCharactersRep} message DelCharactersRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelCharactersRep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
            if (message.authorized != null && Object.hasOwnProperty.call(message, "authorized"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authorized);
            return writer;
        };

        /**
         * Encodes the specified DelCharactersRep message, length delimited. Does not implicitly {@link item_configurator_proto.DelCharactersRep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {item_configurator_proto.IDelCharactersRep} message DelCharactersRep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelCharactersRep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelCharactersRep message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.DelCharactersRep} DelCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelCharactersRep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.DelCharactersRep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 2: {
                        message.authorized = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelCharactersRep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.DelCharactersRep} DelCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelCharactersRep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelCharactersRep message.
         * @function verify
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelCharactersRep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                if (typeof message.authorized !== "boolean")
                    return "authorized: boolean expected";
            return null;
        };

        /**
         * Creates a DelCharactersRep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.DelCharactersRep} DelCharactersRep
         */
        DelCharactersRep.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.DelCharactersRep)
                return object;
            var message = new $root.item_configurator_proto.DelCharactersRep();
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.authorized != null)
                message.authorized = Boolean(object.authorized);
            return message;
        };

        /**
         * Creates a plain object from a DelCharactersRep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {item_configurator_proto.DelCharactersRep} message DelCharactersRep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelCharactersRep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.refreshToken = "";
                object.authorized = false;
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.authorized != null && message.hasOwnProperty("authorized"))
                object.authorized = message.authorized;
            return object;
        };

        /**
         * Converts this DelCharactersRep to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.DelCharactersRep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelCharactersRep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DelCharactersRep
         * @function getTypeUrl
         * @memberof item_configurator_proto.DelCharactersRep
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DelCharactersRep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.DelCharactersRep";
        };

        return DelCharactersRep;
    })();

    item_configurator_proto.DelCharactersReq = (function() {

        /**
         * Properties of a DelCharactersReq.
         * @memberof item_configurator_proto
         * @interface IDelCharactersReq
         * @property {string|null} [name] DelCharactersReq name
         * @property {boolean|null} [authKind] DelCharactersReq authKind
         * @property {boolean|null} [authScope] DelCharactersReq authScope
         * @property {string|null} [refreshToken] DelCharactersReq refreshToken
         * @property {Array.<string>|null} [characters] DelCharactersReq characters
         */

        /**
         * Constructs a new DelCharactersReq.
         * @memberof item_configurator_proto
         * @classdesc Represents a DelCharactersReq.
         * @implements IDelCharactersReq
         * @constructor
         * @param {item_configurator_proto.IDelCharactersReq=} [properties] Properties to set
         */
        function DelCharactersReq(properties) {
            this.characters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelCharactersReq name.
         * @member {string} name
         * @memberof item_configurator_proto.DelCharactersReq
         * @instance
         */
        DelCharactersReq.prototype.name = "";

        /**
         * DelCharactersReq authKind.
         * @member {boolean} authKind
         * @memberof item_configurator_proto.DelCharactersReq
         * @instance
         */
        DelCharactersReq.prototype.authKind = false;

        /**
         * DelCharactersReq authScope.
         * @member {boolean} authScope
         * @memberof item_configurator_proto.DelCharactersReq
         * @instance
         */
        DelCharactersReq.prototype.authScope = false;

        /**
         * DelCharactersReq refreshToken.
         * @member {string} refreshToken
         * @memberof item_configurator_proto.DelCharactersReq
         * @instance
         */
        DelCharactersReq.prototype.refreshToken = "";

        /**
         * DelCharactersReq characters.
         * @member {Array.<string>} characters
         * @memberof item_configurator_proto.DelCharactersReq
         * @instance
         */
        DelCharactersReq.prototype.characters = $util.emptyArray;

        /**
         * Creates a new DelCharactersReq instance using the specified properties.
         * @function create
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {item_configurator_proto.IDelCharactersReq=} [properties] Properties to set
         * @returns {item_configurator_proto.DelCharactersReq} DelCharactersReq instance
         */
        DelCharactersReq.create = function create(properties) {
            return new DelCharactersReq(properties);
        };

        /**
         * Encodes the specified DelCharactersReq message. Does not implicitly {@link item_configurator_proto.DelCharactersReq.verify|verify} messages.
         * @function encode
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {item_configurator_proto.IDelCharactersReq} message DelCharactersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelCharactersReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.authKind != null && Object.hasOwnProperty.call(message, "authKind"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authKind);
            if (message.authScope != null && Object.hasOwnProperty.call(message, "authScope"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.authScope);
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.refreshToken);
            if (message.characters != null && message.characters.length)
                for (var i = 0; i < message.characters.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.characters[i]);
            return writer;
        };

        /**
         * Encodes the specified DelCharactersReq message, length delimited. Does not implicitly {@link item_configurator_proto.DelCharactersReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {item_configurator_proto.IDelCharactersReq} message DelCharactersReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelCharactersReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelCharactersReq message from the specified reader or buffer.
         * @function decode
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {item_configurator_proto.DelCharactersReq} DelCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelCharactersReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_configurator_proto.DelCharactersReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.authKind = reader.bool();
                        break;
                    }
                case 3: {
                        message.authScope = reader.bool();
                        break;
                    }
                case 4: {
                        message.refreshToken = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.characters && message.characters.length))
                            message.characters = [];
                        message.characters.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelCharactersReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {item_configurator_proto.DelCharactersReq} DelCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelCharactersReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelCharactersReq message.
         * @function verify
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelCharactersReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.authKind != null && message.hasOwnProperty("authKind"))
                if (typeof message.authKind !== "boolean")
                    return "authKind: boolean expected";
            if (message.authScope != null && message.hasOwnProperty("authScope"))
                if (typeof message.authScope !== "boolean")
                    return "authScope: boolean expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.characters != null && message.hasOwnProperty("characters")) {
                if (!Array.isArray(message.characters))
                    return "characters: array expected";
                for (var i = 0; i < message.characters.length; ++i)
                    if (!$util.isString(message.characters[i]))
                        return "characters: string[] expected";
            }
            return null;
        };

        /**
         * Creates a DelCharactersReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {item_configurator_proto.DelCharactersReq} DelCharactersReq
         */
        DelCharactersReq.fromObject = function fromObject(object) {
            if (object instanceof $root.item_configurator_proto.DelCharactersReq)
                return object;
            var message = new $root.item_configurator_proto.DelCharactersReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.authKind != null)
                message.authKind = Boolean(object.authKind);
            if (object.authScope != null)
                message.authScope = Boolean(object.authScope);
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.characters) {
                if (!Array.isArray(object.characters))
                    throw TypeError(".item_configurator_proto.DelCharactersReq.characters: array expected");
                message.characters = [];
                for (var i = 0; i < object.characters.length; ++i)
                    message.characters[i] = String(object.characters[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DelCharactersReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {item_configurator_proto.DelCharactersReq} message DelCharactersReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelCharactersReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.characters = [];
            if (options.defaults) {
                object.name = "";
                object.authKind = false;
                object.authScope = false;
                object.refreshToken = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.authKind != null && message.hasOwnProperty("authKind"))
                object.authKind = message.authKind;
            if (message.authScope != null && message.hasOwnProperty("authScope"))
                object.authScope = message.authScope;
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.characters && message.characters.length) {
                object.characters = [];
                for (var j = 0; j < message.characters.length; ++j)
                    object.characters[j] = message.characters[j];
            }
            return object;
        };

        /**
         * Converts this DelCharactersReq to JSON.
         * @function toJSON
         * @memberof item_configurator_proto.DelCharactersReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelCharactersReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DelCharactersReq
         * @function getTypeUrl
         * @memberof item_configurator_proto.DelCharactersReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DelCharactersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/item_configurator_proto.DelCharactersReq";
        };

        return DelCharactersReq;
    })();

    item_configurator_proto.ItemConfigurator = (function() {

        /**
         * Constructs a new ItemConfigurator service.
         * @memberof item_configurator_proto
         * @classdesc Represents an ItemConfigurator
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ItemConfigurator(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ItemConfigurator.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ItemConfigurator;

        /**
         * Creates new ItemConfigurator service using the specified rpc implementation.
         * @function create
         * @memberof item_configurator_proto.ItemConfigurator
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ItemConfigurator} RPC service. Useful where requests and/or responses are streamed.
         */
        ItemConfigurator.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#update}.
         * @memberof item_configurator_proto.ItemConfigurator
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item_configurator_proto.UpdateRep} [response] UpdateRep
         */

        /**
         * Calls Update.
         * @function update
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IUpdateReq} request UpdateReq message or plain object
         * @param {item_configurator_proto.ItemConfigurator.UpdateCallback} callback Node-style callback called with the error, if any, and UpdateRep
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ItemConfigurator.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.item_configurator_proto.UpdateReq, $root.item_configurator_proto.UpdateRep, request, callback);
        }, "name", { value: "Update" });

        /**
         * Calls Update.
         * @function update
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IUpdateReq} request UpdateReq message or plain object
         * @returns {Promise<item_configurator_proto.UpdateRep>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#list}.
         * @memberof item_configurator_proto.ItemConfigurator
         * @typedef ListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item_configurator_proto.ListRep} [response] ListRep
         */

        /**
         * Calls List.
         * @function list
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IListReq} request ListReq message or plain object
         * @param {item_configurator_proto.ItemConfigurator.ListCallback} callback Node-style callback called with the error, if any, and ListRep
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ItemConfigurator.prototype.list = function list(request, callback) {
            return this.rpcCall(list, $root.item_configurator_proto.ListReq, $root.item_configurator_proto.ListRep, request, callback);
        }, "name", { value: "List" });

        /**
         * Calls List.
         * @function list
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IListReq} request ListReq message or plain object
         * @returns {Promise<item_configurator_proto.ListRep>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#listCharacters}.
         * @memberof item_configurator_proto.ItemConfigurator
         * @typedef ListCharactersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item_configurator_proto.ListCharactersRep} [response] ListCharactersRep
         */

        /**
         * Calls ListCharacters.
         * @function listCharacters
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IListCharactersReq} request ListCharactersReq message or plain object
         * @param {item_configurator_proto.ItemConfigurator.ListCharactersCallback} callback Node-style callback called with the error, if any, and ListCharactersRep
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ItemConfigurator.prototype.listCharacters = function listCharacters(request, callback) {
            return this.rpcCall(listCharacters, $root.item_configurator_proto.ListCharactersReq, $root.item_configurator_proto.ListCharactersRep, request, callback);
        }, "name", { value: "ListCharacters" });

        /**
         * Calls ListCharacters.
         * @function listCharacters
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IListCharactersReq} request ListCharactersReq message or plain object
         * @returns {Promise<item_configurator_proto.ListCharactersRep>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#addCharacters}.
         * @memberof item_configurator_proto.ItemConfigurator
         * @typedef AddCharactersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item_configurator_proto.AddCharactersRep} [response] AddCharactersRep
         */

        /**
         * Calls AddCharacters.
         * @function addCharacters
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IAddCharactersReq} request AddCharactersReq message or plain object
         * @param {item_configurator_proto.ItemConfigurator.AddCharactersCallback} callback Node-style callback called with the error, if any, and AddCharactersRep
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ItemConfigurator.prototype.addCharacters = function addCharacters(request, callback) {
            return this.rpcCall(addCharacters, $root.item_configurator_proto.AddCharactersReq, $root.item_configurator_proto.AddCharactersRep, request, callback);
        }, "name", { value: "AddCharacters" });

        /**
         * Calls AddCharacters.
         * @function addCharacters
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IAddCharactersReq} request AddCharactersReq message or plain object
         * @returns {Promise<item_configurator_proto.AddCharactersRep>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#delCharacters}.
         * @memberof item_configurator_proto.ItemConfigurator
         * @typedef DelCharactersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {item_configurator_proto.DelCharactersRep} [response] DelCharactersRep
         */

        /**
         * Calls DelCharacters.
         * @function delCharacters
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IDelCharactersReq} request DelCharactersReq message or plain object
         * @param {item_configurator_proto.ItemConfigurator.DelCharactersCallback} callback Node-style callback called with the error, if any, and DelCharactersRep
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ItemConfigurator.prototype.delCharacters = function delCharacters(request, callback) {
            return this.rpcCall(delCharacters, $root.item_configurator_proto.DelCharactersReq, $root.item_configurator_proto.DelCharactersRep, request, callback);
        }, "name", { value: "DelCharacters" });

        /**
         * Calls DelCharacters.
         * @function delCharacters
         * @memberof item_configurator_proto.ItemConfigurator
         * @instance
         * @param {item_configurator_proto.IDelCharactersReq} request DelCharactersReq message or plain object
         * @returns {Promise<item_configurator_proto.DelCharactersRep>} Promise
         * @variation 2
         */

        return ItemConfigurator;
    })();

    return item_configurator_proto;
})();

module.exports = $root;
