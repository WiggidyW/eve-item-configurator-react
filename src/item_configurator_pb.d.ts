import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace item_configurator_proto. */
export namespace item_configurator_proto {

    /** Query enum. */
    enum Query {
        TRUE = 0,
        FALSE = 1,
        BOTH = 2
    }

    /** AuthKind enum. */
    enum AuthKind {
        READ = 0,
        WRITE = 1
    }

    /** Properties of a ListItem. */
    interface IListItem {

        /** ListItem typeId */
        typeId?: (number|null);

        /** ListItem enabled */
        enabled?: (boolean|null);

        /** ListItem jsonIdx */
        jsonIdx?: ({ [k: string]: number }|null);

        /** ListItem name */
        name?: (string|null);

        /** ListItem marketGroupIdx */
        marketGroupIdx?: (number|null);

        /** ListItem groupIdx */
        groupIdx?: (number|null);

        /** ListItem categoryIdx */
        categoryIdx?: (number|null);
    }

    /** Represents a ListItem. */
    class ListItem implements IListItem {

        /**
         * Constructs a new ListItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IListItem);

        /** ListItem typeId. */
        public typeId: number;

        /** ListItem enabled. */
        public enabled: boolean;

        /** ListItem jsonIdx. */
        public jsonIdx: { [k: string]: number };

        /** ListItem name. */
        public name: string;

        /** ListItem marketGroupIdx. */
        public marketGroupIdx: number;

        /** ListItem groupIdx. */
        public groupIdx: number;

        /** ListItem categoryIdx. */
        public categoryIdx: number;

        /**
         * Creates a new ListItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListItem instance
         */
        public static create(properties?: item_configurator_proto.IListItem): item_configurator_proto.ListItem;

        /**
         * Encodes the specified ListItem message. Does not implicitly {@link item_configurator_proto.ListItem.verify|verify} messages.
         * @param message ListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListItem message, length delimited. Does not implicitly {@link item_configurator_proto.ListItem.verify|verify} messages.
         * @param message ListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.ListItem;

        /**
         * Decodes a ListItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.ListItem;

        /**
         * Verifies a ListItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListItem
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.ListItem;

        /**
         * Creates a plain object from a ListItem message. Also converts values to other types if specified.
         * @param message ListItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.ListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListRep. */
    interface IListRep {

        /** ListRep items */
        items?: (item_configurator_proto.IListItem[]|null);

        /** ListRep json */
        json?: (string[]|null);

        /** ListRep marketGroups */
        marketGroups?: (string[]|null);

        /** ListRep groups */
        groups?: (string[]|null);

        /** ListRep categories */
        categories?: (string[]|null);

        /** ListRep refreshToken */
        refreshToken?: (string|null);

        /** ListRep authorized */
        authorized?: (boolean|null);
    }

    /** Represents a ListRep. */
    class ListRep implements IListRep {

        /**
         * Constructs a new ListRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IListRep);

        /** ListRep items. */
        public items: item_configurator_proto.IListItem[];

        /** ListRep json. */
        public json: string[];

        /** ListRep marketGroups. */
        public marketGroups: string[];

        /** ListRep groups. */
        public groups: string[];

        /** ListRep categories. */
        public categories: string[];

        /** ListRep refreshToken. */
        public refreshToken: string;

        /** ListRep authorized. */
        public authorized: boolean;

        /**
         * Creates a new ListRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRep instance
         */
        public static create(properties?: item_configurator_proto.IListRep): item_configurator_proto.ListRep;

        /**
         * Encodes the specified ListRep message. Does not implicitly {@link item_configurator_proto.ListRep.verify|verify} messages.
         * @param message ListRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IListRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRep message, length delimited. Does not implicitly {@link item_configurator_proto.ListRep.verify|verify} messages.
         * @param message ListRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IListRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.ListRep;

        /**
         * Decodes a ListRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.ListRep;

        /**
         * Verifies a ListRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRep
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.ListRep;

        /**
         * Creates a plain object from a ListRep message. Also converts values to other types if specified.
         * @param message ListRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.ListRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListRep
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListReq. */
    interface IListReq {

        /** ListReq name */
        name?: (string|null);

