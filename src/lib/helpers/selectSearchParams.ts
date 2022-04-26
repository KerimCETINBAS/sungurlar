export default (url : URL, ...params: string[] ) : Record<string, unknown| undefined> =>
        params.reduce<Record<string, unknown | undefined>>((qs, param:string) =>( {...qs,[param]: url.searchParams.getAll(param) || undefined}), {} );
