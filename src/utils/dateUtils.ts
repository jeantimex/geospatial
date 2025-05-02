/**
 * Converts day of year and time of day to a Date object in the specified timezone
 * 
 * @param dayOfYear - Day of the year (1-365/366)
 * @param timeOfDay - Time of day in hours (0-24)
 * @param timezone - Timezone offset in hours (e.g., 9 for Tokyo/+09:00, -7 for PDT/-07:00)
 * @param year - Optional year (defaults to current year)
 * @returns Date object in the specified timezone
 */
export function createDateFromDayAndTimeWithTimezone(
  dayOfYear: number,
  timeOfDay: number,
  timezone: number = 9, // Default to Tokyo timezone (+09:00)
  year: number = new Date().getFullYear()
): Date {
  // Validate inputs
  if (dayOfYear < 1 || dayOfYear > 366) {
    throw new Error('Day of year must be between 1 and 366');
  }
  
  if (timeOfDay < 0 || timeOfDay > 24) {
    throw new Error('Time of day must be between 0 and 24');
  }
  
  // Start with January 1st of the given year
  const startOfYear = new Date(Date.UTC(year, 0, 1));
  
  // Add days (subtract 1 because dayOfYear starts at 1)
  const dayMillis = (dayOfYear - 1) * 24 * 60 * 60 * 1000;
  
  // Add hours
  const hourMillis = timeOfDay * 60 * 60 * 1000;
  
  // Create the date in UTC
  const utcDate = new Date(startOfYear.getTime() + dayMillis + hourMillis);
  
  // Format the timezone string (e.g., +09:00, -07:00)
  const tzSign = timezone >= 0 ? '+' : '-';
  const tzHours = Math.abs(Math.floor(timezone)).toString().padStart(2, '0');
  const tzMinutes = Math.round((Math.abs(timezone) % 1) * 60).toString().padStart(2, '0');
  const tzString = `${tzSign}${tzHours}:${tzMinutes}`;
  
  // Format the date string with the specified timezone
  const isoString = utcDate.toISOString().replace('Z', tzString);
  
  return new Date(isoString);
}

/**
 * Converts day of year and time of day to a Date object using longitude-based time adjustment
 * 
 * @param dayOfYear - Day of the year (1-365/366)
 * @param timeOfDay - Time of day in hours (0-24)
 * @param longitude - Longitude in degrees (optional, used to calculate time offset)
 * @param year - Optional year (defaults to current year)
 * @returns Date object
 */
export function createDateFromDayAndTimeWithLongitude(
  dayOfYear: number,
  timeOfDay: number,
  longitude?: number,
  year: number = new Date().getFullYear()
): Date {
  // Validate inputs
  if (dayOfYear < 1 || dayOfYear > 366) {
    throw new Error('Day of year must be between 1 and 366');
  }
  
  if (timeOfDay < 0 || timeOfDay > 24) {
    throw new Error('Time of day must be between 0 and 24');
  }
  
  // Calculate epoch and offset based on longitude, matching the original implementation
  const [epoch, offset] = 
    longitude != null
      ? [Date.UTC(year, 0, 1, 0, 0, 0, 0), longitude / 15]
      : [+new Date(year, 0, 1, 0, 0, 0, 0), 0];
  
  // Calculate timestamp using the same formula as the original code
  const timestamp = epoch + (Math.floor(dayOfYear) * 24 + timeOfDay - offset) * 3600000;

  return new Date(timestamp);
}