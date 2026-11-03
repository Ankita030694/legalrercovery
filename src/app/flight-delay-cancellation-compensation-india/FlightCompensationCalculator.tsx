"use client";

import React, { useState } from "react";

type IssueCategory = "denied_boarding" | "cancellation" | "delay";

export default function FlightCompensationCalculator() {
  const [category, setCategory] = useState<IssueCategory>("denied_boarding");
  const [basicFare, setBasicFare] = useState<number>(3500);
  const [fuelCharge, setFuelCharge] = useState<number>(850);

  // Denied Boarding state
  const [deniedRerouteOption, setDeniedRerouteOption] = useState<"within_1h" | "within_24h" | "after_24h_or_declined">("within_24h");

  // Cancellation state
  const [cancellationBlockTime, setCancellationBlockTime] = useState<"under_1h" | "1h_to_2h" | "over_2h">("over_2h");
  const [cancellationNoticeGiven, setCancellationNoticeGiven] = useState<"none_or_under_24h" | "over_24h">("none_or_under_24h");

  // Delay state
  const [delayFlightDuration, setDelayFlightDuration] = useState<"under_2_5h" | "2_5h_to_5h" | "over_5h">("under_2_5h");
  const [delayHours, setDelayHours] = useState<number>(4);
  const [isNightFlight, setIsNightFlight] = useState<boolean>(false);

  const totalBasePlusFuel = Math.max(0, basicFare) + Math.max(0, fuelCharge);

  // Calculate results
  let compensationAmount = 0;
  let entitlementSummary = "";
  let legalClause = "";
  let refundStatus = "";
  let amenitiesStatus = "";

  if (category === "denied_boarding") {
    legalClause = "DGCA CAR Section 3, Series M, Part IV, Paragraph 3.2 (Denied Boarding)";
    if (deniedRerouteOption === "within_1h") {
      compensationAmount = 0;
      entitlementSummary = "No monetary compensation applicable because alternate flight was scheduled within 1 hour of original departure.";
      refundStatus = "Ticket remains valid on alternate flight.";
      amenitiesStatus = "Complimentary airport care if boarding delay occurs.";
    } else if (deniedRerouteOption === "within_24h") {
      const calculated = totalBasePlusFuel * 2;
      compensationAmount = Math.min(calculated, 10000);
      entitlementSummary = `200% of (Basic Fare + Fuel Charge) capped at ₹10,000. Total entitlement: ₹${compensationAmount.toLocaleString("en-IN")}.`;
      refundStatus = "Alternate flight provided at zero surcharge.";
      amenitiesStatus = "Free meals and refreshments during waiting interval.";
    } else {
      const calculated = totalBasePlusFuel * 4;
      compensationAmount = Math.min(calculated, 20000);
      entitlementSummary = `400% of (Basic Fare + Fuel Charge) capped at ₹20,000. Total entitlement: ₹${compensationAmount.toLocaleString("en-IN")}.`;
      refundStatus = "FULL 100% ticket refund mandated if passenger declines alternate flight.";
      amenitiesStatus = "Hotel accommodation, airport transfers and meals if alternate travel is on following day.";
    }
  } else if (category === "cancellation") {
    legalClause = "DGCA CAR Section 3, Series M, Part IV, Paragraph 3.3 (Flight Cancellation)";
    if (cancellationNoticeGiven === "over_24h") {
      compensationAmount = 0;
      entitlementSummary = "No cash penalty slab if notified more than 24 hours prior and alternate flight or full refund provided.";
      refundStatus = "100% full ticket refund OR alternate flight to destination without surcharge.";
      amenitiesStatus = "None required if notified at least 24 hours in advance.";
    } else {
      if (cancellationBlockTime === "under_1h") {
        compensationAmount = Math.min(5000, totalBasePlusFuel);
        entitlementSummary = `Slab A: Block time up to 1 hour = Lesser of ₹5,000 or (Basic Fare + Fuel Surcharge) = ₹${compensationAmount.toLocaleString("en-IN")}.`;
      } else if (cancellationBlockTime === "1h_to_2h") {
        compensationAmount = Math.min(7500, totalBasePlusFuel);
        entitlementSummary = `Slab B: Block time 1 to 2 hours = Lesser of ₹7,500 or (Basic Fare + Fuel Surcharge) = ₹${compensationAmount.toLocaleString("en-IN")}.`;
      } else {
        compensationAmount = Math.min(10000, totalBasePlusFuel);
        entitlementSummary = `Slab C: Block time exceeding 2 hours = Lesser of ₹10,000 or (Basic Fare + Fuel Surcharge) = ₹${compensationAmount.toLocaleString("en-IN")}.`;
      }
      refundStatus = "PLUS mandatory choice of: (1) Full 100% ticket refund, OR (2) Free alternate flight.";
      amenitiesStatus = "Free meals/refreshments if waiting at airport, plus hotel stay if next flight is next day.";
    }
  } else {
    legalClause = "DGCA CAR Section 3, Series M, Part IV, Paragraph 3.4 (Flight Delays)";
    compensationAmount = 0; // Delays mandate care, reroute or refund rather than fixed cash penalty slabs
    let qualifiesForMeals = false;

    if (delayFlightDuration === "under_2_5h" && delayHours >= 2) qualifiesForMeals = true;
    if (delayFlightDuration === "2_5h_to_5h" && delayHours >= 3) qualifiesForMeals = true;
    if (delayFlightDuration === "over_5h" && delayHours >= 4) qualifiesForMeals = true;

    if (delayHours >= 24 || (isNightFlight && delayHours >= 6)) {
      amenitiesStatus = "Mandatory complimentary hotel accommodation, free airport transfers, and full meal service.";
    } else if (qualifiesForMeals) {
      amenitiesStatus = "Mandatory complimentary meals and refreshments commensurate with wait time.";
    } else {
      amenitiesStatus = "Normal flight status monitoring. Care threshold not yet crossed.";
    }

    if (delayHours >= 6) {
      refundStatus = "Passenger has absolute statutory right to cancel for a 100% FULL REFUND or request alternate flight within 6 hours.";
      entitlementSummary = "Extended delay entitlement: 100% Full Ticket Refund OR alternate flight + Hotel stay (if night or >24 hrs).";
    } else {
      refundStatus = "Standard booking active; refund depends on fare terms unless carrier cancels.";
      entitlementSummary = qualifiesForMeals
        ? "Airline is legally required to provide free meals and refreshments at the departure terminal."
        : "Standard boarding wait; monitor delay threshold.";
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 my-8">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-red-600 mb-1">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          Interactive DGCA Calculator
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Calculate Your Flight Compensation &amp; Care Entitlements
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Compute statutory compensation slabs, refund rights, and mandatory care under DGCA CAR Section 3 Series M Part IV.
        </p>
      </div>

      {/* Category selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
        <button
          type="button"
          onClick={() => setCategory("denied_boarding")}
          className={`py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all cursor-pointer ${
            category === "denied_boarding"
              ? "bg-[#0F172A] text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          1. Denied Boarding
        </button>
        <button
          type="button"
          onClick={() => setCategory("cancellation")}
          className={`py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all cursor-pointer ${
            category === "cancellation"
              ? "bg-[#0F172A] text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          2. Flight Cancellation
        </button>
        <button
          type="button"
          onClick={() => setCategory("delay")}
          className={`py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all cursor-pointer ${
            category === "delay"
              ? "bg-[#0F172A] text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          3. Flight Delay &amp; Care
        </button>
      </div>

      {/* Fare inputs (used for Denied Boarding & Cancellation) */}
      {category !== "delay" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              One-Way Basic Fare (₹)
            </label>
            <input
              type="number"
              min="0"
              step="100"
              value={basicFare}
              onChange={(e) => setBasicFare(Number(e.target.value) || 0)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-900 bg-white font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
              placeholder="e.g. 3500"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">Found as &quot;Basic Fare&quot; on your e-ticket invoice.</span>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Airline Fuel Charge / Surcharge (₹)
            </label>
            <input
              type="number"
              min="0"
              step="50"
              value={fuelCharge}
              onChange={(e) => setFuelCharge(Number(e.target.value) || 0)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-900 bg-white font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
              placeholder="e.g. 850"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">Usually listed as &quot;YQ&quot; or &quot;Fuel Surcharge&quot;.</span>
          </div>
        </div>
      )}

      {/* Conditional settings by category */}
      {category === "denied_boarding" && (
        <div className="space-y-4 mb-6">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            When was the alternate flight offered by the airline?
          </label>
          <div className="grid grid-cols-1 gap-2.5">
            <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
              <input
                type="radio"
                name="deniedOption"
                checked={deniedRerouteOption === "within_1h"}
                onChange={() => setDeniedRerouteOption("within_1h")}
                className="mt-1 text-red-600 focus:ring-red-500"
              />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-slate-900 block">Within 1 hour of original departure</span>
                <span className="text-slate-600">No cash compensation due; airline must reroute promptly.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
              <input
                type="radio"
                name="deniedOption"
                checked={deniedRerouteOption === "within_24h"}
                onChange={() => setDeniedRerouteOption("within_24h")}
                className="mt-1 text-red-600 focus:ring-red-500"
              />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-slate-900 block">Within 24 hours of original departure</span>
                <span className="text-slate-600">Entitled to 200% of (Basic + Fuel), capped at ₹10,000 + free meals.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
              <input
                type="radio"
                name="deniedOption"
                checked={deniedRerouteOption === "after_24h_or_declined"}
                onChange={() => setDeniedRerouteOption("after_24h_or_declined")}
                className="mt-1 text-red-600 focus:ring-red-500"
              />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-slate-900 block">After 24 hours OR passenger refused alternate flight</span>
                <span className="text-slate-600">Entitled to 400% of (Basic + Fuel), capped at ₹20,000 + 100% full ticket refund.</span>
              </div>
            </label>
          </div>
        </div>
      )}

      {category === "cancellation" && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Flight Block Time (Scheduled Flight Duration)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setCancellationBlockTime("under_1h")}
                className={`py-2 px-3 rounded-lg text-xs font-medium border cursor-pointer ${
                  cancellationBlockTime === "under_1h"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                Up to 1 hour (₹5,000 cap)
              </button>
              <button
                type="button"
                onClick={() => setCancellationBlockTime("1h_to_2h")}
                className={`py-2 px-3 rounded-lg text-xs font-medium border cursor-pointer ${
                  cancellationBlockTime === "1h_to_2h"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                1 to 2 hours (₹7,500 cap)
              </button>
              <button
                type="button"
                onClick={() => setCancellationBlockTime("over_2h")}
                className={`py-2 px-3 rounded-lg text-xs font-medium border cursor-pointer ${
                  cancellationBlockTime === "over_2h"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                More than 2 hours (₹10,000 cap)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Prior Notice Given by Carrier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="cancellationNotice"
                  checked={cancellationNoticeGiven === "none_or_under_24h"}
                  onChange={() => setCancellationNoticeGiven("none_or_under_24h")}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Under 24 hours notice or at airport (Compensation applies)
                </span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="cancellationNotice"
                  checked={cancellationNoticeGiven === "over_24h"}
                  onChange={() => setCancellationNoticeGiven("over_24h")}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  More than 24 hours prior (Full refund / reroute only)
                </span>
              </label>
            </div>
          </div>
        </div>
      )}

      {category === "delay" && (
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Flight Block Time
              </label>
              <select
                value={delayFlightDuration}
                onChange={(e) => setDelayFlightDuration(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-medium bg-white text-sm"
              >
                <option value="under_2_5h">Up to 2.5 hours (e.g. Del–BOM, BLR–HYD)</option>
                <option value="2_5h_to_5h">2.5 to 5 hours (e.g. DEL–BLR, DEL–COK)</option>
                <option value="over_5h">Over 5 hours (long domestic / international)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Hours of Departure Delay: {delayHours} hrs
              </label>
              <input
                type="range"
                min="1"
                max="26"
                step="1"
                value={delayHours}
                onChange={(e) => setDelayHours(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer mt-2"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 hr</span>
                <span>6 hrs (Refund right)</span>
                <span>24+ hrs (Hotel stay)</span>
              </div>
            </div>
          </div>

          <label className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={isNightFlight}
              onChange={(e) => setIsNightFlight(e.target.checked)}
              className="rounded text-red-600 focus:ring-red-500"
            />
            <span className="text-xs sm:text-sm text-slate-700">
              Flight scheduled between <strong>20:00 (8 PM) and 03:00 (3 AM)</strong> (Night flight: hotel required if delay &gt; 6 hrs).
            </span>
          </label>
        </div>
      )}

      {/* Output Card */}
      <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono">
              Statutory Compensation Slabs (DGCA CAR)
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-red-400">
              {compensationAmount > 0
                ? `₹${compensationAmount.toLocaleString("en-IN")}`
                : category === "delay"
                ? "Meals & Care / 100% Refund Right"
                : "Full Refund / Reroute Mandate"}
            </span>
          </div>
          <div className="text-left sm:text-right">
            <span className="inline-block px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700">
              {legalClause.split("(")[0]}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <div>
            <span className="font-semibold text-white">Slab Assessment: </span>
            {entitlementSummary}
          </div>
          <div>
            <span className="font-semibold text-white">Ticket Status / Refund: </span>
            {refundStatus}
          </div>
          <div>
            <span className="font-semibold text-white">Airport Care &amp; Hospitality: </span>
            {amenitiesStatus}
          </div>
        </div>
      </div>
    </div>
  );
}
