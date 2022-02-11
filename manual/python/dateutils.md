# DateUtils

We provide a set of functions for the date operations based on the datetime module of python. These functions have the same behavior as the functions provided by the formula-type column of SeaTable. At the same time, if the input time string  params has a timezone info, it will be automatically localized first. 

#### function import

```python
from seatable_api.date_utils import dateutils
```

#### date

Return the ISO formatted date string

```python
dateutils.date(2020, 5, 16) # 2020-05-16
```

#### now

Return the ISO formatted date time of current and accurated to seconds

```python
dateutils.now() # 2022-02-07 09:44:00
```

#### dateadd

Addition operation for a datetime by different units such as years, months, weeks, days, hours,  minutes and seconds, default by days

```python
time_str = "2020-6-15"
time_str_s = "2020-6-15 15:23:21"

dateutils.dateadd(time_str, -2, 'years') # 2018-06-15
dateutils.dateadd(time_str, 3, 'months') # 2020-09-15
dateutils.dateadd(time_str_s, 44, 'minutes') # 2020-06-15 16:07:21
dateutils.dateadd(time_str_s, 1000, 'days') # 2023-03-12 15:23:21
dateutils.dateadd(time_str_s, 3, 'weeks') # 2020-07-06 15:23:21
dateutils.dateadd(time_str_s, -3, 'hours') # 2020-06-15 12:23:21
dateutils.dateadd(time_str_s, 3, 'seconds') # 2020-06-15 15:23:24
```

#### datediff

Caculation of the different between 2 date times by different units such as S, Y, D, H, M, YM, MD, YD

* YM: The difference between the months in start_date and end_date. The days and years of the dates are ignored.
* MD: The difference between the days in start_date and end_date. The months and years of the dates are ignored.
* YD:  The difference between the days of start_date and end_date. The years of the dates are ignored.

```python
time_start = "2019-6-1"
time_end = "2020-5-15"
dateutils.datediff(start=time_start, end=time_end, unit='S') # seconds 30153600
dateutils.datediff(start=time_start, end=time_end, unit='Y') # years 1
dateutils.datediff(start=time_start, end=time_end, unit='D') # days 347
dateutils.datediff(start=time_start, end=time_end, unit='H') # hours 8377
dateutils.datediff(start=time_start, end=time_end, unit='M') # months 12
dateutils.datediff(start=time_start, end=time_end, unit='YM') #  -1
dateutils.datediff(start=time_start, end=time_end, unit='MD') #  14
dateutils.datediff("2019-1-28","2020-2-1", unit='YD') # 3
```

#### emonth

Return the last day of the next / last month of given date. Parameters direction can be set by 1 or -1

```python
dateutils.emonth('2020-3-25', direction=-1) # 2021-02-28
dateutils.emonth('2021-3-25', direction=1) # 2021-04-30
```

#### year

Return the year of given date

```python
dateutils.year("2019-1-1") # 2019
```

#### month

Return the month of given date

```python
dateutils.month("2019-5-4") # 5
```

#### months

Return the months difference of two given date

```python
dateutils.month("2019-5-1","2020-5-4") # 12
```

#### day

Return the day of given date

```python
dateutils.day('2020-6-15 15:23:21') # 15
```

#### days

Return the days difference of two given date

```python
dateutils.days('2019-6-1', '2020-5-15') # 349
```

#### hour

Return the hour of given datetime

```pyhton
dateutils.hour("2020-1-1 12:20:30") # 12
```

#### hours

Return the hours difference of two given datetime

```python
dateutils.hours("2019-6-3 20:1:12", "2020-5-3 13:13:13") # 8034
```

#### minute

Return the minutes of given datetime

```python
dateutils.minute("2020-5-3 13:13:13") # 13
```

#### second

Return the seconds of given datetime

```python
dateutils.second("2020-5-3 13:13:33") # 33
```

#### weekday

Return the weekday by recording 0 to 6 from Monday to Sunday

```python
dateutils.weekday("2019-6-3") # 0
```

#### isoweekday

Return the weekday by recording 1 to 7 from Monday to Sunday based on ISO standard

```python
dateutils.isoweekday("2019-6-3") # 1
```

#### weeknum

Return the week number of given date by counting the 1st of Jan. as the first week

```python
dateutils.weeknum('2012-1-2') # 2
```

#### isoweeknum

Return the week number of given date based on ISO standard

```python
dateutils.isoweeknum('2012-1-2') # 1
```

#### isomonth

Return the ISO formatted month

~~~python
dateutils.isomonth("2012-1-2") # 2012-01
~~~

#### other examples

The date info returned can also be assigned as a param of dateutils. Here are some examples:

```python
dt_now = dateutils.now()  # 2022-02-07 09:49:14
# 1. date after 10 days
dt_10_days = dateutils.dateadd(dt_now, 10) # 2022-02-17 09:49:14
# 2. month after 10 days
dt_month_10_days = dateutils.month(dt_10_days) # 2
# 3. difference between 2 days
dt_10_days_before = dateutils.dateadd(dt_now, -10)
date_df = dateutils.datediff(dt_10_days_before, dt_10_days, unit="D") # 20
# 4. handle the time string with time-zone info with local timezone of "Asia/Shanghai"
time_str = "2021-07-17T08:15:41.106+00:00"
time_day = dateutils.day(time_str) # 17
time_month = dateutils.month(time_str) # 7
time_year = dateutils.year(time_str) # 2021
time_hour = dateutils.hour(time_str) # 16，  8 hours more than UTC time in China
time_date = dateuitls.date(time_year, time_month, time_day) # 2021-07-17
```