        /** ListReq refreshToken */
        refreshToken?: (string|null);

        /** ListReq includeEnabled */
        includeEnabled?: (item_configurator_proto.Query|null);

        /** ListReq includeConfigured */
        includeConfigured?: (item_configurator_proto.Query|null);

        /** ListReq includeJson */
        includeJson?: (boolean|null);

        /** ListReq language */
        language?: (string|null);

        /** ListReq includeName */
        includeName?: (boolean|null);

        /** ListReq includeMarketGroup */
        includeMarketGroup?: (boolean|null);

        /** ListReq includeGroup */
        includeGroup?: (boolean|null);

        /** ListReq includeCategory */
        includeCategory?: (boolean|null);
    }

    /** Represents a ListReq. */
    class ListReq implements IListReq {

        /**
         * Constructs a new ListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IListReq);

        /** ListReq name. */
        public name: string;

        /** ListReq refreshToken. */
        public refreshToken: string;

        /** ListReq includeEnabled. */
        public includeEnabled: item_configurator_proto.Query;

        /** ListReq includeConfigured. */
        public includeConfigured: item_configurator_proto.Query;

        /** ListReq includeJson. */
        public includeJson: boolean;

        /** ListReq language. */
        public language: string;

        /** ListReq includeName. */
        public includeName: boolean;

        /** ListReq includeMarketGroup. */
        public includeMarketGroup: boolean;

        /** ListReq includeGroup. */
        public includeGroup: boolean;

        /** ListReq includeCategory. */
        public includeCategory: boolean;

        /**
         * Creates a new ListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListReq instance
         */
        public static create(properties?: item_configurator_proto.IListReq): item_configurator_proto.ListReq;

        /**
         * Encodes the specified ListReq message. Does not implicitly {@link item_configurator_proto.ListReq.verify|verify} messages.
         * @param message ListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListReq message, length delimited. Does not implicitly {@link item_configurator_proto.ListReq.verify|verify} messages.
         * @param message ListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.ListReq;

        /**
         * Decodes a ListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.ListReq;

        /**
         * Verifies a ListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListReq
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.ListReq;

        /**
         * Creates a plain object from a ListReq message. Also converts values to other types if specified.
         * @param message ListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.ListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateItem. */
    interface IUpdateItem {

        /** UpdateItem typeId */
        typeId?: (number|null);

        /** UpdateItem enabled */
        enabled?: (boolean|null);

        /** UpdateItem jsonIdx */
        jsonIdx?: ({ [k: string]: number }|null);
    }

    /** Represents an UpdateItem. */
    class UpdateItem implements IUpdateItem {

        /**
         * Constructs a new UpdateItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IUpdateItem);

        /** UpdateItem typeId. */
        public typeId: number;

        /** UpdateItem enabled. */
        public enabled: boolean;

        /** UpdateItem jsonIdx. */
        public jsonIdx: { [k: string]: number };

        /**
         * Creates a new UpdateItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateItem instance
         */
        public static create(properties?: item_configurator_proto.IUpdateItem): item_configurator_proto.UpdateItem;

        /**
         * Encodes the specified UpdateItem message. Does not implicitly {@link item_configurator_proto.UpdateItem.verify|verify} messages.
         * @param message UpdateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IUpdateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateItem message, length delimited. Does not implicitly {@link item_configurator_proto.UpdateItem.verify|verify} messages.
         * @param message UpdateItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IUpdateItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.UpdateItem;

        /**
         * Decodes an UpdateItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.UpdateItem;

        /**
         * Verifies an UpdateItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateItem
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.UpdateItem;

        /**
         * Creates a plain object from an UpdateItem message. Also converts values to other types if specified.
         * @param message UpdateItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.UpdateItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRep. */
    interface IUpdateRep {

        /** UpdateRep refreshToken */
        refreshToken?: (string|null);

        /** UpdateRep authorized */
        authorized?: (boolean|null);
    }

    /** Represents an UpdateRep. */
    class UpdateRep implements IUpdateRep {

        /**
         * Constructs a new UpdateRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IUpdateRep);

        /** UpdateRep refreshToken. */
        public refreshToken: string;

        /** UpdateRep authorized. */
        public authorized: boolean;

