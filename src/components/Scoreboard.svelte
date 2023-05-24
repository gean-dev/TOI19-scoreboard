<script lang="ts">
  import allUsers from "../data/user.json";
  import Arrow from "./arrow.svelte";

  let sortKey = "total";
  let reverse = false;
  let allUsersSize = allUsers.length;

  function getValue(user: any, sortKey: string = "total") {
    switch (sortKey) {
      case "Merge":
        return user.merge;
      case "Explorer":
        return user.explorer;
      case "Jewelry":
        return user.jewelry;
      case "Day 1":
        return user.merge + user.explorer + user.jewelry;
      case "Energy":
        return user.energy;
      case "Phitsanulok":
        return user.phitsanulok;
      case "Range":
        return user.range;
      case "Day 2":
        return user.energy + user.phitsanulok + user.range;
      default:
        return (
          user.merge +
          user.explorer +
          user.jewelry +
          user.energy +
          user.phitsanulok +
          user.range
        );
    }
  }

  $: Users = allUsers.sort(
    (a, b) => (getValue(b, sortKey) - getValue(a, sortKey)) * (reverse ? -1 : 1)
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

  function getMedal(user: any) {
    let rank = getRank(user, "total");
    if (rank <= Math.round(allUsersSize / 12)) {
      return "🥇 ";
    } else if (rank <= Math.round(allUsersSize / 4)) {
      return "🥈 ";
    } else if (rank <= Math.round(allUsersSize / 2)) {
      return "🥉 ";
    } else {
      return "🍨 ";
    }
  }
</script>

<div class="scoreboard">
  <table
    class="border-separate border-spacing-0 rounded-lg border border-gray-500 mx-auto overflow-hidden text-center"
  >
    <thead>
      <tr>
        <th class="border-collapse border px-8 py-3 border-gray-500">Rank</th>
        <th class="border-collapse border px-8 py-3 border-gray-500">Name</th>
        <th class="border-collapse border px-8 py-3 border-gray-500">Centre</th>
        <!-- Merge -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Merge" ? !reverse : false),
              (sortKey = "Merge")
            )}
          >
            <div class="flex flex-row">
              Merge
              {#if sortKey === "Merge"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Explorer -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Explorer" ? !reverse : false),
              (sortKey = "Explorer")
            )}
          >
            <div class="flex flex-row">
              Explorer
              {#if sortKey === "Explorer"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Jewelry -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Jewelry" ? !reverse : false),
              (sortKey = "Jewelry")
            )}
          >
            <div class="flex flex-row">
              Jewelry
              {#if sortKey === "Jewelry"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Day 1 -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Day 1" ? !reverse : false),
              (sortKey = "Day 1")
            )}
          >
            <div class="whitespace-nowrap flex flex-row">
              Day 1
              {#if sortKey === "Day 1"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Energy -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Energy" ? !reverse : false),
              (sortKey = "Energy")
            )}
          >
            <div class="flex flex-row">
              Energy
              {#if sortKey === "Energy"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Phitsanulok -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Phitsanulok" ? !reverse : false),
              (sortKey = "Phitsanulok")
            )}
          >
            <div class="flex flex-row">
              Phitsanulok
              {#if sortKey === "Phitsanulok"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Range -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Range" ? !reverse : false),
              (sortKey = "Range")
            )}
          >
            <div class="flex flex-row">
              Range
              {#if sortKey === "Range"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Day 2 -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Day 2" ? !reverse : false),
              (sortKey = "Day 2")
            )}
          >
            <div class="whitespace-nowrap flex flex-row">
              Day 2
              {#if sortKey === "Day 2"}
                <div class="my-auto mx-1">
                  <Arrow ascending={reverse} />
                </div>
              {/if}
            </div>
          </button>
        </th>
        <!-- Total -->
        <th class="border-collapse border px-8 py-3 border-gray-500">
          <button
            on:click={() => (
              (reverse = sortKey === "Total" ? !reverse : false),
              (sortKey = "Total")
            )}
          >
            <div class="flex flex-row">
              Total
              {#if sortKey === "Total"}
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
            >{getMedal(user) + " " + user.name}</td
          >
          <td class="border-collapse border px-8 py-3 border-gray-500 text-left"
            >{user.center}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(user.merge / 100)}">{user.merge}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(user.explorer / 100)}">{user.explorer}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(user.jewelry / 100)}">{user.jewelry}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(
              (user.merge + user.explorer + user.jewelry) / 300
            )}"
            >{Math.round((user.merge + user.explorer + user.jewelry) * 100) /
              100}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(user.energy / 100)}">{user.energy}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(user.phitsanulok / 100)}"
            >{user.phitsanulok}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(user.range / 100)}">{user.range}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(
              (user.energy + user.phitsanulok + user.range) / 300
            )}"
            >{Math.round((user.energy + user.phitsanulok + user.range) * 100) /
              100}</td
          >
          <td
            class="border-collapse border px-8 py-3 border-gray-500 font-bold"
            style="color: {RedToGreen(
              (user.merge +
                user.explorer +
                user.jewelry +
                user.energy +
                user.phitsanulok +
                user.range) /
                600
            )}"
            >{Math.round(
              (user.merge +
                user.explorer +
                user.jewelry +
                user.energy +
                user.phitsanulok +
                user.range) *
                100
            ) / 100}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
