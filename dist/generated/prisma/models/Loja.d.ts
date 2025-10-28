import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LojaModel = runtime.Types.Result.DefaultSelection<Prisma.$LojaPayload>;
export type AggregateLoja = {
    _count: LojaCountAggregateOutputType | null;
    _avg: LojaAvgAggregateOutputType | null;
    _sum: LojaSumAggregateOutputType | null;
    _min: LojaMinAggregateOutputType | null;
    _max: LojaMaxAggregateOutputType | null;
};
export type LojaAvgAggregateOutputType = {
    id: number | null;
    UsuarioId: number | null;
};
export type LojaSumAggregateOutputType = {
    id: number | null;
    UsuarioId: number | null;
};
export type LojaMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    descricao: string | null;
    logo_url: string | null;
    banner_url: string | null;
    sticker_url: string | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
    UsuarioId: number | null;
};
export type LojaMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    descricao: string | null;
    logo_url: string | null;
    banner_url: string | null;
    sticker_url: string | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
    UsuarioId: number | null;
};
export type LojaCountAggregateOutputType = {
    id: number;
    nome: number;
    descricao: number;
    logo_url: number;
    banner_url: number;
    sticker_url: number;
    criado_em: number;
    atualizado_em: number;
    UsuarioId: number;
    _all: number;
};
export type LojaAvgAggregateInputType = {
    id?: true;
    UsuarioId?: true;
};
export type LojaSumAggregateInputType = {
    id?: true;
    UsuarioId?: true;
};
export type LojaMinAggregateInputType = {
    id?: true;
    nome?: true;
    descricao?: true;
    logo_url?: true;
    banner_url?: true;
    sticker_url?: true;
    criado_em?: true;
    atualizado_em?: true;
    UsuarioId?: true;
};
export type LojaMaxAggregateInputType = {
    id?: true;
    nome?: true;
    descricao?: true;
    logo_url?: true;
    banner_url?: true;
    sticker_url?: true;
    criado_em?: true;
    atualizado_em?: true;
    UsuarioId?: true;
};
export type LojaCountAggregateInputType = {
    id?: true;
    nome?: true;
    descricao?: true;
    logo_url?: true;
    banner_url?: true;
    sticker_url?: true;
    criado_em?: true;
    atualizado_em?: true;
    UsuarioId?: true;
    _all?: true;
};
export type LojaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LojaWhereInput;
    orderBy?: Prisma.LojaOrderByWithRelationInput | Prisma.LojaOrderByWithRelationInput[];
    cursor?: Prisma.LojaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LojaCountAggregateInputType;
    _avg?: LojaAvgAggregateInputType;
    _sum?: LojaSumAggregateInputType;
    _min?: LojaMinAggregateInputType;
    _max?: LojaMaxAggregateInputType;
};
export type GetLojaAggregateType<T extends LojaAggregateArgs> = {
    [P in keyof T & keyof AggregateLoja]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoja[P]> : Prisma.GetScalarType<T[P], AggregateLoja[P]>;
};
export type LojaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LojaWhereInput;
    orderBy?: Prisma.LojaOrderByWithAggregationInput | Prisma.LojaOrderByWithAggregationInput[];
    by: Prisma.LojaScalarFieldEnum[] | Prisma.LojaScalarFieldEnum;
    having?: Prisma.LojaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LojaCountAggregateInputType | true;
    _avg?: LojaAvgAggregateInputType;
    _sum?: LojaSumAggregateInputType;
    _min?: LojaMinAggregateInputType;
    _max?: LojaMaxAggregateInputType;
};
export type LojaGroupByOutputType = {
    id: number;
    nome: string;
    descricao: string;
    logo_url: string;
    banner_url: string;
    sticker_url: string;
    criado_em: Date;
    atualizado_em: Date;
    UsuarioId: number;
    _count: LojaCountAggregateOutputType | null;
    _avg: LojaAvgAggregateOutputType | null;
    _sum: LojaSumAggregateOutputType | null;
    _min: LojaMinAggregateOutputType | null;
    _max: LojaMaxAggregateOutputType | null;
};
type GetLojaGroupByPayload<T extends LojaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LojaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LojaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LojaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LojaGroupByOutputType[P]>;
}>>;
export type LojaWhereInput = {
    AND?: Prisma.LojaWhereInput | Prisma.LojaWhereInput[];
    OR?: Prisma.LojaWhereInput[];
    NOT?: Prisma.LojaWhereInput | Prisma.LojaWhereInput[];
    id?: Prisma.IntFilter<"Loja"> | number;
    nome?: Prisma.StringFilter<"Loja"> | string;
    descricao?: Prisma.StringFilter<"Loja"> | string;
    logo_url?: Prisma.StringFilter<"Loja"> | string;
    banner_url?: Prisma.StringFilter<"Loja"> | string;
    sticker_url?: Prisma.StringFilter<"Loja"> | string;
    criado_em?: Prisma.DateTimeFilter<"Loja"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Loja"> | Date | string;
    UsuarioId?: Prisma.IntFilter<"Loja"> | number;
};
export type LojaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    sticker_url?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
};
export type LojaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LojaWhereInput | Prisma.LojaWhereInput[];
    OR?: Prisma.LojaWhereInput[];
    NOT?: Prisma.LojaWhereInput | Prisma.LojaWhereInput[];
    nome?: Prisma.StringFilter<"Loja"> | string;
    descricao?: Prisma.StringFilter<"Loja"> | string;
    logo_url?: Prisma.StringFilter<"Loja"> | string;
    banner_url?: Prisma.StringFilter<"Loja"> | string;
    sticker_url?: Prisma.StringFilter<"Loja"> | string;
    criado_em?: Prisma.DateTimeFilter<"Loja"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Loja"> | Date | string;
    UsuarioId?: Prisma.IntFilter<"Loja"> | number;
}, "id">;
export type LojaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    sticker_url?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
    _count?: Prisma.LojaCountOrderByAggregateInput;
    _avg?: Prisma.LojaAvgOrderByAggregateInput;
    _max?: Prisma.LojaMaxOrderByAggregateInput;
    _min?: Prisma.LojaMinOrderByAggregateInput;
    _sum?: Prisma.LojaSumOrderByAggregateInput;
};
export type LojaScalarWhereWithAggregatesInput = {
    AND?: Prisma.LojaScalarWhereWithAggregatesInput | Prisma.LojaScalarWhereWithAggregatesInput[];
    OR?: Prisma.LojaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LojaScalarWhereWithAggregatesInput | Prisma.LojaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Loja"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Loja"> | string;
    descricao?: Prisma.StringWithAggregatesFilter<"Loja"> | string;
    logo_url?: Prisma.StringWithAggregatesFilter<"Loja"> | string;
    banner_url?: Prisma.StringWithAggregatesFilter<"Loja"> | string;
    sticker_url?: Prisma.StringWithAggregatesFilter<"Loja"> | string;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"Loja"> | Date | string;
    atualizado_em?: Prisma.DateTimeWithAggregatesFilter<"Loja"> | Date | string;
    UsuarioId?: Prisma.IntWithAggregatesFilter<"Loja"> | number;
};
export type LojaCreateInput = {
    nome: string;
    descricao: string;
    logo_url: string;
    banner_url: string;
    sticker_url: string;
    criado_em?: Date | string;
    atualizado_em?: Date | string;
    UsuarioId: number;
};
export type LojaUncheckedCreateInput = {
    id?: number;
    nome: string;
    descricao: string;
    logo_url: string;
    banner_url: string;
    sticker_url: string;
    criado_em?: Date | string;
    atualizado_em?: Date | string;
    UsuarioId: number;
};
export type LojaUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    logo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    banner_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sticker_url?: Prisma.StringFieldUpdateOperationsInput | string;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UsuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LojaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    logo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    banner_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sticker_url?: Prisma.StringFieldUpdateOperationsInput | string;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UsuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LojaCreateManyInput = {
    id?: number;
    nome: string;
    descricao: string;
    logo_url: string;
    banner_url: string;
    sticker_url: string;
    criado_em?: Date | string;
    atualizado_em?: Date | string;
    UsuarioId: number;
};
export type LojaUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    logo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    banner_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sticker_url?: Prisma.StringFieldUpdateOperationsInput | string;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UsuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LojaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    logo_url?: Prisma.StringFieldUpdateOperationsInput | string;
    banner_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sticker_url?: Prisma.StringFieldUpdateOperationsInput | string;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UsuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LojaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    sticker_url?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
};
export type LojaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
};
export type LojaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    sticker_url?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
};
export type LojaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    sticker_url?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
};
export type LojaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    UsuarioId?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LojaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    sticker_url?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    UsuarioId?: boolean;
}, ExtArgs["result"]["loja"]>;
export type LojaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    sticker_url?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    UsuarioId?: boolean;
}, ExtArgs["result"]["loja"]>;
export type LojaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    sticker_url?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    UsuarioId?: boolean;
}, ExtArgs["result"]["loja"]>;
export type LojaSelectScalar = {
    id?: boolean;
    nome?: boolean;
    descricao?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    sticker_url?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    UsuarioId?: boolean;
};
export type LojaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "descricao" | "logo_url" | "banner_url" | "sticker_url" | "criado_em" | "atualizado_em" | "UsuarioId", ExtArgs["result"]["loja"]>;
export type $LojaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Loja";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        descricao: string;
        logo_url: string;
        banner_url: string;
        sticker_url: string;
        criado_em: Date;
        atualizado_em: Date;
        UsuarioId: number;
    }, ExtArgs["result"]["loja"]>;
    composites: {};
};
export type LojaGetPayload<S extends boolean | null | undefined | LojaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LojaPayload, S>;
export type LojaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LojaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LojaCountAggregateInputType | true;
};
export interface LojaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Loja'];
        meta: {
            name: 'Loja';
        };
    };
    findUnique<T extends LojaFindUniqueArgs>(args: Prisma.SelectSubset<T, LojaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LojaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LojaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LojaFindFirstArgs>(args?: Prisma.SelectSubset<T, LojaFindFirstArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LojaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LojaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LojaFindManyArgs>(args?: Prisma.SelectSubset<T, LojaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LojaCreateArgs>(args: Prisma.SelectSubset<T, LojaCreateArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LojaCreateManyArgs>(args?: Prisma.SelectSubset<T, LojaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LojaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LojaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LojaDeleteArgs>(args: Prisma.SelectSubset<T, LojaDeleteArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LojaUpdateArgs>(args: Prisma.SelectSubset<T, LojaUpdateArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LojaDeleteManyArgs>(args?: Prisma.SelectSubset<T, LojaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LojaUpdateManyArgs>(args: Prisma.SelectSubset<T, LojaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LojaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LojaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LojaUpsertArgs>(args: Prisma.SelectSubset<T, LojaUpsertArgs<ExtArgs>>): Prisma.Prisma__LojaClient<runtime.Types.Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LojaCountArgs>(args?: Prisma.Subset<T, LojaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LojaCountAggregateOutputType> : number>;
    aggregate<T extends LojaAggregateArgs>(args: Prisma.Subset<T, LojaAggregateArgs>): Prisma.PrismaPromise<GetLojaAggregateType<T>>;
    groupBy<T extends LojaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LojaGroupByArgs['orderBy'];
    } : {
        orderBy?: LojaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LojaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLojaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LojaFieldRefs;
}
export interface Prisma__LojaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LojaFieldRefs {
    readonly id: Prisma.FieldRef<"Loja", 'Int'>;
    readonly nome: Prisma.FieldRef<"Loja", 'String'>;
    readonly descricao: Prisma.FieldRef<"Loja", 'String'>;
    readonly logo_url: Prisma.FieldRef<"Loja", 'String'>;
    readonly banner_url: Prisma.FieldRef<"Loja", 'String'>;
    readonly sticker_url: Prisma.FieldRef<"Loja", 'String'>;
    readonly criado_em: Prisma.FieldRef<"Loja", 'DateTime'>;
    readonly atualizado_em: Prisma.FieldRef<"Loja", 'DateTime'>;
    readonly UsuarioId: Prisma.FieldRef<"Loja", 'Int'>;
}
export type LojaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where: Prisma.LojaWhereUniqueInput;
};
export type LojaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where: Prisma.LojaWhereUniqueInput;
};
export type LojaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where?: Prisma.LojaWhereInput;
    orderBy?: Prisma.LojaOrderByWithRelationInput | Prisma.LojaOrderByWithRelationInput[];
    cursor?: Prisma.LojaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LojaScalarFieldEnum | Prisma.LojaScalarFieldEnum[];
};
export type LojaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where?: Prisma.LojaWhereInput;
    orderBy?: Prisma.LojaOrderByWithRelationInput | Prisma.LojaOrderByWithRelationInput[];
    cursor?: Prisma.LojaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LojaScalarFieldEnum | Prisma.LojaScalarFieldEnum[];
};
export type LojaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where?: Prisma.LojaWhereInput;
    orderBy?: Prisma.LojaOrderByWithRelationInput | Prisma.LojaOrderByWithRelationInput[];
    cursor?: Prisma.LojaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LojaScalarFieldEnum | Prisma.LojaScalarFieldEnum[];
};
export type LojaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LojaCreateInput, Prisma.LojaUncheckedCreateInput>;
};
export type LojaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LojaCreateManyInput | Prisma.LojaCreateManyInput[];
};
export type LojaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    data: Prisma.LojaCreateManyInput | Prisma.LojaCreateManyInput[];
};
export type LojaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LojaUpdateInput, Prisma.LojaUncheckedUpdateInput>;
    where: Prisma.LojaWhereUniqueInput;
};
export type LojaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LojaUpdateManyMutationInput, Prisma.LojaUncheckedUpdateManyInput>;
    where?: Prisma.LojaWhereInput;
    limit?: number;
};
export type LojaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LojaUpdateManyMutationInput, Prisma.LojaUncheckedUpdateManyInput>;
    where?: Prisma.LojaWhereInput;
    limit?: number;
};
export type LojaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where: Prisma.LojaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LojaCreateInput, Prisma.LojaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LojaUpdateInput, Prisma.LojaUncheckedUpdateInput>;
};
export type LojaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
    where: Prisma.LojaWhereUniqueInput;
};
export type LojaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LojaWhereInput;
    limit?: number;
};
export type LojaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LojaSelect<ExtArgs> | null;
    omit?: Prisma.LojaOmit<ExtArgs> | null;
};
export {};