        /**
         * Creates a new UpdateRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRep instance
         */
        public static create(properties?: item_configurator_proto.IUpdateRep): item_configurator_proto.UpdateRep;

        /**
         * Encodes the specified UpdateRep message. Does not implicitly {@link item_configurator_proto.UpdateRep.verify|verify} messages.
         * @param message UpdateRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IUpdateRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRep message, length delimited. Does not implicitly {@link item_configurator_proto.UpdateRep.verify|verify} messages.
         * @param message UpdateRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IUpdateRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.UpdateRep;

        /**
         * Decodes an UpdateRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.UpdateRep;

        /**
         * Verifies an UpdateRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRep
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.UpdateRep;

        /**
         * Creates a plain object from an UpdateRep message. Also converts values to other types if specified.
         * @param message UpdateRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.UpdateRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRep
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateReq. */
    interface IUpdateReq {

        /** UpdateReq name */
        name?: (string|null);

        /** UpdateReq refreshToken */
        refreshToken?: (string|null);

        /** UpdateReq items */
        items?: (item_configurator_proto.IUpdateItem[]|null);

        /** UpdateReq json */
        json?: (string[]|null);
    }

    /** Represents an UpdateReq. */
    class UpdateReq implements IUpdateReq {

        /**
         * Constructs a new UpdateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IUpdateReq);

        /** UpdateReq name. */
        public name: string;

        /** UpdateReq refreshToken. */
        public refreshToken: string;

        /** UpdateReq items. */
        public items: item_configurator_proto.IUpdateItem[];

        /** UpdateReq json. */
        public json: string[];

        /**
         * Creates a new UpdateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateReq instance
         */
        public static create(properties?: item_configurator_proto.IUpdateReq): item_configurator_proto.UpdateReq;

        /**
         * Encodes the specified UpdateReq message. Does not implicitly {@link item_configurator_proto.UpdateReq.verify|verify} messages.
         * @param message UpdateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateReq message, length delimited. Does not implicitly {@link item_configurator_proto.UpdateReq.verify|verify} messages.
         * @param message UpdateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.UpdateReq;

        /**
         * Decodes an UpdateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.UpdateReq;

        /**
         * Verifies an UpdateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateReq
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.UpdateReq;

        /**
         * Creates a plain object from an UpdateReq message. Also converts values to other types if specified.
         * @param message UpdateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.UpdateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListCharactersRep. */
    interface IListCharactersRep {

        /** ListCharactersRep characters */
        characters?: (string[]|null);

        /** ListCharactersRep refreshToken */
        refreshToken?: (string|null);

        /** ListCharactersRep authorized */
        authorized?: (boolean|null);
    }

    /** Represents a ListCharactersRep. */
    class ListCharactersRep implements IListCharactersRep {

        /**
         * Constructs a new ListCharactersRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IListCharactersRep);

        /** ListCharactersRep characters. */
        public characters: string[];

        /** ListCharactersRep refreshToken. */
        public refreshToken: string;

        /** ListCharactersRep authorized. */
        public authorized: boolean;

        /**
         * Creates a new ListCharactersRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListCharactersRep instance
         */
        public static create(properties?: item_configurator_proto.IListCharactersRep): item_configurator_proto.ListCharactersRep;

        /**
         * Encodes the specified ListCharactersRep message. Does not implicitly {@link item_configurator_proto.ListCharactersRep.verify|verify} messages.
         * @param message ListCharactersRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IListCharactersRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListCharactersRep message, length delimited. Does not implicitly {@link item_configurator_proto.ListCharactersRep.verify|verify} messages.
         * @param message ListCharactersRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IListCharactersRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListCharactersRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.ListCharactersRep;

        /**
         * Decodes a ListCharactersRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.ListCharactersRep;

        /**
         * Verifies a ListCharactersRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListCharactersRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListCharactersRep
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.ListCharactersRep;

        /**
         * Creates a plain object from a ListCharactersRep message. Also converts values to other types if specified.
         * @param message ListCharactersRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.ListCharactersRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListCharactersRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListCharactersRep
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListCharactersReq. */
    interface IListCharactersReq {

        /** ListCharactersReq name */
        name?: (string|null);

        /** ListCharactersReq authKind */
        authKind?: (boolean|null);

