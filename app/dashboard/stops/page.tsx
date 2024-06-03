
import {fetchStopPages, fetchStops} from "@/app/dashboard/stops/actions";
import {Typography} from "@/shared/components";
import StopView from "@/app/dashboard/stops/StopView";

export default async function Page({
        searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchStopPages(query)
    const stops = await fetchStops(query, currentPage)

    return (
        <>
            <div>
                <Typography variant="h5" bold>
                    Lineas
                </Typography>
                <StopView stops={stops} totalPages={totalPages} />
            </div>
        </>
    )
}
