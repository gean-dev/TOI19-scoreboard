<script lang="ts">
    import { allUsers } from "../data/user";
    import Arrow from "./arrow.svelte";

    let sortKey = "total";
    let reverse = false;
    let allUsersSize = allUsers.length;

    function getValue(user: any, sortKey: string = "total") {
        switch (sortKey) {
            case "hats":
                return user.hats;
            case "landlord":
                return user.landlord;
            case "train":
                return user.train;
            case "day1":
                return user.hats + user.landlord + user.train;
            case "company":
                return user.company;
            case "islandparty":
                return user.islandparty;
            case "matchingnum":
                return user.matchingnum;
            case "day2":
                return user.company + user.islandparty + user.matchingnum;
            default:
                return user.hats + user.landlord + user.train + user.company + user.islandparty + user.matchingnum;
        }
    }

    $: Users = allUsers.sort(
        (a, b) =>
            (getValue(b, sortKey) - getValue(a, sortKey)) * (reverse ? -1 : 1)
    );

    function RedToGreen(percent: number) {
        let r = Math.floor(255 * (1.25 - percent));
        let g = Math.floor(255 * (0.25 + percent));
        return `rgb(${r},${g},0)`;
    }

    function getRank(user: any, key: string) {
        let rank = 1;
        for (let i = 0; i < Users.length; i++) {
            if (getValue(Users[i], key) > getValue(user, key)) {
                rank++;
            }
        }
        return rank;
    }
</script>

<div class="scoreboard">
    <table
        class="border-separate border-spacing-0 rounded-lg border border-gray-500 mx-auto overflow-hidden text-center"
    >
        <thead>
            <tr>
                <th class="border-collapse border px-8 py-3 border-gray-500"
                    >rank</th
                >
                <th class="border-collapse border px-8 py-3 border-gray-500"
                    >name</th
                >
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "hats" ? !reverse : false),
                            (sortKey = "hats")
                        )}
                    >
                        <div class="flex flex-row">
                            hats
                            {#if sortKey === "hats"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "landlord" ? !reverse : false),
                            (sortKey = "landlord")
                        )}
                    >
                        <div class="flex flex-row">
                            landlord
                            {#if sortKey === "landlord"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "train" ? !reverse : false),
                            (sortKey = "train")
                        )}
                    >
                        <div class="flex flex-row">
                            train
                            {#if sortKey === "train"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "day1" ? !reverse : false),
                            (sortKey = "day1")
                        )}
                    >
                        <div class="flex flex-row">
                            day1
                            {#if sortKey === "day1"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "company" ? !reverse : false),
                            (sortKey = "company")
                        )}
                    >
                        <div class="flex flex-row">
                            company
                            {#if sortKey === "company"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "islandparty" ? !reverse : false),
                            (sortKey = "islandparty")
                        )}
                    >
                        <div class="flex flex-row">
                            islandparty
                            {#if sortKey === "islandparty"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "matchingnum" ? !reverse : false),
                            (sortKey = "matchingnum")
                        )}
                    >
                        <div class="flex flex-row">
                            matchingnum
                            {#if sortKey === "matchingnum"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "day2" ? !reverse : false),
                            (sortKey = "day2")
                        )}
                    >
                        <div class="flex flex-row">
                            day2
                            {#if sortKey === "day2"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
                <th class="border-collapse border px-8 py-3 border-gray-500">
                    <button
                        on:click={() => (
                            (reverse = sortKey === "total" ? !reverse : false),
                            (sortKey = "total")
                        )}
                    >
                        <div class="flex flex-row">
                            total
                            {#if sortKey === "total"}
                                <div class="my-auto mx-1">
                                    <Arrow ascending={reverse} />
                                </div>
                            {/if}
                        </div>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            {#each Users as user}
                <tr>
                    <td class="border-collapse border px-8 py-3 border-gray-500"
                        >{getRank(user, sortKey)}</td
                    >
                    <td
                        class="whitespace-nowrap border-collapse border px-8 py-3 border-gray-500 text-left"
                        >{user.name+" "+user.surname}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen(user.hats / 100)}">{user.hats}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen(user.landlord / 100)}">{user.landlord}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen(user.train / 100)}">{user.train}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen((user.hats + user.landlord + user.train) / 300)}">{Math.round((user.hats + user.landlord + user.train)*100)/100}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen(user.company / 100)}">{user.company}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen(user.islandparty / 100)}">{user.islandparty}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen(user.matchingnum / 100)}">{user.matchingnum}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen((user.company + user.islandparty + user.matchingnum) / 300)}">{Math.round((user.company + user.islandparty + user.matchingnum)*100)/100}</td
                    >
                    <td
                        class="border-collapse border px-8 py-3 border-gray-500 font-bold"
                        style="color: {RedToGreen((user.hats + user.landlord + user.train + user.company + user.islandparty + user.matchingnum) / 600)}">{Math.round((user.hats + user.landlord + user.train + user.company + user.islandparty + user.matchingnum)*100)/100}</td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>