        /** ListCharactersReq authScope */
        authScope?: (boolean|null);

        /** ListCharactersReq refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a ListCharactersReq. */
    class ListCharactersReq implements IListCharactersReq {

        /**
         * Constructs a new ListCharactersReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IListCharactersReq);

        /** ListCharactersReq name. */
        public name: string;

        /** ListCharactersReq authKind. */
        public authKind: boolean;

        /** ListCharactersReq authScope. */
        public authScope: boolean;

        /** ListCharactersReq refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new ListCharactersReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListCharactersReq instance
         */
        public static create(properties?: item_configurator_proto.IListCharactersReq): item_configurator_proto.ListCharactersReq;

        /**
         * Encodes the specified ListCharactersReq message. Does not implicitly {@link item_configurator_proto.ListCharactersReq.verify|verify} messages.
         * @param message ListCharactersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IListCharactersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListCharactersReq message, length delimited. Does not implicitly {@link item_configurator_proto.ListCharactersReq.verify|verify} messages.
         * @param message ListCharactersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IListCharactersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListCharactersReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.ListCharactersReq;

        /**
         * Decodes a ListCharactersReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.ListCharactersReq;

        /**
         * Verifies a ListCharactersReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListCharactersReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListCharactersReq
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.ListCharactersReq;

        /**
         * Creates a plain object from a ListCharactersReq message. Also converts values to other types if specified.
         * @param message ListCharactersReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.ListCharactersReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListCharactersReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListCharactersReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddCharactersRep. */
    interface IAddCharactersRep {

        /** AddCharactersRep refreshToken */
        refreshToken?: (string|null);

        /** AddCharactersRep authorized */
        authorized?: (boolean|null);
    }

    /** Represents an AddCharactersRep. */
    class AddCharactersRep implements IAddCharactersRep {

        /**
         * Constructs a new AddCharactersRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IAddCharactersRep);

        /** AddCharactersRep refreshToken. */
        public refreshToken: string;

        /** AddCharactersRep authorized. */
        public authorized: boolean;

        /**
         * Creates a new AddCharactersRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddCharactersRep instance
         */
        public static create(properties?: item_configurator_proto.IAddCharactersRep): item_configurator_proto.AddCharactersRep;

        /**
         * Encodes the specified AddCharactersRep message. Does not implicitly {@link item_configurator_proto.AddCharactersRep.verify|verify} messages.
         * @param message AddCharactersRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IAddCharactersRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddCharactersRep message, length delimited. Does not implicitly {@link item_configurator_proto.AddCharactersRep.verify|verify} messages.
         * @param message AddCharactersRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IAddCharactersRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddCharactersRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.AddCharactersRep;

        /**
         * Decodes an AddCharactersRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.AddCharactersRep;

        /**
         * Verifies an AddCharactersRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddCharactersRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddCharactersRep
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.AddCharactersRep;

        /**
         * Creates a plain object from an AddCharactersRep message. Also converts values to other types if specified.
         * @param message AddCharactersRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.AddCharactersRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddCharactersRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddCharactersRep
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddCharactersReq. */
    interface IAddCharactersReq {

        /** AddCharactersReq name */
        name?: (string|null);

        /** AddCharactersReq authKind */
        authKind?: (boolean|null);

        /** AddCharactersReq authScope */
        authScope?: (boolean|null);

        /** AddCharactersReq refreshToken */
        refreshToken?: (string|null);

        /** AddCharactersReq characters */
        characters?: (string[]|null);
    }

    /** Represents an AddCharactersReq. */
    class AddCharactersReq implements IAddCharactersReq {

        /**
         * Constructs a new AddCharactersReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IAddCharactersReq);

        /** AddCharactersReq name. */
        public name: string;

        /** AddCharactersReq authKind. */
        public authKind: boolean;

        /** AddCharactersReq authScope. */
        public authScope: boolean;

        /** AddCharactersReq refreshToken. */
        public refreshToken: string;

        /** AddCharactersReq characters. */
        public characters: string[];

        /**
         * Creates a new AddCharactersReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddCharactersReq instance
         */
        public static create(properties?: item_configurator_proto.IAddCharactersReq): item_configurator_proto.AddCharactersReq;

        /**
         * Encodes the specified AddCharactersReq message. Does not implicitly {@link item_configurator_proto.AddCharactersReq.verify|verify} messages.
         * @param message AddCharactersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IAddCharactersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddCharactersReq message, length delimited. Does not implicitly {@link item_configurator_proto.AddCharactersReq.verify|verify} messages.
         * @param message AddCharactersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IAddCharactersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddCharactersReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.AddCharactersReq;

        /**
         * Decodes an AddCharactersReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.AddCharactersReq;

        /**
         * Verifies an AddCharactersReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddCharactersReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddCharactersReq
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.AddCharactersReq;

        /**
         * Creates a plain object from an AddCharactersReq message. Also converts values to other types if specified.
         * @param message AddCharactersReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.AddCharactersReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddCharactersReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddCharactersReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelCharactersRep. */
    interface IDelCharactersRep {

        /** DelCharactersRep refreshToken */
        refreshToken?: (string|null);

        /** DelCharactersRep authorized */
        authorized?: (boolean|null);
    }

    /** Represents a DelCharactersRep. */
    class DelCharactersRep implements IDelCharactersRep {

        /**
         * Constructs a new DelCharactersRep.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IDelCharactersRep);

        /** DelCharactersRep refreshToken. */
        public refreshToken: string;

        /** DelCharactersRep authorized. */
        public authorized: boolean;

        /**
         * Creates a new DelCharactersRep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelCharactersRep instance
         */
        public static create(properties?: item_configurator_proto.IDelCharactersRep): item_configurator_proto.DelCharactersRep;

        /**
         * Encodes the specified DelCharactersRep message. Does not implicitly {@link item_configurator_proto.DelCharactersRep.verify|verify} messages.
         * @param message DelCharactersRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IDelCharactersRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelCharactersRep message, length delimited. Does not implicitly {@link item_configurator_proto.DelCharactersRep.verify|verify} messages.
         * @param message DelCharactersRep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IDelCharactersRep, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelCharactersRep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.DelCharactersRep;

        /**
         * Decodes a DelCharactersRep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelCharactersRep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.DelCharactersRep;

        /**
         * Verifies a DelCharactersRep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelCharactersRep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelCharactersRep
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.DelCharactersRep;

        /**
         * Creates a plain object from a DelCharactersRep message. Also converts values to other types if specified.
         * @param message DelCharactersRep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.DelCharactersRep, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelCharactersRep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelCharactersRep
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelCharactersReq. */
    interface IDelCharactersReq {

        /** DelCharactersReq name */
        name?: (string|null);

        /** DelCharactersReq authKind */
        authKind?: (boolean|null);

        /** DelCharactersReq authScope */
        authScope?: (boolean|null);

        /** DelCharactersReq refreshToken */
        refreshToken?: (string|null);

        /** DelCharactersReq characters */
        characters?: (string[]|null);
    }

    /** Represents a DelCharactersReq. */
    class DelCharactersReq implements IDelCharactersReq {

        /**
         * Constructs a new DelCharactersReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_configurator_proto.IDelCharactersReq);

        /** DelCharactersReq name. */
        public name: string;

        /** DelCharactersReq authKind. */
        public authKind: boolean;

        /** DelCharactersReq authScope. */
        public authScope: boolean;

        /** DelCharactersReq refreshToken. */
        public refreshToken: string;

        /** DelCharactersReq characters. */
        public characters: string[];

        /**
         * Creates a new DelCharactersReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelCharactersReq instance
         */
        public static create(properties?: item_configurator_proto.IDelCharactersReq): item_configurator_proto.DelCharactersReq;

        /**
         * Encodes the specified DelCharactersReq message. Does not implicitly {@link item_configurator_proto.DelCharactersReq.verify|verify} messages.
         * @param message DelCharactersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_configurator_proto.IDelCharactersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelCharactersReq message, length delimited. Does not implicitly {@link item_configurator_proto.DelCharactersReq.verify|verify} messages.
         * @param message DelCharactersReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_configurator_proto.IDelCharactersReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelCharactersReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_configurator_proto.DelCharactersReq;

        /**
         * Decodes a DelCharactersReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelCharactersReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_configurator_proto.DelCharactersReq;

        /**
         * Verifies a DelCharactersReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelCharactersReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelCharactersReq
         */
        public static fromObject(object: { [k: string]: any }): item_configurator_proto.DelCharactersReq;

        /**
         * Creates a plain object from a DelCharactersReq message. Also converts values to other types if specified.
         * @param message DelCharactersReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_configurator_proto.DelCharactersReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelCharactersReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelCharactersReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents an ItemConfigurator */
    class ItemConfigurator extends $protobuf.rpc.Service {

        /**
         * Constructs a new ItemConfigurator service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ItemConfigurator service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ItemConfigurator;

        /**
         * Calls Update.
         * @param request UpdateReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateRep
         */
        public update(request: item_configurator_proto.IUpdateReq, callback: item_configurator_proto.ItemConfigurator.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateReq message or plain object
         * @returns Promise
         */
        public update(request: item_configurator_proto.IUpdateReq): Promise<item_configurator_proto.UpdateRep>;

        /**
         * Calls List.
         * @param request ListReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListRep
         */
        public list(request: item_configurator_proto.IListReq, callback: item_configurator_proto.ItemConfigurator.ListCallback): void;

        /**
         * Calls List.
         * @param request ListReq message or plain object
         * @returns Promise
         */
        public list(request: item_configurator_proto.IListReq): Promise<item_configurator_proto.ListRep>;

        /**
         * Calls ListCharacters.
         * @param request ListCharactersReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListCharactersRep
         */
        public listCharacters(request: item_configurator_proto.IListCharactersReq, callback: item_configurator_proto.ItemConfigurator.ListCharactersCallback): void;

        /**
         * Calls ListCharacters.
         * @param request ListCharactersReq message or plain object
         * @returns Promise
         */
        public listCharacters(request: item_configurator_proto.IListCharactersReq): Promise<item_configurator_proto.ListCharactersRep>;

        /**
         * Calls AddCharacters.
         * @param request AddCharactersReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AddCharactersRep
         */
        public addCharacters(request: item_configurator_proto.IAddCharactersReq, callback: item_configurator_proto.ItemConfigurator.AddCharactersCallback): void;

        /**
         * Calls AddCharacters.
         * @param request AddCharactersReq message or plain object
         * @returns Promise
         */
        public addCharacters(request: item_configurator_proto.IAddCharactersReq): Promise<item_configurator_proto.AddCharactersRep>;

        /**
         * Calls DelCharacters.
         * @param request DelCharactersReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DelCharactersRep
         */
        public delCharacters(request: item_configurator_proto.IDelCharactersReq, callback: item_configurator_proto.ItemConfigurator.DelCharactersCallback): void;

        /**
         * Calls DelCharacters.
         * @param request DelCharactersReq message or plain object
         * @returns Promise
         */
        public delCharacters(request: item_configurator_proto.IDelCharactersReq): Promise<item_configurator_proto.DelCharactersRep>;
    }

    namespace ItemConfigurator {

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#update}.
         * @param error Error, if any
         * @param [response] UpdateRep
         */
        type UpdateCallback = (error: (Error|null), response?: item_configurator_proto.UpdateRep) => void;

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#list}.
         * @param error Error, if any
         * @param [response] ListRep
         */
        type ListCallback = (error: (Error|null), response?: item_configurator_proto.ListRep) => void;

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#listCharacters}.
         * @param error Error, if any
         * @param [response] ListCharactersRep
         */
        type ListCharactersCallback = (error: (Error|null), response?: item_configurator_proto.ListCharactersRep) => void;

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#addCharacters}.
         * @param error Error, if any
         * @param [response] AddCharactersRep
         */
        type AddCharactersCallback = (error: (Error|null), response?: item_configurator_proto.AddCharactersRep) => void;

        /**
         * Callback as used by {@link item_configurator_proto.ItemConfigurator#delCharacters}.
         * @param error Error, if any
         * @param [response] DelCharactersRep
         */
        type DelCharactersCallback = (error: (Error|null), response?: item_configurator_proto.DelCharactersRep) => void;
    }
}
